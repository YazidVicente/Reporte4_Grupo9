function Validation(values) {
    alert('')
    let error = {}
    const RegistroAcademico_patterns = /^[0-9]{9}$/
    const nombre_patterns = /^[A-Za-z]{1,}$/
    const Apellidos_patterns = /^[A-Za-z]{1,}$/
    const CorreoElectronico_patterns = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const Contraseña_patterns = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{8,}$/

    if(values.Nombres === '') {
        error.Nombres = 'Nombres son requeridos'
    }
    else {
        error.Nombres = ''
    }

    if(values.Apellidos === '') {
        error.Apellidos = 'Apellidos son requeridos'
    }
    else {
        error.Apellidos = ''
    }

    if(values.RegistroAcademico === '') {
        error.RegistroAcademico = 'Registro Academico es requerido'
    }
    else if(!RegistroAcademico_patterns.test(values.RegistroAcademico)) {
        error.RegistroAcademico = 'Registro Academico no es valido'

    }
    else {
        error.RegistroAcademico = ''
    }

    if(values.CorreoElectronico === '') {
        error.CorreoElectronico = 'Correo Electronico es requerido'
    }
    else if(!CorreoElectronico_patterns.test(values.CorreoElectronico)) {
        error.CorreoElectronico = 'Correo Electronico no es valido'
    }
    else {
        error.CorreoElectronico = ''
    }

    if(values.Contraseña === '') {
        error.Contraseña = 'Contraseña es requerida'
    }
    else if(!Contraseña_patterns.test(values.Contraseña)) {
        error.Contraseña = 'Contraseña no es valida'
    }
    else {
        error.Contraseña = ''
    }

    return error;
}

export default Validation;
