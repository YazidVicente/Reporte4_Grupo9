import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './RegisterValidation'
import axios from 'axios'

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
            
            axios.post('http://localhost:8081/register', values)
            .then(res => { 
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }





  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor='login' className='d-flex justify-content-center align-items-center'><strong>REGISTRARSE</strong></label>
                <div className='mb-3'>
                    <label htmlFor='registro academico' className=''><strong>Registro Academico</strong></label>
                    <input type='text' placeholder='' name='RegistroAcademico' 
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.RegistroAcademico && <span className='text-danger'>{errors.RegistroAcademico}</span>}

                </div>
                <div className='mb-3'>
                    <label htmlFor='nombres' className=''><strong>Nombres</strong></label>
                    <input type='text' placeholder='' name='Nombres' 
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.Nombres && <span className='text-danger'>{errors.Nombres}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='apellidos' className=''><strong>Apellidos</strong></label>
                    <input type='text' placeholder='' name='Apellidos'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.Apellidos && <span className='text-danger'>{errors.Apellidos}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className=''><strong>Contraseña</strong></label>
                    <input type='password' placeholder='' name='Contraseña' 
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.Contraseña && <span className='text-danger'>{errors.Contraseña}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className=''><strong>Correo Electronico</strong></label>
                    <input type='email' placeholder='' name='CorreoElectronico' 
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.CorreoElectronico && <span className='text-danger'>{errors.CorreoElectronico}</span>}
                </div>
                <button type='sumbit'className='btn btn-success w-100 rounded-0'>Registrarse</button>
                <p></p>
                <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Register