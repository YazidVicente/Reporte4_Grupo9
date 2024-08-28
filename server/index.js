const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'register'   
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.post('/register', (req, res) => {
    console.log('Datos recibidos:', req.body)
    const sql = 'INSERT INTO register (RegistroAcademico, Nombres, Apellidos, Contraseña, CorreoElectronico) VALUES (?);'
    
    const values = [
        req.body.RegistroAcademico,
        req.body.Nombres,
        req.body.Apellidos,
        req.body.Contraseña,
        req.body.CorreoElectronico
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            console.error('Error en la consulta SQL:', err);
            return res.json('Error')
        }
        console.log('Inserción exitosa:', data);
        return res.json(data);
    });
});

app.listen(8081, ()=> {
    console.log('Listening');
});