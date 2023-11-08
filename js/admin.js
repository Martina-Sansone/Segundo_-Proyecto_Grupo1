const botellas = JSON.parse(localStorage.getItem('juegosDest')) || [];

cardsInicioAdmin.innerHTML = juegos.map((juego) => `<div class="card mb-3">
<img src="${juego.imgJuego}" class="card-img-top" alt="${juego.nombreJuego}">
lass="card-text">Precio: ${juego.precioJuego}</p>
    <!-- Otros campos del juego que quieras mostrar -->
</div>       <div class="card-body">
    <h5 class="card-title">${juego.nombreJuego}</h5>
    <p class="card-text">${juego.sinopsisJuego}</p>
    <p c
</div>` ).join('')