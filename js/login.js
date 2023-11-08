const inputMailI = document.getElementById('email-i')
const inputContraseniaI = document.getElementById('contrasenia-i')
const enviarI = document.getElementById('enviar-i')
const campoError = document.getElementById('campo-error-i')

campoError.classList.add('d-none')

const objFormularioI = {
    emailI: '',
    contraseniaI: ''
}

const valoresFormularioI = (ev) => {
    const { name, value } = ev.target
    objFormularioI[name] = value
    campoError.classList.add('d-none')
}

const enviarFormI = (ev) => {
    ev.preventDefault()
    const { emailI, contraseniaI } = objFormularioI

    if (emailI && contraseniaI) {

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
        const usuarioexist = usuarios.filter((usuarioLS) => usuarioLS.email === emailI)

        if (usuarioexist.length === 0) {
            return campoError.classList.remove('d-none')
        }

        if(usuarioexist[0].contrasenia === contraseniaI){
            usuarioexist[0].login = true
            localStorage.setItem('usuarios', JSON.stringify(usuarios))
            localStorage.setItem('usuario', JSON.stringify(usuarioexist[0]))
            if (usuarioexist[0].rol === 'admin') {
                location.href='./html/InicioAdmin.html'
            }else{
                location.href='./html/inicio.html'
            }

        }else{
            campoError.classList.remove('d-none')
        }
    }
}

inputMailI.addEventListener('input', valoresFormularioI)
inputContraseniaI.addEventListener('input', valoresFormularioI)
enviarI.addEventListener('click', enviarFormI)