const contenidoPagePrincipal = document.getElementById("contenidoPagePrincipal");
//const btnComprar = document.getElementById("comprarCarrito");
const modalContainer = document.getElementById("modalContainer");
//const comprar = document.getElementById("btnComprar");
const listaCarrito = document.getElementById("listaCarrito");

let carrito = [];

const juegosCarrito = JSON.parse(localStorage.getItem("catalogoJuegos"));
//const juegosCarrito = localStorage.getItem("catalogoJuegos");

/* juegosCarrito.forEach((juegoSeleccionado) => {
    let contenedor = document.createElement("div");
    contenedor.innerHTML= `
    <h3>${juegoSeleccionado.nombreJuego}</h3>
    <p>${juegoSeleccionado.precio}</p>
    `;
    /* <img src="${juegoSeleccionado.img}">

    contenidoPagePrincipal.append(contenedor);
});

const btnComprar = document.getElementById("comprarCarrito");

btnComprar.addEventListener("click", function juegosAlCarrito (){

    const listaCarrito = document.getElementById("listaCarrito");

    const producto = document.createElement("li");
    producto.className = "list-group-item d-flex justify-content-between lh-sm";
    producto.innerHTML = `
    <div>
    <h6 class="my-0">Producto:</h6>
    <small class="text-muted">${producto.nombreJuego}</small>
    </div>
    <span class="text-muted">${producto.precio}</span>

    `;
    console.log(producto.nombreJuego)
    listaCarrito.append(producto);
    console.log(producto)
}) */

/* class Carrito{

    //Añadir productos al carrito

    comprarProducto(e){
        e.preventDeFault();
        if(e.cardProduct.classList.contenidoPagePrincipal("agredarAlCarrito")){
            const producto = e.target.parentElement.parentElement;
            //this.leerDatosProducto(producto);
            
            console.log(producto)
        }
    }
}

const pedido = new Carrito();

const carrito = document.getElementById("carritoCompras");

const productos = document.getElementById("contenidoPagePrincipal");

const listaProductosCarrito = document.querySelector("#contenidoPagePrincipal");

cargarEventos();

function cargarEventos(){
    productos.addEventListener("click", (e)=>{pedido.comprarProducto(e)})
}

function preventDeFault(){

    const anadirAlCarrito = document.getElementById("agredarAlCarrito")

    anadirAlCarrito.addEventListener("submit", function (event){
        event.preventDefault();
    })
}

const anadirAlCarrito = document.getElementById("agredarAlCarrito")

anadirAlCarrito.addEventListener("click", function agregarAlCarrito (){
    preventDeFault();
    
    const productos = document.querySelector("cardProduct");

    productos.forEach((productoEnCarrito) =>{
        const productoCompra = productoEnCarrito.nombreJuego;
        const precioProducto = productoEnCarrito.precio
    })

    console.log(productoCompra)
})







*/
