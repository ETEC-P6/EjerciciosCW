const formulario = document.getElementById('form-registro');
const usuario = document.getElementById('usuario');
const password = document.getElementById('contraseña');
const generos = document.querySelectorAll('.generos');
const sexo = document.getElementById('sexo');
const terminos = document.getElementById('terminos');

let errorUsuario = document.getElementById('errorUsuario');
let errorPassword = document.getElementById('errorContraseña');
let errorGeneros = document.getElementById('errorGeneros');
let errorSexo = document.getElementById('errorSexo');
let errorT = document.getElementById('errorTerminos');

  formulario.addEventListener('submit', function(e){
    e.preventDefault(); 

    errorUsuario.textContent = "";
    errorPassword.textContent = "";
    errorGeneros.textContent = "";
    errorSexo.textContent = "";
    errorT.textContent = "";

    let todoCorrecto = true;
    
    const nombresCookies = document.cookie.split("; ").map(cookie => cookie.split("=")[0]);

    if(nombresCookies.includes(usuario.value.trim())){
      e.preventDefault();
      errorUsuario.textContent = "El nombre de usuario ya existe, por favor intenta con otro.";
      todoCorrecto = false;
    }
      

    if(usuario.value.trim() === ''){
      e.preventDefault();
      errorUsuario.textContent = "Por favor coloca un nombre de usuario.";
      todoCorrecto = false;
    } 

    if(password.value.trim() === ''){
      e.preventDefault();
      errorPassword.textContent = "Por favor coloca una contraseña.";
      todoCorrecto = false;
    } 

    
    let alMenosUna = 0;
    generos.forEach(cb => {
        alMenosUna += cb.checked ? 1 : 0;
    })

    if(alMenosUna == 0){
      e.preventDefault();
      errorGeneros.textContent = "Por favor selecciona al menos un género musical.";
      todoCorrecto = false;
    } 

    if(sexo.value === ''){
      e.preventDefault();
      errorSexo.textContent = "Por favor selecciona tu sexo.";
      todoCorrecto = false;
    } 

    if(!(terminos.checked)){
      e.preventDefault();
      errorT.textContent = "Debes aceptar los términos y condiciones para continuar.";
      todoCorrecto = false;
    }


    if(todoCorrecto){
        const generosSeleccionados = Array.from(generos).filter(cb => cb.checked).map(cb => cb.value);
        console.log(JSON.stringify(generosSeleccionados));

        const datos = {
          nombre: usuario.value.trim(),
          password: password.value.trim(),
          generos: JSON.stringify(generosSeleccionados),
          sexo: sexo.value 
        }

        let nombreCookie = usuario.value.trim();
        let valorCookie = encodeURIComponent(JSON.stringify(datos));
        let duracionCookie = 60*60*24*7;
      
        document.cookie = `${nombreCookie}=${valorCookie}; max-age=${duracionCookie}; path=/`;

        window.location.href = "../login.html"
    } 
      
  });


    
