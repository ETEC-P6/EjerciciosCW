let nombresCookies = document.cookie.split("; ").map(cookie => cookie.split("=")[0]);
const cookies = document.cookie.split("; ");
const fotoPerfil = document.getElementById('fotPerfil');
let usuario = document.getElementById('usuario');
let password = document.getElementById('contraseña');
let generos = document.getElementById('generos');
let sexo = document.getElementById('sexo');
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

        const nombresCookies = document.cookie.split("; ").map(cookie => cookie.split("=")[0]);

        if(nombresCookies.includes(usuario.value.trim())){
            e.preventDefault();
            alert("El nombre de usuario ya existe, por favor intenta con otro.")
        }
            

        if(usuario.value.trim() === ''){
            e.preventDefault();
            alert('Por favor coloca un nombre de usuario.')
        } 

        if(password.value.trim() === ''){
            e.preventDefault();
            alert('Por favor coloca una contraseña.')
        } 

        
        let alMenosUna = 0;
        generos.forEach(cb => {
            alMenosUna += cb.checked ? 1 : 0;
        })
    
        if(alMenosUna == 0){
            e.preventDefault();
            alert('Por favor selecciona al menos un género musical.')
        } 

        if(sexo.value === ''){
            e.preventDefault();
            alert('Por favor selecciona tu sexo.')
        } 


        const generosSeleccionados = Array.from(generos).filter(cb => cb.checked).map(cb => cb.value);
        console.log(JSON.stringify(generosSeleccionados));

        const datos = {
            nombre: usuario.value.trim(),
            password: password.value.trim(),
            //foto: foto.value.trim(),
            generos: JSON.stringify(generosSeleccionados),
            sexo: sexo.value 
        }



        
        document.cookie = `USUARIO=${nombreUsuario}; max-age=-1; path=/;`; 
        document.cookie = nombreUsuario; "max-age=-1; path =/";

        let duracionCookie = 60 * 60 * 24 * 7; 
        let nuevoNombre = usuario.value.trim();
        let valorCookie = encodeURIComponent(JSON.stringify(datos));
        document.cookie = `${nuevoNombre}=${valorCookie}; max-age=${duracionCookie}; path=/`;
        document.cookie = `USUARIO=${nuevoNombre}; max-age=${duracionCookie}; path=/`;

        window.location.href = "./editarPerfil.html"

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


    


