let nombresCookies = document.cookie.split("; ").map(cookie => cookie.split("=")[0]);
const cookies = document.cookie.split("; ");
console.log(cookies)

const fotoPerfil = document.getElementById('fotPerfil');
const usuario = document.getElementById('usuario');
const password = document.getElementById('contraseña');
const generos = document.getElementById('generos');
const sexo = document.getElementById('sexo');
const editar = document.getElementById('editar');
const cerrar = document.getElementById('cerrar');
const res = document.getElementById('resultados');
const edicion = document.getElementById('edicion');
const regresar = document.getElementById('regresar');

console.log(cookies)
let nombreUsuario = null;
for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key.startsWith("USUARIO")) {
        nombreUsuario = cookie.substring("USUARIO".length+1);
        break; 
    }
}
console.log(nombreUsuario)

let datos = null;
 for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === nombreUsuario) {
      datos = decodeURIComponent(value);
      break;
    }
}
console.log(datos)

datos = JSON.parse(datos);
let nombre = datos.nombre;
let pw = datos.password;
let sex = datos.sexo;
let genres = datos.generos;

usuario.textContent = nombre;
password.textContent = pw;
sexo.textContent = sex;
generos.textContent = "Tus géneros favoritos son: "; 
JSON.parse(genres).forEach(g => {
    generos.textContent += g + " ";
});


editar.addEventListener('click', function(e){
    edicion.style.display = "block";
    res.style.display= "none";

    const actualizar = document.getElementById('actualizar').addEventListener('click', function(e){

        const usuarioN = document.getElementById('usuarioN');
        const passwordN = document.getElementById('contraseñaN');
        const generosN = document.querySelectorAll('.generosN');
        const sexoN = document.getElementById('sexoN');

        console.log(usuarioN);

        const nombresCookies = document.cookie.split("; ").map(cookie => cookie.split("=")[0]);

        if(nombresCookies.includes(usuarioN.value.trim())){
            e.preventDefault();
            alert("El nombre de usuario ya existe, por favor intenta con otro.")
        }
            

        if(usuarioN.value.trim() === ''){
            e.preventDefault();
            alert('Por favor coloca un nombre de usuario.')
        } 

        if(passwordN.value.trim() === ''){
            e.preventDefault();
            alert('Por favor coloca una contraseña.')
        } 

        console.log(generosN)
        
        let alMenosUna = 0;
        generosN.forEach(cb => {
            alMenosUna += cb.checked ? 1 : 0;
        })
    
        if(alMenosUna == 0){
            e.preventDefault();
            alert('Por favor selecciona al menos un género musical.')
        } 

        if(sexoN.value === ''){
            e.preventDefault();
            alert('Por favor selecciona tu sexo.')
        } 


        const generosSeleccionados = Array.from(generosN).filter(cb => cb.checked).map(cb => cb.value);
        console.log(JSON.stringify(generosSeleccionados));

        const datosN = {
            nombre: usuarioN.value.trim(),
            password: passwordN.value.trim(),
            generos: JSON.stringify(generosSeleccionados),
            sexo: sexoN.value 
        }

        
        document.cookie = `${nombreUsuario}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

        let duracionCookie = 60 * 60 * 24 * 7; 
        let nuevoNombre = usuarioN.value.trim();
        let valorCookie = encodeURIComponent(JSON.stringify(datosN));
        document.cookie = `${nuevoNombre}=${valorCookie}; max-age=${duracionCookie}; path=/`;
        document.cookie = `USUARIO=${nuevoNombre}; max-age=${duracionCookie};`
        window.location.reload()

    });


    const cancelar = document.getElementById('cancelar');
    cancelar.addEventListener('click', function(e){
        edicion.style.display = "none";
        res.style.display= "block";
        window.location.href = "./editarPerfil.html"
    })
});

regresar.addEventListener('click', function(e){
    window.location.href = "../index.html"
})

cerrar.addEventListener('click', function(e){
    document.cookie = `USUARIO_${nombreUsuario}=; max-age=-1; path=/;`;
    window.location.href = "../login.html"

});


    


