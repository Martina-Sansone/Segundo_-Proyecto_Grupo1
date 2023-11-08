
const juegos = JSON.parse(localStorage.getItem('juegosDest')) || [];

cardsInicioAdmin.innerHTML = juegos.map((juego) => `<div class="card mb-3">
<img src="${juego.img}" class="card-img-top" alt="${juego.nombre}">
class="card-text"Precio: ${juego.precio}</p>
    <!-- Otros campos del juego que quieras mostrar -->
</div>       <div class="card-body">
    <h5 class="card-title">${juego.nombre}</h5>
    <p class="card-text">${juego.sinopsis}</p>
    <p c
</div> ).join('')`)
