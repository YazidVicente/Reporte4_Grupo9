import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css';

function Login() {
    const [values, setValues] = useState({
        RegistroAcademico: '',
        Contraseña: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));

        if(errors.RegistroAcademico === '' && errors.Contraseña === '') {
            
            console.log('Datos enviados:', values);

            axios.post('http://localhost:8081/login', values)
            .then(res => { 
                if (res.data === 'Usuario ya existe') {
                    navigate('/Home');	
                    } else {
                        alert('Usuario no existe');
                    }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='login-container'>
            <div className='logo-container'>
                    {/* Asegúrate de ajustar el src al path correcto de tu imagen */}
                <img src='/images/Usac_logo.png' alt='Logo' className='img-fluid' style={{ maxWidth: '150px' }} />
            </div>

                <form action='' onSubmit={handleSubmit}>
                    
                    <label htmlFor='login' className='d-flex justify-content-center align-items-center'>
                        <strong>INGRESE SU USUARIO</strong>
                    </label>
                    <div className='mb-3'>
                        <label htmlFor='registro academico'></label>
                        <input
                            type='text'
                            placeholder='Ingrese su registro académico'
                            name='RegistroAcademico'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.RegistroAcademico && <span className='text-danger'>{errors.RegistroAcademico}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='contraseña'></label>
                        <input
                            type='password'
                            placeholder='Ingrese su contraseña'
                            name='Contraseña'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.Contraseña && <span className='text-danger'>{errors.Contraseña}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Iniciar Sesión</button>
                    <p></p>
                    <Link to='register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Registrarse</Link>
                </form>
            </div>
        </div>
    )
}

export default Login