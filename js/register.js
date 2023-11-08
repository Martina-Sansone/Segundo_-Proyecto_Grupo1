const inputMailR = document.getElementById('email-r')
const inputContraseniaR = document.getElementById('contrasenia-r')
const inputRContraseniaR = document.getElementById('rcontrasenia-r')
const enviarR = document.getElementById('enviar-r')
const campoErrorRc =  document.getElementById('campo-error-r')
const campoErrorRu =  document.getElementById('campo-error-r2')
const campoErrorRcorreo =  document.getElementById('campo-error-r3')

campoErrorRc.classList.add('d-none')
campoErrorRu.classList.add('d-none')
campoErrorRcorreo.classList.add('d-none')

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

const admin = {
    id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
    email: "admin@gmail.com",
    contrasenia: 'administrador',
    rol: 'admin',
    login: false
}

if ( Object.keys(usuarios).length === 0) {
    usuarios.push(admin)
    localStorage.setItem('usuarios', JSON.stringify(usuarios) )
}


const objFormulario = {
    emailR: '',
    contraseniaR: '',
    rContraseniaR: '',
    checkR: false,
}

const valoresFormulario = (ev) => {
    const { name, value } = ev.target
    objFormulario[name] = value
    campoErrorRc.classList.add('d-none')
    campoErrorRu.classList.add('d-none')
    campoErrorRcorreo.classList.add('d-none')
}

const enviarForm = (ev) => {
    ev.preventDefault()
    const { emailR, contraseniaR, rContraseniaR} = objFormulario
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailR)

    if (regex == false){
        return campoErrorRcorreo.classList.remove('d-none')
    }

    console.log(regex)
    if (emailR && contraseniaR && rContraseniaR) {
        if (contraseniaR === rContraseniaR) {
            if(contraseniaR === rContraseniaR) {
                const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
                const usuarioexist = usuarios.filter((usuarioLS) => usuarioLS.email === emailR)

                if(usuarioexist.length > 0){
                    return campoErrorRu.classList.remove('d-none')
                    
                }
                const nuevoUsuario = {
                    id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
                    email: emailR,
                    contrasenia: contraseniaR,
                    rol: 'usuario',
                    login: true
                }

                usuarios.push(nuevoUsuario)

                localStorage.setItem('usuarios', JSON.stringify(usuarios) )
                localStorage.setItem('usuario', JSON.stringify(nuevoUsuario))
                setTimeout(() => {
                    location.href = '../html/inicio.html'
                }, 1000)
            }
        }else{
            campoErrorRc.classList.remove('d-none')
        }
    }
}

inputMailR.addEventListener('input', valoresFormulario)
inputContraseniaR.addEventListener('input', valoresFormulario)
inputRContraseniaR.addEventListener('input', valoresFormulario)
enviarR.addEventListener('click', enviarForm)
