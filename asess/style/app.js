if (window.location == 'http://127.0.0.1:5501/asess/pages/registrarse.html') {
    
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


}if(window.location == "http://127.0.0.1:5501/index.html"){

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
}if(window.location == 'http://127.0.0.1:5501/asess/pages/principal.html'){

    // PAGINA PRINCIPAL

    function agregarJuegosPaginaPrincipal() {

        const catalogoDeJuegosLS = JSON.parse(localStorage.getItem("catalogoJuegos"))

        for (const juego of catalogoDeJuegosLS) {

        const contenidoPaginaPrincipal = document.getElementById("contenidoPagePrincipal")

        const juegosPaginaPrincipal = document.createElement("div");

        juegosPaginaPrincipal.className = "cardProduct borderRounded h-100 card-group"
        juegosPaginaPrincipal.innerHTML= `

            <img src="${juego.imagenJuego}" alt="" class="cardProduct__image borderRounded imgTarjetas"/>

            <div class="cardProduct__description">
                <strong class="cardProduct__description__price" >${juego.precio}</strong>
                <H6>${juego.nombreJuego}</H6>
                <p class="cardProduct__description__text">DESCRIPCION JUEGO</p>
                <p>Posicion Catalogo: ${juego.idJuego}</p>
                <div class="btnTarjetas">
                    <a href="./carrito.html" type="button" id="comprarCarrito" class="btn btn-primary">Comprar</a>
                    <a href="#" id="agredarAlCarrito" name="agredarAlCarrito" class="card-link btnMandarCarrito">Mandar al Carrito</a>            
                </div>
            </div>
        `;
            

        contenidoPaginaPrincipal.appendChild(juegosPaginaPrincipal)

        }
        
    }

    agregarJuegosPaginaPrincipal();

}





