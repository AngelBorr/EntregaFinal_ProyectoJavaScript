// REGISTRO DE JUEGOS //

let catalogoDeJuegos = [];

const catalogoDeJuegosLS = JSON.parse(localStorage.getItem("catalogoJuegos"));

if (catalogoDeJuegosLS){
    catalogoDeJuegos = catalogoDeJuegosLS;
}

class CatalogoGamer{
    constructor(idJuego, nombreJuego, categoria, clasificacion, precio, imagenJuego){
        this.idJuego = idJuego
        this.nombreJuego = nombreJuego;
        this.categoria = categoria;
        this.clasificacion = clasificacion;
        this.precio = precio;
        this.imagenJuego = imagenJuego;
        
    }
    
    
}


function preventDefault(){
    const actualizaForm = document.getElementById("formulario_juegos");

    actualizaForm.addEventListener("submit", function(event){
        event.preventDefault()}
    );

}

function limpiarCamposFormularioJuegos() {
        const inputNombreJuego = document.getElementById("nombre_juego");
        const inputCategoriaJuego = document.getElementById("categoria_juego");
        const inputClasificacionJuego = document.getElementById("precio_juego");
        const inputPrecioJuego = document.getElementById("clasificacion_juego");
        const inputImgJuego = document.getElementById("imgJuego");
    
        inputNombreJuego.value = "";
        inputCategoriaJuego.value = "";
        inputClasificacionJuego.value = "";
        inputPrecioJuego.value = "";
        inputImgJuego.value = "";

}

function agregarJuegoPlanilla(){

    const contenidoTablaJuegos = document.getElementById("tabla_catalogo_juegos");

    let juegosRegistradosEnPlanilla = [];

    const juegosEnLS = JSON.parse(localStorage.getItem("catalogoJuegos"));

    juegosEnLS.forEach((juegoEnTabla) => {
        let juegoNuevaFila = document.createElement("tr");

        juegoNuevaFila.className ="table-striped";
        juegoNuevaFila.innerHTML= `
        
        <td>${juegoEnTabla.idJuego}</td>
        <td>${juegoEnTabla.nombreJuego}</td>
        <td>${juegoEnTabla.categoria}</td>
        <td>${juegoEnTabla.clasificacion}</td>
        <td>${juegoEnTabla.precio}</td>
        
        `;
        
        contenidoTablaJuegos.appendChild(juegoNuevaFila);
    });

}

function enviarJuegosAPagesPrincipal(){

    const juegosEnLocalStorage = JSON.parse(localStorage.getItem("catalogoJuegos"));

    juegosEnLocalStorage.forEach((trasladoJuegosPagesPrincipal) => {
        let contenedor = document.createElement("div");

        contenedor.innerClassName = "cardProduct borderRounded h-100  card-group"
        contenedor.innerHTML= `

        <img
        src="${trasladoJuegosPagesPrincipal.imagenJuego}"
        alt=""
        class="cardProduct__image borderRounded imgTarjetas"
        />

        <div class="cardProduct__description">
        <strong class="cardProduct__description__price">${trasladoJuegosPagesPrincipal.precio}</strong>
        <H6>${trasladoJuegosPagesPrincipal.nombreJuego}</H6>
        <p class="cardProduct__description__text">
            DESCRIPCION JUEGO
        </p>
        <p>Posicion Catalogo: ${trasladoJuegosPagesPrincipal.idJuego}</p>
        <div class="btnTarjetas">

            <a href="./carrito.html" type="button" id="comprarCarrito" class="btn btn-primary">Comprar</a>
            <a href="#" id="agredarAlCarrito" name="agredarAlCarrito" class="card-link btnMandarCarrito">Mandar al Carrito</a>
            
        </div>
        
        `;
        

        contenidoPagePrincipal.append(contenedor)

        }
    );
}

/// JUEGOS INGRESADOS MANUALMENTE ////

