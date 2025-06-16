const formulario = document.getElementById("login");
const usuario = document.getElementById('usuario');
const password = document.getElementById('contraseña');
const nombresCookies = document.cookie.split("; ").map(cookie => cookie.split("=")[0]);
const cookies = document.cookie.split("; ");

formulario.addEventListener('submit', function(e){
    e.preventDefault(); 

    if(!(nombresCookies.includes(usuario.value.trim()))){
        e.preventDefault();
        alert("El usuario no existe.")
    }

    if(usuario.value.trim() === ''){
        e.preventDefault();
        alert('Por favor coloca tu nombre de usuario.')
    } 

    if(password.value.trim() === ''){
        e.preventDefault();
        alert('Por favor coloca tu contraseña.')
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

    if((usuario.value.trim() === nombre) && (password.value.trim() === pw))
        window.location.href = "./index.html";
    else if((usuario.value.trim() === nombre)){
        e.preventDefault()
        alert('Usuario o contraseña incorrecta.')
    }

});