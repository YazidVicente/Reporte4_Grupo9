function Validation(values) {
    alert('')
    let error = {}
    const RegistroAcademico_patterns = /^[0-9]{9}$/
    const Contraseña_patterns = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{8,}$/

    if(values.RegistroAcademico === '') {
        error.RegistroAcademico = 'Registro Academico es requerido'
    }
    else if (!RegistroAcademico_patterns.test(values.RegistroAcademico)) {
        error.RegistroAcademico = 'Registro Academico no es valido'
    }
    else {
        error.RegistroAcademico = ''
    }

    if(values.Contraseña === '') {
        error.Contraseña = 'Contraseña es requerida'
    }
    else if (!Contraseña_patterns.test(values.Contraseña)) {
        error.Contraseña = 'Contraseña no es valida'
    }
    else {
        error.Contraseña = ''
    }
    return error;
}

export default Validation;
