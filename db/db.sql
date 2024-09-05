CREATE DATABASE IF NOT EXISTS register;
USE register;
CREATE TABLE register (
    id INT AUTO_INCREMENT PRIMARY KEY,
    RegistroAcademico VARCHAR(255) NOT NULL,
    Nombres VARCHAR(255) NOT NULL,
    Apellidos VARCHAR(255) NOT NULL,
    Contraseña VARCHAR(255) NOT NULL,
    CorreoElectronico VARCHAR(255) NOT NULL
);