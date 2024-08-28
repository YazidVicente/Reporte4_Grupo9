import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'

function Login() {
    const [values, setValues] = useState({
        RegistroAcademico: '',
        Contraseña: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action='' onSubmit={handleSubmit}>
                    <label htmlFor='login'><strong>INICIAR SESIÓN INGENIERÍA USAC</strong></label>
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