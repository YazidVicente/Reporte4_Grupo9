const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'register',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Ruta para login
app.post('/login', (req, res) => {
    console.log('Datos recibidos:', req.body);
    const sql = 'SELECT * FROM register WHERE RegistroAcademico = ? AND Contraseña = ?';
    db.query(sql, [req.body.RegistroAcademico, req.body.Contraseña], (err, data) => {
        if(err) {
            console.error('Error en la consulta SQL:', err);
            return res.json('Error');
        }
        if(data.length > 0) {
            return res.json('Usuario ya existe');
        } else {
            return res.json('Usuario creado');
        }
    });
});

// Ruta para registro
app.post('/register', (req, res) => {
    const { RegistroAcademico, Nombres, Apellidos, Contraseña, CorreoElectronico } = req.body;

    // Verifica si el Registro Académico ya existe
    const checkRegistroSql = 'SELECT * FROM register WHERE RegistroAcademico = ?';
    db.query(checkRegistroSql, [RegistroAcademico], (err, data) => {
        if (err) {
            console.error('Error en la consulta SQL:', err);
            return res.status(500).json('Error en la verificación de Registro Académico');
        }

        if (data.length > 0) {
            return res.status(409).json('El Registro Académico ya existe');
        } else {
            // Verifica si el Correo Electrónico ya existe
            const checkEmailSql = 'SELECT * FROM register WHERE CorreoElectronico = ?';
            db.query(checkEmailSql, [CorreoElectronico], (err, data) => {
                if (err) {
                    console.error('Error en la consulta SQL:', err);
                    return res.status(500).json('Error en la verificación de Correo Electrónico');
                }

                if (data.length > 0) {
                    return res.status(409).json('El Correo Electrónico ya existe');
                } else {
                    // Si ambos son únicos, procede a agregar el usuario
                    const insertUserSql = 'INSERT INTO register (RegistroAcademico, Nombres, Apellidos, Contraseña, CorreoElectronico) VALUES (?, ?, ?, ?, ?)';
                    db.query(insertUserSql, [RegistroAcademico, Nombres, Apellidos, Contraseña, CorreoElectronico], (err, result) => {
                        if (err) {
                            console.error('Error en la inserción de datos:', err);
                            return res.status(500).json('Error al registrar el usuario');
                        }

                        console.log('Usuario registrado con éxito:', result);
                        return res.status(200).json('Usuario registrado con éxito');
                    });
                }
            });
        }
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});