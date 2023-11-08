const tBody = document.getElementById('tBodyJuegosAdmin');
const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
const buttonCreate = document.getElementById('idButtonCreate'); //boton agregar juego//

//Variables imput formulario agregar juego//
const idNombreJuego = document.getElementById('idNombreJuego');
const idPrecio = document.getElementById('idPrecio');
const idImgPortada = document.getElementById('idImgPortada');
const idSinopsis = document.getElementById('idSinopsis');
const idImg1game = document.getElementById('idImg1game');
const idImg2game = document.getElementById('idImg2game');
const idImg3game = document.getElementById('idImg3game');
const idLogo = document.getElementById('idLogo');



// Muestra la cantidad de juegos en el nav//
const navbarAdminCantJuegos = document.getElementById('CantidadJuegos');
CantidadJuegos.innerHTML = `<p class="text-light">Actualmente hay: ${juegos.length} juego/s</p>`;



//Tabla juegos admin//
tBodyJuegosAdmin.innerHTML = juegos.map((juego) =>
    `
    <div class="my-auto">
        <tr>
            <th scope="row" class="fs-5">${juego.id}</th>
            <td product-id="${juego.id}" class="fs-5"><b>${juego.nombre}</b></td>
            <td product-id="${juego.id}"><img src="${juego.img}" class="img-tabla-admin" alt="Imagen Juego" width="150px"></td>
            <td product-id="${juego.id}" class="fs-5"><b>${juego.precio}</b></td>
            <td product-id="${juego.id}" class="fs-5">${juego.sinopsis}</td>

            <td>
                <ul class="lista-carrousel mt-3 fs-5">
                    <li><img src="${juego.img1}" class="img-tabla-admin" alt="Imagen Juego" width="300px"></li>
                    <li><img src="${juego.img2}" class="img-tabla-admin" alt="Imagen Juego" width="300px"></li>
                    <li><img src="${juego.img3}" class="img-tabla-admin" alt="Imagen Juego" width="300px"></li>
                </ul>
            </td>
            <td product-id="${juego.id}"><img src="${juego.logo}" class="img-tabla-admin" alt="Imagen Juego" width="150px"></td>
        

            <td>
                <button class="btn btn-outline-danger" onclick="eliminarJuego(${juego.id})">Eliminar</button>
                <button type="button" class="btn btn-outline-warning my-3" data-bs-toggle="modal" data-bs-target="#exampleModal-${juego.id}">
                    Editar
                </button>
                <div class="modal fade" id="exampleModal-${juego.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${juego.id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel-${juego.id}">${juego.nombre}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                <input type="text" class="form-control inputNombreJuego"  aria-describedby="emailHelp" value="${juego.nombre}" name="nombreJuego">
                              </div>
                                
                              <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Imagen</label>
                    <input type="text" class="form-control inputImgJuego"  aria-describedby="emailHelp" value="Por ej: ${juego.img}" name="imgJuego">
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Precio</label>
                    <input type="text" class="form-control inputPrecioJuego"  aria-describedby="emailHelp" value="$${juego.precio}" name="precioJuego">
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Sinopsis</label>
                    <input type="text" class="form-control inputSinopsisJuego"  aria-describedby="emailHelp"  value="${juego.sinopsis}" name="sinopsisJuego">
                  </div>
                                  
                  <h5 class="text-center">Ingrese las imagenes carrousel </h5>
                  <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Imagen1</label>
                  <input type="text" class="form-control inputImg1Juego"  aria-describedby="emailHelp" value="Por ej: ${juego.img1}" name="img1Juego">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Imagen2</label>
                    <input type="text" class="form-control inputImg2Juego"  aria-describedby="emailHelp" value="Por ej: ${juego.img2}" name="img2Juego">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Imagen3</label>
                    <input type="text" class="form-control inputImg3Juego"  aria-describedby="emailHelp" value="Por ej: ${juego.img3}" name="img3Juego">
                  </div>


                  <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Logo</label>
                  <input type="text" class="form-control inputLogoJuego"  aria-describedby="emailHelp" value="Por ej: ${juego.logo}" name="logoJuego">
                </div>


                                    <button type="button" class="btn btn-primary" onclick="editarJuego(${juego.id})">Guardar Cambios</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-outline-success" onclick="juegoDestacado(${juego.id})">Destacar</button>
            </td>
        </tr>
    </div>
    `
).join('');

//imputs formulario editar juegos//
const inputNombreJuego = document.querySelectorAll('.inputNombreJuego');
const inputImgJuego = document.querySelectorAll('.inputImgJuego');
const inputPrecioJuego = document.querySelectorAll('.inputPrecioJuego');
const inputSinopsisJuego = document.querySelectorAll('.inputSinopsisJuego');
const inputImg1Juego = document.querySelectorAll('.inputImg1Juego');
const inputImg2Juego = document.querySelectorAll('.inputImg2Juego');
const inputImg3Juego = document.querySelectorAll('.inputImg3Juego');
const inputLogoJuego = document.querySelectorAll('.inputLogoJuego');


//Valores actuales formulario//
const dataFormJuego = {
    nombreJuego: '',
    imgJuego: '',
    precioJuego: '',
    sinopsisJuego: '',
    img1Juego: '',
    img2Juego: '',
    img3Juego: '',
    logoJuego: '',
};
//Valores iniciales antes//
const formCreate = {
    nombreJuegoN: '',
    precioJuegoN: '',
    imgJuegoN: '',
    sipnosisJuegoN: '',
    img1N: '',
    img2N: '',
    img3N: '',
    logoJuegoN: '',
};