const ingresoDeJuegosManual = [

    new CatalogoGamer(1, "God Of War", "accion", "+18", "6000", "./../asess/image/imgGodOfWard.jpg"),
    new CatalogoGamer(2, "Fifa 2023", "deporte", "-18", "8000", "./../asess/image/imgFifa2023.jpg"),
    new CatalogoGamer(3, "Call Of Duty", "accion", "+18", "8000", "./../asess/image/imgCallOfDutyWarzone2.jpg"),
    new CatalogoGamer(4, "Fall Guys", "simulacion", "-18", "4000", "./../asess/image/imgFallGuys.jpg"),
    new CatalogoGamer(5, "Pokemon", "aventura", "-18", "7000", "./../asess/image/imgPokemon.jpg"),
    new CatalogoGamer(6, "Box King Las Vegas", "deporte", "+18", "8000", "./../asess/image/imgBoxKingVegas.jpg"),
    new CatalogoGamer(7, "Minecraf", "aventura", "-18", "5000", "./../asess/image/imgMinecraf.jpg"),
    new CatalogoGamer(8, "ARK Survival Evolved", "simulacion", "+18", "9000", "./../asess/image/imgARKsurvival.jpg"),
    new CatalogoGamer(9, "Crash Bandicoot", "aventura", "-18", "9000", "./../asess/image/imgCrashBandicoot.jpg")


]

localStorage.setItem("catalogoJuegos", JSON.stringify(ingresoDeJuegosManual));

agregarJuegoPlanilla();

enviarJuegosAPagesPrincipal();

const agregarJuegoFormulario = document.getElementById("btnAgregarJuego");

agregarJuegoFormulario.addEventListener("click", function capturarJuego(){

    preventDefault();

    const idJuego = JSON.parse(localStorage.getItem("catalogoJuegos"));

    let posicionJuegoCapturar = (idJuego.length);

    if (posicionJuegoCapturar > 0) {
        posicionJuegoCapturar++
    }

    let nombreJuegoCapturar = document.getElementById("nombre_juego").value;

    if (nombreJuegoCapturar === "") {
        Toastify({
            text: "No has ingresado el Nombre del Juego en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
        }).showToast();
            
        return;
    }

    let categoriaJuegoCapturar = document.getElementById("categoria_juego").value;

    if (categoriaJuegoCapturar === "-") {
        Toastify({
            text: "No has ingresado la Categoria del Juego en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
        }).showToast();
            
        return;
    }

    let clasificacionJuegoCapturar = document.getElementById("clasificacion_juego").value;

    if (clasificacionJuegoCapturar === "-") {
        Toastify({
            text: "No has ingresado la Clasificacion del Juego en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
                background:"linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
        }).showToast();
            
        return;
    }

    let precioJuegoCapturar = document.getElementById("precio_juego").value;

    if (precioJuegoCapturar === "") {
        Toastify({
            text: "No has ingresado el Valor del Juego en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
        }).showToast();
            
        return;
    }

    let imagenJuegoCapturar = document.getElementById("imgJuego").value;

    if (imagenJuegoCapturar === "") {
        Toastify({
            text: "No has ingresado ninguna Imagen en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
        }).showToast();
            
        return;
    }
        
    const nuevoJuego = new CatalogoGamer(posicionJuegoCapturar, nombreJuegoCapturar, categoriaJuegoCapturar, clasificacionJuegoCapturar, precioJuegoCapturar, imagenJuegoCapturar);

    // JUEGOS INGRESADOS POR FORMULARIO ///

    catalogoDeJuegos.push(nuevoJuego);

    console.log(nuevoJuego)

    function agregarJuegoPlanillaDesdeElForm (){
        const contenidoTablaJuegos = document.getElementById("tabla_catalogo_juegos");

        let juegoNuevaFila = document.createElement("tr");

        juegoNuevaFila.className ="class=table-striped";

        juegoNuevaFila.innerHTML= `
        
        <td class="table-striped">${posicionJuegoCapturar}</td>
        <td class="table-striped">${nombreJuegoCapturar}</td>
        <td class="table-striped">${categoriaJuegoCapturar}</td>
        <td class="table-striped">${clasificacionJuegoCapturar}</td>
        <td class="table-striped">${precioJuegoCapturar}</td>
        
        `;
        /* <img src="${juegoSeleccionado.img}"> */

        contenidoTablaJuegos.append(juegoNuevaFila);
    }

    agregarJuegoPlanillaDesdeElForm();

    localStorage.setItem("catalogoJuegos", JSON.stringify(catalogoDeJuegos));

    

    /* incorpora nuevo juevo y lo suma pero no muestra en el local storage todos los juegos, si actualizo si lo hace */

    limpiarCamposFormularioJuegos();

    Toastify({
        text: "Se ha creado exitosamente el registro!! ",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        newWindow: true,
        close: true,
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
        },
    }).showToast();
        
}
);

