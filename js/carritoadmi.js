function guardarAlmacenamientoLocal(llave,valor_a_guardar){
    localStorage.setItem(llave,JSON.stringify(valor_a_guardar)) 
}
function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}
let productos = obtenerAlmacenamientoLocal('productos') || [];
let mensaje = document.getElementById('mensaje')

const añadirProducto = document.getElementById('productoAñadir')
const añadirValor = document.getElementById('valorAñadir')
const añadirExistencia = document.getElementById('existenciaAñadir')
const añadirImagen = document.getElementById('imagenAñadir')

document.getElementById("botonAñadir").addEventListener("click", function(event){
    event.preventDefault()
    let productoAñadir = añadirProducto.value
    let valorAñadir = añadirValor.value
    let existenciaAñadir = añadirExistencia.value
    let imagenAñadir = añadirImagen.value

    let van = true
    if(productoAñadir == '' || valorAñadir == '' || existenciaAñadir == '' || imagenAñadir == ''){
        mensaje.classlist.add('llenarCampos')
        setTimeout(() => {mensaje.classlist.remove('llenarCampos')}, 2500)
        van = false
    }else{
        for (let i = 0; i < productos.lenght; i++){
            if(productos[i].nombre == productoAñadir){
                mensaje.classList.add('repetidoError')
                setTimeout(() => {mensaje.classlist.remove('repetidoError')}, 2500)
                van = false
            }
        }
    }

    if(van == true){
        productos.push({
            nombre:productoAñadir,
            valor:valorAñadir,
            existencia:existenciaAñadir,
            urlImagen : imagenAñadir,
        })
        mensaje.classList.add('realizado')
        setTimeout(() => {
        mensaje.classlist.remove('repetidoError')
        window.location.reload()
    }, 1500)
  }
   guardarAlmacenamientoLocal('productos', productos).addEventListener(click)
 })

 const productoEd = document.getElementById('productoEditar')
 const atributosEd  = document.getElementById('atributoEditar')
 const nuevoAtributoEd = document.getElementById('nuevoAtributo') 

 document.getElementById('botonEditar').addEventListener("click", function (event){

    event.preventDefault()
    let productoEditar = productoEd.value 
    let atributoEditar = atributosEd.value
    let nuevoAtributo = nuevoAtributoEd.value
    let van = false

    if(productoEditar == '' || atributoEditar == '' ||  nuevoAtributo == ''){
        mensaje.classlist.add('llenarCampos')
        setTimeout(() => {mensaje.classlist.remove('llenarCampos')}, 2500)
        van = false
    }
    else{
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].nombre == productoEditar){
               productos[i][atributoEditar] = nuevoAtributo
               van = true
            }    
        }
        if(van == true){
         mensaje.classList.add('realizado')
         setTimeout(() => {
            mensaje.classList.remove('realizado')
            window.location.reload()
         }, 1500);
     } 
     else{
        mensaje.classList.add('noExisteError')
        setTimeout(() => {mensaje.classlist.remove('noExisteError')}, 2500)
     }
     guardarAlmacenamientoLocal('productos', productos);
    }
})


//eliminar//
const productoE = document.getElementById('productoEliminar')

document.getElementById('botonEliminar').addEventListener("click", function (event){
    event.preventDefault()
  let productoEliminar = productoE.value
  let van = false

  for (let i = 0; i < productos.length; i++) {
    if(productos[i].nombre == productoEliminar) {
      productos.splice(i,1)
      van = true
    }
  }

if(van == false){
mensaje.classList.add('noExisteError')
setTimeout(() => {mensaje.classlist.remove('noExisteError')}, 2500)
}
else{
    mensaje.classList.add('realizado')
    setTimeout(() => {
        mensaje.classList.remove('realizado')
        window.location.reload()
     }, 1500);
}
guardarAlmacenamientoLocal('productos', productos);
})

//mostrar productos//
window.addEventListener("load", () =>{
    const productoEd = document.getElementById('productoEditar')
    const productoEl = document.getElementById('productoEliminar')
    for (let i = 0; i < productos.length; i++) {
        productoEd.innerHTML += `<option> ${productos[i].nombre}</option>`
        productoEl.innerHTML += `<option> ${productos[i].nombre}</option>`
    }
    Object.keys(productos[0]).forEach(Element => {
        atributosEd.innerHTML += `<option>${Element}</option>`
    });
    let mostrarProductos = document.getElementById('mostrarProductos')
    mostrarProductos.innerHTML = ''
    for (let i = 0; i < productos.length; i++) {
        mostrarProductos.innerHTML += `<div class="contenedorProductos"><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio"><span>Precio: ${productos[i].valor}$</span></p> Existencia: ${productos[i].existencia}<p></p></div></div>`
        
    }
})