const inputMailR = document.getElementById('email-r')
const inputContraseniaR = document.getElementById('contrasenia-r')
const inputRContraseniaR = document.getElementById('rcontrasenia-r')
const enviarR = document.getElementById('enviar-r')

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
}

const enviarForm = (ev) => {
    ev.preventDefault()
    const { emailR, contraseniaR, rContraseniaR, checkR} = objFormulario

    if (emailR && contraseniaR && rContraseniaR) {
        if (contraseniaR === rContraseniaR) {
            if(contraseniaR === rContraseniaR) {
                const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
                const usuarioexist = usuarios.filter((usuarioLS) => usuarioLS.email === emailR)

                if(usuarioexist > 0){
                    return alert("El Usuario ya existe")
                }
                const nuevoUsuario = {
                    id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
                    email: emailR,
                    contrasenia: contraseniaR,
                    rol: 'usuario',
                    login: false
                }

                usuarios.push(nuevoUsuario)

                localStorage.setItem('usuarios', JSON.stringify(usuarios) )
            }
        }else{
            alert('las contraseñas no coinciden')
        }
    }
}

inputMailR.addEventListener('input', valoresFormulario)
inputContraseniaR.addEventListener('input', valoresFormulario)
inputRContraseniaR.addEventListener('input', valoresFormulario)
enviarR.addEventListener('click', enviarForm)