/* // TODAVIA FALTA APLICAR CODIGO A LA PAGINA, QUEDA COMO EN LA ENTREGA ANTERIOR //

let operacion = prompt("¿Que te deseas hacer? \n - COMPRAR \n - ADMINISTRAR \n (El ingreso es en minuscula)")

console.log(operacion)

switch (operacion) {   
    
    // PAGINA CATALOGO JUEGOS //

    case "administrar":
        
        // PAGINA PRINCIPAL

    case "comprar":

    let catalogoSiNo = (prompt("¿Como deseas ver el catalogolo de Juegos? \n Indique la opcion correcta: \n - 1: Catalogo Completo \n - 2: Filtrar los juegos por alguna categoria"))

        switch (catalogoSiNo) {
            case "1":
                console.log((JSON.stringify(gamer)))

                alert("Visualiza el Catalogo completo en la Consola")

                break;

            case "2":

                let eleccionDeCategoria = prompt("Elegi la Categoria por la cual deseas filtrar el catalogo: \n - Accion \n - Aventura \n - Simulacion \n - Deporte")

                switch (eleccionDeCategoria) {

                    case "accion":
                        const filtrarPorCategoriaAccion = gamer.filter(juego => juego.categoria == "accion");

                        console.log(JSON.stringify(filtrarPorCategoriaAccion));
                        alert("el catagolo seleccionado es el siguiente \n " + JSON.stringify(filtrarPorCategoriaAccion))

                        break;

                    case "aventura":
                        const filtrarPorCategoriaAventura = gamer.filter(juego => juego.categoria == "aventura");

                        console.log(JSON.stringify(filtrarPorCategoriaAventura));
                        alert("el catagolo seleccionado es el siguiente \n " + JSON.stringify(filtrarPorCategoriaAventura))

                        break;

                    case "simulacion":
                        const filtrarPorCategoriaSimulacion = gamer.filter(juego => juego.categoria == "simulacion");

                        console.log(JSON.stringify(filtrarPorCategoriaSimulacion));
                        alert("el catagolo seleccionado es el siguiente \n " + JSON.stringify(filtrarPorCategoriaSimulacion))

                        break;

                    case "deporte":
                        const filtrarPorCategoriaDeporte = gamer.filter(juego => juego.categoria == "deporte");

                        console.log(JSON.stringify(filtrarPorCategoriaDeporte));
                        alert("el catagolo seleccionado es el siguiente \n " + JSON.stringify(filtrarPorCategoriaDeporte))

                        break;

                    default:
                        alert("No has ingresado una opcion valida")

                }

            break;


            default:

        }
}

let eleccionDeJuegoCompra = (prompt("Elegi el juego que deseas comprar (sin puntos,comas y espacios). Ejemplos: \n * minecraft \n * fallguys \n * pokemon"))

let godOfWar = 6000
let callOfDuty = 8000
let fifa2023 = 8000
let fallGuys = 4000
let pokemon = 7000
let boxKingLasVegas = 8000
let survivalHumans = 9000
let minecraft = 5000

switch (eleccionDeJuegoCompra){
    case "minecraft":
        productosFinales = minecraft;
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Minecraft")
        console.log("El valor es de $ " + productosFinales)                  
    break;

    case "fallguys":
        productosFinales = fallGuys;
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Fall Guys")
        console.log("El valor es de $ " + productosFinales)                     
    break;

    case "pokemon":
        productosFinales = pokemon;  
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Pokemon")
        console.log("El valor es de $ " + productosFinales) 
    break;
                    
    case "godofwar":
        productosFinales = godOfWar;
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Gog Of War")
        console.log("El valor es de $ " + productosFinales)                  
    break;

    case "callofduty":
        productosFinales = callOfDuty;
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Call Of Duty")
        console.log("El valor es de $ " + productosFinales) 
    break;

    case "fifa2023":
        productosFinales = fifa2023;  
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Fifa 2023")
        console.log("El valor es de $ " + productosFinales) 
    break;

    case "boxkinglasvegas":
        productosFinales = boxKingLasVegas;  
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Box King Las Vegas")
        console.log("El valor es de $ " + productosFinales) 
    break;

    case "survivalhumans":
        productosFinales = survivalHumans;  
        alert("el valor es de " + "$" + productosFinales + " " + "+ iva")
        console.log("Has seleccionado el Juego Survival Humans")
        console.log("El valor es de $ " + productosFinales) 
    break;

    default:
    
}

let iva = productosFinales*0.21

console.log("Iva = $ " + iva)
            
let productoFinalConIva = (productosFinales + iva)

console.log("Sub Total = $ " + productoFinalConIva)

alert ("El valor final es de $" + productoFinalConIva + ", aceptar para continuar y pasar a medios de pago")



do {

    let calcularDescuentoOInt = prompt ("Ingresa el tipo de pago, si paga en efectivo tiene un descuento de $500 y si lo hace con tarjeta de credito va a tener un recargo de $800 \n 1 para pagar en efectivo \n 2 para pagar con tarjeta")

    switch (calcularDescuentoOInt) {
        case "1":
            pagoEnfectivo = Number(500);
            alert("Recibistes un descuento de $" + pagoEnfectivo + " por pago en efectivo")
            console.log("Medio de pago = Efectivo")
            console.log("Descuento = $ " + pagoEnfectivo)
        break;

        case "2":
            pagoEnTarjeta = Number(800);
            alert("Recibistes un interes de $" + pagoEnTarjeta + " por pago con Tarjeta de Credito")
            console.log("Medio de pago = Tarjeta de Credito")
            console.log("Interes = $ " + pagoEnTarjeta)                
        break;

        default:
            alert("no has ingresado la opcion correcta, vuelve a intentarlo")
                        
                        
    }

    switch (calcularDescuentoOInt) {
        case "1":
            precioFinalMasDesc = (productoFinalConIva - pagoEnfectivo)
            alert("el valor final es del juego es de $" + precioFinalMasDesc)
            console.log("Precio Total = $ " + precioFinalMasDesc)
            alert("gracias por su compra")
        break;

        case "2":
            precioFinalMasInt = (productoFinalConIva + pagoEnTarjeta)
            alert("el valor final es del juego es de $" + precioFinalMasInt)
            console.log("Precio Total = $ " + precioFinalMasInt)
            alert("gracias por su compra")
        break;

        default:
                        
    }

    console.log("gracias por su compra")

}while(confirm = !true){





            
} */