//evento actualiza dataform cuando le cambian el valor con el formulario//
const changeValues = (ev) => {
    const { name, value } = ev.target;
    dataFormJuego[name] = value;
};

const createJuegoForm = (ev) => {
    const { name, value } = ev.target;
    formCreate[name] = value;
};

// Se la llama cuando se intenta editar un juego, actualiza  propiedades juego nuevos valores y el localstorage//
const editarJuego = (idJuego) => {
    const juegoDest = JSON.parse(localStorage.getItem('juegoDest'))
    const { nombreJuego, imgJuego, precioJuego, sinopsisJuego, img1Juego, img2Juego, img3Juego, logoJuego } = dataFormJuego

    const filterJuego = juegos.filter((juego) => juego.id === Number(idJuego));
    const positionJuego = juegos.findIndex((juego) => juego.id === Number(idJuego));

    if (filterJuego.length > 0) {
        filterJuego[0].nombre = nombreJuego ? nombreJuego : filterJuego[0].nombre;
        filterJuego[0].imgPortada = imgJuego ? imgJuego : filterJuego[0].imgPortada;
        filterJuego[0].precio = precioJuego ? precioJuego : filterJuego[0].precio;
        filterJuego[0].sinopsis = sinopsisJuego ? sinopsisJuego : filterJuego[0].sinopsis;
        filterJuego[0].img1game = img1Juego ? img1Juego : filterJuego[0].img1game;
        filterJuego[0].img2game = img2Juego ? img2Juego : filterJuego[0].img2game;
        filterJuego[0].img3game = img3Juego ? img3Juego : filterJuego[0].img3game;
        filterJuego[0].logo = logoJuego ? logoJuego : filterJuego[0].logo;

        juegos[positionJuego] = filterJuego[0];
        localStorage.setItem('juegos', JSON.stringify(juegos));
        location.reload();
    }
};

//envia formulario de creacion de juegos//
const sendFormCreate = (ev) => {
    const {
        nombreJuegoN,
        imgJuegoN,
        precioJuegoN,
        sipnosisJuegoN,
        img1N,
        img2N,
        img3N,
        logoJuegoN,
    } = formCreate

    //verifica si alguna propiedad esta vacia
    if (!nombreJuegoN && !imgJuegoN && !precioJuegoN && !sipnosisJuegoN && !img1N && !img2N && !img3N && !logoJuegoN) {
        alert('El formulario está vacío');
    } else {
        //genera nuevo id
        const newId = juegos[juegos.length - 1].id + 1;

        // Crea un nuevo objeto de juego con los datos del formulario
        const juegoN = {
            id: newId,
            nombre: nombreJuegoN,
            imgPortada: imgJuegoN,
            precio: precioJuegoN,
            sinopsis: sipnosisJuegoN,
            img1game: img1N,
            img2game: img2N,
            img3game: img3N,
            logo: logoJuegoN
        };

        juegos.push(juegoN);
        localStorage.setItem('juegos', JSON.stringify(juegos));
        location.reload();
    }
}

const eliminarJuego = (idJuego) => {
    const confirmDelete = confirm('Confirmas que quieres eliminar este juego?')
  
    if (confirmDelete) {
      const filterJuego = juegos.filter((juego) => juego.id !== Number(idJuego))
      localStorage.setItem('juegos', JSON.stringify(filterJuego))
      location.reload()
    }
  }


//Funcion Destacar Juego

const juegoDestacado = (idJuego) => {
    let juegoDest = JSON.parse(localStorage.getItem('juegoDest')) || []
    if (juegoDest.length > 0) {

        if (idJuego !== juegoDest[0].id) {

            const confirmCambioDest = confirm('Estas seguro de que quieres cambiar el juego destacado?')
            if (confirmCambioDest) {

                const juegoFilter = juegos.filter((juego) => juego.id === idJuego)
                juegoDest = juegoFilter
                localStorage.setItem('juegoDest', JSON.stringify(juegoFilter))
                alert("se cambio el juego destacado")
            }

        } else { alert('este juego esta destacado') }

    } else {

        const juegoFilter = juegos.filter((juego) => juego.id === idJuego)
        juegoDest.push(juegoFilter[0])
        localStorage.setItem('juegoDest', JSON.stringify(juegoDest))
        alert("destacaste este juego")

    }
}

inputNombreJuego.forEach(element => {
    element.addEventListener('input', changeValues)
});
inputImgJuego.forEach(element => {
    element.addEventListener('input', changeValues)
});
inputPrecioJuego.forEach(element => {
    element.addEventListener('input', changeValues)
});
inputImg1Juego.forEach(element => {
    element.addEventListener('input', changeValues)
});
inputImg2Juego.forEach(element => {
    element.addEventListener('input', changeValues)
});
inputImg3Juego.forEach(element => {
    element.addEventListener('input', changeValues)
});

inputLogoJuego.forEach(element => {
    element.addEventListener('input', changeValues)
});


idNombreJuego.addEventListener('input', createJuegoForm)
idPrecio.addEventListener('input', createJuegoForm)
idImgPortada.addEventListener('input', createJuegoForm)
idSinopsis.addEventListener('input', createJuegoForm)
idImg1game.addEventListener('input', createJuegoForm)
idImg2game.addEventListener('input', createJuegoForm)
idImg3game.addEventListener('input', createJuegoForm)
idLogo.addEventListener('input', createJuegoForm)



buttonCreate.addEventListener('click', sendFormCreate);