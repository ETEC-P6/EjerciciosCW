const nombresCookies = document.cookie.split("; ").map(cookie => cookie.split("=")[0]);
const cookies = document.cookie.split("; ");
const fotoPerfil = document.getElementById('fotPerfil');
const usuario = document.getElementById('usuario');
const password = document.getElementById('contraseña');
const generos = document.getElementById('generos');
const sexo = document.getElementById('sexo');

let datos;
for (let cookie of cookies) {
    const [key, valor] = cookie.split('=');
    if (key === usuario.value.trim()) 
    datos = decodeURIComponent(valor);   
}

datos = JSON.parse(datos);
let nombre = datos.nombre;
let pw = datos.password;
let sex = datos.sexo;
let genres = datos.generos;

usuario.innerText = nombre;
password.innerText = pw;
sexo.innerText = sex;
