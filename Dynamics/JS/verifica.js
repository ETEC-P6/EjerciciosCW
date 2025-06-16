const formulario = document.getElementById('form-registro');
const usuario = document.getElementById('usuario');
const password = document.getElementById('contraseña');
const generos = document.querySelectorAll('.generos');
const sexo = document.getElementById('sexo');
const terminos = document.getElementById('terminos');

  formulario.addEventListener('submit', function(e){

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

      if(!(terminos.checked)){
        e.preventDefault();
        alert('Debes aceptar los términos y condiciones para continuar.')
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


      let nombreCookie = usuario.value.trim();
      let valorCookie = encodeURIComponent(JSON.stringify(datos));
      let duracionCookie = 60*60*24*7;
      
      document.cookie = `${nombreCookie}=${valorCookie}; max-age=${duracionCookie}; path=/`;
      console.log(document.cookie);

      console.log("asdfghjkmnjbhgfdsa");
  
      
  });


    
