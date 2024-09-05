import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './RegisterValidation'
import axios from 'axios'
import './Register.css'

function Register() {

    const [values, setValues] = useState({
        RegistroAcademico: '',
        Nombres: '',
        Apellidos: '',
        Contraseña: '',
        CorreoElectronico: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));

        if(errors.RegistroAcademico === '' && errors.Nombres === '' && errors.Apellidos === '' && errors.Contraseña === '' && errors.CorreoElectronico === '') {
            console.log('Datos enviados:', values);

            axios.post('http://localhost:8081/register', values)
            .then(res => { 
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='register-container'>
                <div className='text-center mb-3'>
                    <img src='/images/Usac_logo.png' alt='Logo' className='img-fluid' style={{ maxWidth: '150px' }} />
                </div>
                <form action='' onSubmit={handleSubmit}>
                    <label htmlFor='register' className='d-flex justify-content-center align-items-center'>
                        <strong>REGISTRARSE</strong>
                    </label>
                    <div className='mb-3'>
                        <label htmlFor='registro academico'>Registro Academico</label>
                        <input type='text' placeholder='Ingrese su registro academico' name='RegistroAcademico' 
                            onChange={handleInput} className='form-control rounded-0'/>
                        {errors.RegistroAcademico && <span className='text-danger'>{errors.RegistroAcademico}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='nombres'>Nombres</label>
                        <input type='text' placeholder='Ingrese sus nombres' name='Nombres' 
                            onChange={handleInput} className='form-control rounded-0'/>
                        {errors.Nombres && <span className='text-danger'>{errors.Nombres}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='apellidos'>Apellidos</label>
                        <input type='text' placeholder='Ingrese sus apellidos' name='Apellidos'
                            onChange={handleInput} className='form-control rounded-0'/>
                        {errors.Apellidos && <span className='text-danger'>{errors.Apellidos}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' placeholder='Ingrese su contraseña' name='Contraseña' 
                            onChange={handleInput} className='form-control rounded-0'/>
                        {errors.Contraseña && <span className='text-danger'>{errors.Contraseña}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Correo Electronico</label>
                        <input type='email' placeholder='Ingrese su correo electronico' name='CorreoElectronico' 
                            onChange={handleInput} className='form-control rounded-0'/>
                        {errors.CorreoElectronico && <span className='text-danger'>{errors.CorreoElectronico}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Registrarse</button>
                    <p></p>
                    <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Register