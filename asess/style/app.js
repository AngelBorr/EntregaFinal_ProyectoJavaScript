if (window.location == 'https://angelborr.github.io/EntregaFinal_ProyectoJavaScript/asess/pages/registrarse.html') {
    
        /* REGISTRO DE USUARIOS - PAGES REGISTRO */

    let listadoDeUsuarios = [];

    const listaDeUsuariosLS = JSON.parse(localStorage.getItem("ListaUsuario"));

    if (listaDeUsuariosLS) {
        listadoDeUsuarios = listaDeUsuariosLS;
    }

    class Usuario {
        constructor(posicion, nombreCompleto, nombreUsuario, email, contrasena) {
            (this.posicion = posicion),
            (this.nombreCompleto = nombreCompleto),
            (this.nombreUsuario = nombreUsuario),
            (this.email = email),
            (this.contrasena = contrasena);
        }
    }

    // USUARIOS INGRESADOS MANUALMENTE //
            
    let usuariosRegistradosManual = [

        new Usuario(1, "Agustin Borrego", "Agus.borr", "agustin.g.borrego@gmail.com", 9876),
        new Usuario(2, "Tomas Borrego", "TomasGamer", "tomas.borr@gmail.com", 2501),
        new Usuario(3, "Angel Borrego", "Angelborr", "angel_borr@gmail.com", 12345),
        new Usuario(4, "Soledad Kopf", "Solekopf", "soledad.kopf@gmail.com", 201286)
            
    ]
            
    localStorage.setItem("ListaUsuario", JSON.stringify(usuariosRegistradosManual));

    function limpiarCamposFormulario() {
        const inputNombreCompleto = document.getElementById("nombreCompletoUsuario");
        const inputNombreUsuario = document.getElementById("nombreUsuario");
        const inputCorreoEmail = document.getElementById("correoEmail");
        const inputContrasena = document.getElementById("contrasena");

        inputNombreCompleto.value = "";
        inputNombreUsuario.value = "";
        inputCorreoEmail.value = "";
        inputContrasena.value = "";

    }

    //btnCrearUsuarioNuevo

    function guardarUsuario() {

        function preventDeFaultRegistroUsuario (){

            const formularioRegistrarUsuario = document.getElementById("registroUsuario");

            formularioRegistrarUsuario.addEventListener("submit", function (event) {
                event.preventDefault();
            });

        }

        preventDeFaultRegistroUsuario();

        const idUsuarios = JSON.parse(localStorage.getItem("ListaUsuario"));
            

        let pPosicionCapturar = (idUsuarios.length);

        if (pPosicionCapturar > 0) {
            pPosicionCapturar++
        }

        let pNombreCompleto = document.getElementById("nombreCompletoUsuario").value;

        if (pNombreCompleto === "") {
            Toastify({
            text: "No has ingresado tu Nombre Completo en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
                background:
                "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
            }).showToast();
            return;
        }

        let pNombreUsuario = document.getElementById("nombreUsuario").value;

        if (pNombreUsuario === "") {
            Toastify({
            text: "No has ingresado tu Nombre de Usuario en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
                background:
                "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
            }).showToast();

            return;

        }

        let pEmail = document.getElementById("correoEmail").value;

        if (pEmail === "") {
            Toastify({
            text: "No has ingresado tu E-mail en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
                background:
                "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
            }).showToast();
            return;
        }

        let pContrasena = document.getElementById("contrasena").value;

        if (pContrasena === "") {
            Toastify({
            text: "No has ingresado una contraseña en el campo indicado ",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            //destination: "https://angelborr.github.io/PreEntrega_ProyectoJs/",
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
                background:
                "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
            }).showToast();
            return;
        }

        const nuevoUsuario = new Usuario( pPosicionCapturar, pNombreCompleto, pNombreUsuario, pEmail, pContrasena);
        
        // USUARIOS INGRESADOS POR FORMULARIO //

        listadoDeUsuarios.push(nuevoUsuario);

        localStorage.setItem("ListaUsuario", JSON.stringify(nuevoUsuario));

        sessionStorage.setItem("UsuarioSession", JSON.stringify(pEmail));
        sessionStorage.setItem("ContrasenaSession", JSON.stringify(pContrasena));

        limpiarCamposFormulario();

        Toastify({
            text: "Se ha creado exitosamente el registro!! \n Has Click para redireccionarte a la Pagina Principal",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            destination: (window.location.assign = "./../../index.html"),
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
            background:
                "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
        }).showToast();

        // FALTA FUNCION CHEQUEAR QUE EL USUARIO A REGISTRAR NO SE ENCUENTRE YA REGISTRADO //
    };

    const CrearUsuarioNuevo = document.getElementById("btnCrearUsuario");

    CrearUsuarioNuevo.addEventListener("click", (e) => {

        if (e.target.id === "btnCrearUsuario") {
            guardarUsuario();

        
        }

        
    });


}if(window.location == "https://angelborr.github.io/EntregaFinal_ProyectoJavaScript/index.html"){

    // INICIAR SESION - PAGES INDEX

    // se utiliza localsession para guardar usuario y contraseña para poder dar ingreso a nuevo usuario por no tener base de datos, se intenta hacer con el localstorage y no pude

    const btnIngresoUsuario = document.getElementById("btnIniciarSesion");

    btnIngresoUsuario.addEventListener("click", (e) => {
    
        if (e.target.id === "btnIniciarSesion"){
        accesoUsuario();
        }
    });



    function accesoUsuario() {

    const usuarioSession = JSON.parse(sessionStorage.getItem("UsuarioSession"));

    const contrasenaSession = JSON.parse(sessionStorage.getItem("ContrasenaSession"));

    
    
    let usuarioEmail = document.getElementById("emailUsuarioRegistrado").value;

    let usuarioContrasena = document.getElementById("contrasenaUsuarioRegistrado").value;

    if (usuarioSession === usuarioEmail && contrasenaSession === usuarioContrasena) {
            
        Toastify({
            text: "Bienvenido a JuegosOnline.com!! \n Has Click para redireccionarte a la Pagina Principal",
            duration: 4000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            destination: (window.location.assign = "./asess/pages/principal.html"),
            newWindow: true,
            close: true,
            stopOnFocus: true,
            style: {
            background:
                "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
            },
        }).showToast();


        //no puedo redireccionar con la confirmacion de la igualda de los datos

        //window.location.assign("https://www.w3schools.com")


        //window.location.assign(www.google.com.ar)

        //window.location.href = "principal.html"

    } else {
        Toastify({
            text: "has ingresado E-mail y/o Contraseña incorrecto, vuelve a intentarlo",
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
                    
            
    }

        

    };
}if(window.location == 'https://angelborr.github.io/EntregaFinal_ProyectoJavaScript/asess/pages/principal.html'){

    /* PAGINA PRINCIPAL */

    const catalogoDeJuegosLS = JSON.parse(localStorage.getItem("catalogoJuegos"));

    const contenidoPaginaPrincipal = document.getElementById("contenidoPagePrincipal");
    
    let btnAgregarCarrito = document.querySelectorAll(".btnMandarCarrito");
    
    const contadorCarrito = document.getElementById("contadorCarrito");
    
    function agregarJuegosCategorias(){
    
        const contenidoPaginaPrincipal = document.getElementById("contenidoPagePrincipal");
    
        contenidoPaginaPrincipal.innerHTML = ` `;
    
        productosElegidos = JSON.parse(localStorage.getItem("catalogoJuegos")); 
    
        productosElegidos.forEach(producto => {
            const contenidoPaginaPrincipal = document.getElementById("contenidoPagePrincipal")
    
            const juegosPaginaPrincipal = document.createElement("div");
    
            juegosPaginaPrincipal.className = "cardProduct borderRounded h-100 card-group"
            juegosPaginaPrincipal.innerHTML= `
    
            <img src="${producto.imagenJuego}" alt="" class="cardProduct__image borderRounded imgTarjetas"/>
            <div class="cardProduct__description">
                <strong class="cardProduct__description__price" >${producto.precio}</strong>
                <H6>${producto.nombreJuego}</H6>
                <p class="cardProduct__description__text">DESCRIPCION JUEGO</p>
                <p>Posicion Catalogo: ${producto.idJuego}</p>
                <p>Categoria: ${producto.categoria}</p>
                <div class="btnTarjetas">
                    <a href="./carrito.html" type="button" id="comprarCarrito" class="btn btn-primary">Comprar</a>
                    <a href="#" id="${producto.idJuego}" name="agredarAlCarrito" class="card-link btnMandarCarrito">Mandar al Carrito</a>            
                </div>
            </div>
    
            `;
    
            contenidoPaginaPrincipal.append(juegosPaginaPrincipal)
        });
    
        actualizarBtnAgregarCarrito();
        
    };
    
    agregarJuegosCategorias();
    
    const btnCategorias = document.querySelectorAll(".btnCategorias");
    
    btnCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
    
            btnCategorias.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");
    
            if (e.currentTarget.id != "catalogoCompleto") {
    
                let productosBtn = catalogoDeJuegosLS.filter(producto => (producto.categoria == e.currentTarget.id));
    
                agregarJuegosCategorias(productosBtn); //ver funcion, me actualiza los btn y hace el filtro pero muestra todos los juegos 
    
                /* POR CONSOLA ME TOMA EL FILTRO PERO EN LA PAGINA ME SIGUE MOSTRANDO TODO EL CATALOGO */
    
                console.log(productosBtn)
    
            }else{
    
                agregarJuegosCategorias(catalogoDeJuegosLS);
    
            }
    
        })
    })
    
    function actualizarBtnAgregarCarrito (){
        btnAgregarCarrito = document.querySelectorAll(".btnMandarCarrito");
    
        btnAgregarCarrito.forEach(boton => {
            boton.addEventListener("click", agregarJuegosAlCarrito)
        })
    }
    
    const juegosEnCarrito = [];
    
    function agregarJuegosAlCarrito (e){
    
        const idBoton = e.currentTarget.id;
    
        const juegosAgregadosEnCarrito = catalogoDeJuegosLS.find(producto => (producto.idJuego == idBoton));
    
        if (juegosEnCarrito.some(producto => (producto.idJuego == idBoton))){
            
            const index = juegosEnCarrito.findIndex(producto => (producto.idJuego == idBoton));
            juegosEnCarrito[index].cantidad++;
    
        }else{
    
            juegosAgregadosEnCarrito.cantidad = 1;
            juegosEnCarrito.push(juegosAgregadosEnCarrito)
    
        }
    
        
        actualizarContadorCarrito();
    
        localStorage.setItem("Carrito", JSON.stringify(juegosEnCarrito))
    
    }
    
    function actualizarContadorCarrito(){
        let acumuladorCarrito = juegosEnCarrito.reduce((acumulado, producto) => acumulado + producto.cantidad, 0);
        contadorCarrito.innerText = acumuladorCarrito;
    }

}if(window.location == 'https://angelborr.github.io/EntregaFinal_ProyectoJavaScript/asess/pages/carrito.html'){

    /* PAGINA CARRITO */

    let carrito;

    const carritoLS = localStorage.getItem("Carrito");

    if (carritoLS) {

        carrito = JSON.parse(carritoLS);
        
    } else {
        carrito = [];
    }

    let btnEliminarProductoCarrito = document.querySelectorAll(".btnEliminarProducto");

    function actualizarbtnEliminarProductoCarrito (){
        btnEliminarProductoCarrito = document.querySelectorAll(".btnEliminarProducto");

        btnEliminarProductoCarrito.forEach(boton => {
            boton.addEventListener("click", eliminarJuegosCarrito)
        })
    }

    /* VER FUNCION = ELIMINA EN CONSOLA (NUEVO CARRITO) PERO NO PUEDO APLICARLO EN PANTALLA */

    function eliminarJuegosCarrito(e){

        btnEliminarProductoCarrito = e.currentTarget.id;

        console.log(e)

        const juegoEliminadoCarrito = (JSON.parse(carritoLS)).findIndex(producto => (producto.idJuego == btnEliminarProductoCarrito));
        
        const nuevoCarrito = (JSON.parse(carritoLS)).splice(0, juegoEliminadoCarrito);

        console.log(nuevoCarrito);

        agregarJuegosCarrito();

        localStorage.setItem("Carrito", JSON.stringify(nuevoCarrito));
    }

    function actualizarContadorCarrito(){
        let carrito = JSON.parse(carritoLS);
        let acumuladorPaginaCarrito = carrito.reduce((acumulado, producto) => acumulado + producto.cantidad, 0);
        contadorPaginaCarrito.innerText = acumuladorPaginaCarrito;

    }

    const contadorPaginaCarrito = document.getElementById("contadorPaginaCarrito");

    const codigoPromocion = document.getElementById("codigoPromocion");
    const descuentos = document.getElementById("descuentos");

    function agregarJuegosCarrito(){

        carrito.forEach(producto => {

            const listaCarrito = document.getElementById("listaCarrito")

            const juegosListaCarrito = document.createElement("li");

            juegosListaCarrito.className = "list-group-item d-flex justify-content-between lh-sm"
            juegosListaCarrito.innerHTML= `

                <div>
                    <h6 class="my-0">Producto:</h6>
                    <small id="nombreProducto" class="text-muted">${producto.nombreJuego}</small>
                    <div>
                        <small id="cantidadProducto" class="text-muted">Cantidad: ${producto.cantidad}</small>
                    </div>
                    <div>
                        <small id="precioUnidadProducto" class="text-muted">V. Unidad: $ ${producto.precio}</small>
                    </div>
                </div>
                <div class="contenedorImgCarritoEliminar">
                    <a href="#" id="${producto.idJuego}" class="btnEliminarProducto"><img src="./../image/btnEliminar1" class="text-muted imgCarritoEliminar" alt=""></a>
                </div>
                <div class="contenedorPrecioProducto">
                    <span id="precioProducto" class="text-muted">$ ${producto.precio * producto.cantidad}</span>
                </div>
                        
            `;

            listaCarrito.append(juegosListaCarrito)

        });

        actualizarContadorCarrito();

        actualizarbtnEliminarProductoCarrito();
        
    } 

    agregarJuegosCarrito();

    /* FORMULARIO DE VALORES A PAGAR */



    function calculosIvaPrecioTotal (){

        let carrito = JSON.parse(localStorage.getItem("Carrito"));
        console.log (carrito)

        const ivaProductos = document.getElementById("iva");
        
        const precioTotal = document.getElementById("precioTotal");

        const resultadoTotal = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);

        console.log(resultadoTotal);

        precioTotal.innerText=`$${resultadoTotal}`;

        ivaProductos.innerText=`$${(resultadoTotal * 0.21)}`;
    }

    calculosIvaPrecioTotal ();

    const alertaCompra = document.getElementById("alertaCompra");

    const alert = (message, type) => {

        const divAlerta = document.createElement('div');
        divAlerta.className = "alert alert-danger";
        
        divAlerta.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '</div>'
        ].join('');

        alertaCompra.append(divAlerta)
    }

    const btnAlertaCompra = document.getElementById('btnFinalizarCompra')
    if (btnAlertaCompra) {
        btnAlertaCompra.addEventListener('click', () => {
            alert("Gracias por tu compra!!")
        })
    }
}if(window.location == "https://angelborr.github.io/EntregaFinal_ProyectoJavaScript/asess/pages/registroJuegos.html"){

    /* PAGINA REGISTRO JUEGOS */

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
        new CatalogoGamer(3, "Call Of Duty", "accion", "+18", "8000", "./../../../asess/image/imgCallOfDutyWarzone2.jpg"),
        new CatalogoGamer(4, "Fall Guys", "simulacion", "-18", "4000", "./../../../asess/image/imgFallGuys.jpg"),
        new CatalogoGamer(5, "Pokemon", "aventura", "-18", "7000", "https://github.com/AngelBorr/EntregaFinal_ProyectoJavaScript/blob/master/asess/image/imgPokemon.jpg"),
        new CatalogoGamer(6, "Box King Las Vegas", "deporte", "+18", "8000", "./../../../asess/image/imgBoxKingVegas.jpg"),
        new CatalogoGamer(7, "Minecraf", "aventura", "-18", "5000", "./../../../asess/image/imgMinecraf.jpg"),
        new CatalogoGamer(8, "ARK Survival Evolved", "simulacion", "+18", "9000", "./../../../asess/image/imgARKsurvival.jpg"),
        new CatalogoGamer(9, "Crash Bandicoot", "aventura", "-18", "9000", "./../../../asess/image/imgCrashBandicoot.jpg")


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
}

/* se utiliza api json para generar base de datos juegos (proximamente se generara pedidos.json para gestionar pedidos con base de datos ) */



