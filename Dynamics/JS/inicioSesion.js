const formulario = document.getElementById("login");
const usuario = document.getElementById('usuario');
const password = document.getElementById('contraseña');

const nombresCookies = document.cookie.split("; ").map(cookie => cookie.split("=")[0]);
const cookies = document.cookie.split("; ");

let errorUsuario = document.getElementById('errorUsuario');
let errorPassword = document.getElementById('errorContraseña');

formulario.addEventListener('submit', function(e){
    e.preventDefault(); 

    errorUsuario.textContent = "";
    errorPassword.textContent = "";

    if(!(nombresCookies.includes(usuario.value.trim()))){
        e.preventDefault();
        errorUsuario.textContent = "El usuario no existe.";
    }

    if(usuario.value.trim() === ''){
        e.preventDefault();
        errorUsuario.textContent = "Por favor coloca tu nombre de usuario.";
    } 

    if(password.value.trim() === ''){
        e.preventDefault();
        errorPassword.textContent = "Por favor coloca tu contraseña.";
    } 

    let datos;
    for (let cookie of cookies) {
        const [key, valor] = cookie.split('=');
        if (key === usuario.value.trim()) 
          datos = decodeURIComponent(valor);   
    }

    datos = JSON.parse(datos);
    let nombre = datos.nombre;
    let pw = datos.password;
    let duracionCookie = 60*60*24*7;

    document.cookie = `USUARIO=${nombre}`;

    if((usuario.value.trim() === nombre) && (password.value.trim() === pw))
        window.location.href = "./index.html";
    else if((usuario.value.trim() === nombre)){
        e.preventDefault()
        errorPassword.textContent = "Contraseña incorrecta."
    }

});
