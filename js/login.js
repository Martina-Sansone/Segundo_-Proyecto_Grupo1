const inputMailI = document.getElementById('email-i')
const inputContraseniaI = document.getElementById('contrasenia-i')
const enviarI = document.getElementById('enviar-i')

const objFormularioI = {
    emailI: '',
    contraseniaI: ''
}

const valoresFormularioI = (ev) => {
    const { name, value } = ev.target
    objFormularioI[name] = value
}

const enviarFormI = (ev) => {
    ev.preventDefault()
    const { emailI, contraseniaI } = objFormularioI

    if (emailI && contraseniaI) {

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
        const usuarioexist = usuarios.filter((usuarioLS) => usuarioLS.email === emailI)

        if (usuarioexist.length === 0) {
            return alert("usuario y/o contraseña incorrecto")
        }

        if(usuarioexist[0].contrasenia === contraseniaI){
            usuarioexist[0].login = true
            localStorage.setItem('usuarios', JSON.stringify(usuarios))

            if (usuarioexist[0].rol === 'admin') {
                location.href='./html/Admin.html'
            }else{
                location.href='./html/inicio.html'
            }

        }else{
            alert("usuario y/o contraseña incorrecto")
        }
    }
}

inputMailI.addEventListener('input', valoresFormularioI)
inputContraseniaI.addEventListener('input', valoresFormularioI)
enviarI.addEventListener('click', enviarFormI)