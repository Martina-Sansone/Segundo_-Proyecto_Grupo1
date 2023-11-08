
let juegos=JSON.parse(localStorage.getItem("juegos"))
const id = location.search.split('=')[1]
let contenedor=document.getElementById("contenedor-producto")


    contenedor.innerHTML=juegos.map((producto)=>
`<main class="vista-producto-main">
    <div class="p-3">
        <H3>${producto.nombre}</H3>
    </div>
    <div class=" p-5">
        <div class="row">
            <div class="col-lg-6">
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${producto.img1}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${producto.img2}"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${producto.img3}"
                                class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <p class="p-3">
                  ${producto.sinopsis}
                </p>

                <div class="card mb-3 cardedad" style="max-width: 540px;">
                    <div class="row g-0 card-mature">
                        <div class="col-md-4 p-5">
                            <img src="https://www.globalratings.com/images/ESRB_M_68.png"
                                class="img-fluid rounded-start" alt="..." width="300%">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body card-mature">
                                <h6 class="card-title">Mature 17</h6>
                                <p class="card-text">Content is generally suitable for ages 17 and up. May contain
                                    intense violence, blood and gore, sexual content and/or strong language.</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 ">
                
                    <img src=" ${producto.logo}" alt="" width="60%">
                    <div class="mb-2 style-producto">
                        <div class="boton-juego-base">
                            <button type="button" class="btn btn-primary btn-sm">Juego Base</button>
                        </div>
                     
               
                    <h4> ${producto.precio}</h4>
                    <div class="mb-2">
                        <div class="d-grid gap-2 mb-3">
                            <button class="btn btn-primary btn-comprar " type="button">COMPRAR AHORA</button>
                            <button class="btn btn-primary btn-carrito " type="button">VER EN EL CARRITO <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                              </svg> </button>

                            <button type="button" class="btn btn-outline-light">Añadir al carrito <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                              </svg></button>
                          </div>

                          <div class="caracteristas">
                            <ul class="mt-2">
                                <li> Tipo de reembolso
                                    Autorembolsable</li>
                                <li> Desarrolladora
                                    Rockstar Games</li>
                                <li> Plataforma <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-windows" viewBox="0 0 16 16">
                                    <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
                                  </svg></li>
                              </ul>
                          </div>
                </main> `)
