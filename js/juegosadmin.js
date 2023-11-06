const tBody = document.getElementById('tBodyJuegosAdmin');
const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
const buttonCreate = document.getElementById('idButtonCreate');

const inputNombreJuegoList = document.getElementById('inputNombreJuego');
const inputPrecioList = document.getElementById('inputPrecio');
const inputImgPortadaList = document.getElementById('inputImgPortada');
const inputSipnosisList = document.getElementById('inputSipnosis');
const inputImg1gameList = document.getElementById('inputImg1game');
const inputImg2gameList = document.getElementById('inputImg2game');
const inputImg3gameList = document.getElementById('inputImg3game');
const inputCategoriaEdadList = document.getElementById('inputCategoriaEdad');
const inputDescripcionEdadList = document.getElementById('inputDescripcionEdad');
const inputImgEdadList = document.getElementById('inputImgEdad');
const inputLogoList = document.getElementById('inputLogo');

const navbarAdminCantJuegos = document.getElementById('CantidadJuegos');

navbarAdminCantJuegos.innerHTML = `<p class="text-light">Actualmente hay: ${juegos.length} juego/s</p>`;

function mostrarJuegos() {
    tBody.innerHTML = '';
    juegos.forEach((juego) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
      <th scope="row">${juego.id}</th>
      <td>${juego.nombre}</td>
      <td><img src="${juego.img}" alt="${juego.nombre}" style="width: 50px;"></td>
      <td>${juego.precio}</td>
      <td>${juego.sinopsis}</td>
      <td>
        <button class="btn btn-warning btn-edit" data-id="${juego.id}" data-bs-toggle="modal" data-bs-target="#editModal">Editar</button>
        <button class="btn btn-danger btn-delete" data-id="${juego.id}">Eliminar</button>
      </td>
    `;
        tBody.appendChild(tr);
    });
}

function eliminarJuego(id) {
    const index = juegos.findIndex((juego) => juego.id === id);
    if (index !== -1) {
        juegos.splice(index, 1);
        localStorage.setItem('juegos', JSON.stringify(juegos));
        mostrarJuegos();
    }
}

// Evento para eliminar juego
tBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-delete')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        eliminarJuego(id);
    }
});

// Mostrar juegos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarJuegos();
});

// Event listener para el botón de crear juego
buttonCreate.addEventListener('click', () => {
    // Aquí puedes implementar la lógica para crear un nuevo juego usando los valores de los campos de entrada
    // Puedes acceder a los valores usando, por ejemplo, inputNombreJuego.value, inputPrecio.value, etc.
    // Después de crear el juego, asegúrate de actualizar la lista de juegos llamando a mostrarJuegos()
});

// En lugar de declarar nuevamente las variables, usa las que ya has declarado
const inputNombreJuego = document.querySelectorAll('#inputNombreJuego');
const inputPrecio = document.querySelectorAll('#inputPrecio');
const inputImgPortada = document.querySelectorAll('#inputImgPortada');
const inputSipnosis = document.querySelectorAll('#inputSipnosis');
const inputImg1game = document.querySelectorAll('#inputImg1game');
const inputImg2game = document.querySelectorAll('#inputImg2game');
const inputImg3game = document.querySelectorAll('#inputImg3game');
const inputCategoriaEdad = document.querySelectorAll('#inputCategoriaEdad');
const inputDescripcionEdad = document.querySelectorAll('#inputDescripcionEdad');
const inputImgEdad = document.querySelectorAll('#inputImgEdad');
const inputLogo = document.querySelectorAll('#inputLogo');



const dataFormJuego = {
    NombreJuego: '',
    PrecioJuego: '',
    ImgPortadaJuego: '',
    SipnosisJuego: '',
    Img1game: '',
    Img2game:'',
    Img3game: '',
    categoriaEdadJuego: '',
    DescripcionEdadJuego: '',
    ImgEdadJuego: '',
    LogoJuego: '',
 
};

const changeValuesJuego = (ev) => {
    const { name, value } = ev.target;
    dataFormJuego[name] = value;
};

inputNombreJuego.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});

inputPrecio.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});

inputImgPortada.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});

inputSipnosis.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});


inputImg1game.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});

inputImg2game.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});

inputImg3game.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});

inputCategoriaEdad.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});

inputDescripcionEdad .forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});

inputImgEdad.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});

inputLogo.forEach((element) => {
    element.addEventListener('input', changeValuesJuego);
});


const editarJuego = (idJuego) => {
    const { NombreJuego, PrecioJuego, ImgPortadaJuego, SipnosisJuego, Img1game, Img2game, Img3game, CategoriaEdadJuego, DescripcionEdadJuego, ImgEdadJuego, LogoJuego } = dataFormJuego;


    const filterJuego = juegos.filter((juego) => juego.id === Number(idJuego));
    const positionJuego = juegos.findIndex((juego) => juego.id === Number(idJuego));

    if (filterJuego.length > 0) {
        filterJuego[0].nombre = NombreJuego ? NombreJuego : filterJuego[0].nombre;
        filterJuego[0].precio = PrecioJuego ? PrecioJuego : filterJuego[0].precio;
        filterJuego[0].imgPortada = ImgPortadaJuego ? ImgPortadaJuego : filterJuego[0].imgPortada;
        filterJuego[0].sinopsis = SipnosisJuego ? SipnosisJuego : filterJuego[0].sinopsis;
        filterJuego[0].img1game = Img1game ? Img1game : filterJuego[0].img1game;
        filterJuego[0].img2game = Img2game ? Img2game : filterJuego[0].img2game;
        filterJuego[0].img3game = Img3game ? Img3game : filterJuego[0].img3game;
        filterJuego[0].categoriaEdad = CategoriaEdadJuego ? CategoriaEdadJuego : filterJuego[0].categoriaEdad;
        filterJuego[0].descripcionEdad = DescripcionEdadJuego ? DescripcionEdadJuego : filterJuego[0].descripcionEdad;
        filterJuego[0].imgEdad = ImgEdadJuego ? ImgEdadJuego : filterJuego[0].imgEdad;
        filterJuego[0].logo = LogoJuego ? LogoJuego : filterJuego[0].logo;

        juegos[positionJuego] = filterJuego[0];
        localStorage.setItem('juegos', JSON.stringify(juegos));
        location.reload();
    }
};


const sendFormCreateJuego = () => {
    const {
        NombreJuego,
        PrecioJuego,
        ImgPortadaJuego,
        SipnosisJuego,
        Img1game,
        Img2game,
        Img3game,
        CategoriaEdadJuego,
        DescripcionEdadJuego,
        ImgEdadJuego,
        LogoJuego
    } = dataFormJuego;

    if (!NombreJuego && !PrecioJuego && !ImgPortadaJuego && !SipnosisJuego && !CategoriaEdadJuego) {
        alert('El formulario está vacío');
    } else {
        const newId = juegos[juegos.length - 1].id + 1;

        const juegoNuevo = {
            id: newId,
            nombre: NombreJuego,
            precio: PrecioJuego,
            imgPortada: ImgPortadaJuego,
            sinopsis: SipnosisJuego,
            img1game: Img1game,
            img2game: Img2game,
            img3game: Img3game,
            categoriaEdad: CategoriaEdadJuego,
            descripcionEdad: DescripcionEdadJuego,
            imgEdad: ImgEdadJuego,
            logo: LogoJuego
        };

        juegos.push(juegoNuevo);
        localStorage.setItem('juegos', JSON.stringify(juegos));
        location.reload();
    }
};


buttonCreate.addEventListener('click', sendFormCreateJuego);
