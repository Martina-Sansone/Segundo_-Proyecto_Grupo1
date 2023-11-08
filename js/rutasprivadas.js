const usuario = JSON.parse(localStorage.getItem ('usuario'))

if (!usuario){
    location.href = '../index.html'
}else {
    if(usuario.rol === 'admin'){
        location.href = '../html/ADMIN/InicioAdmin.html'
    }else{
        location.href = '../html/inicio.html'
    }
}