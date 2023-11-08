const botonCerrarSesion = document.getElementById('cerrar-sesion')
const botonCerrarSesion2 = document.getElementById('cerrar-sesion2')

const cerrarSesion = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const usuario = JSON.parse(localStorage.getItem('usuario'))

    const posicionUsuario = usuarios.findIndex((usuarioLS) => usuarioLS.id === usuario.id)
    usuario.login = false
    usuarios[posicionUsuario] = usuario
   

    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    setTimeout(() => {
        location.href = '../index.html'
    },2000)
}

botonCerrarSesion.addEventListener('click', cerrarSesion)
botonCerrarSesion2.addEventListener('click', cerrarSesion)