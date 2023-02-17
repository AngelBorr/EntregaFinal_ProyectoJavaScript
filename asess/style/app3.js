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