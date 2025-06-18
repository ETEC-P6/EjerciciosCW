// window.location.reload();
const contBuscador = document.getElementById("contBuscador");
const divResultados = document.getElementById("resultados");

contBuscador.innerHTML = `
    <div id="innerContBuscador" class="flexRow">
        <input type='text' id='buscador' placeholder='Buscar Algo'/>
    </div>
`;

const buscador = document.getElementById("buscador");

buscador.addEventListener("input", (event)=>{
    if(buscador.value === "" || buscador.value === null || buscador.value === undefined) {
        divResultados.innerHTML= "";
    } else {
        busqueda();
    }
    
});


const cookies = document.cookie.split("; ");
const usuarie = document.getElementById('parrafito');
const perfil = document.getElementById('perfilcito');
perfil.addEventListener('click', function(){
    window.location.href = "./Templates/editarPerfil.html"
});

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
usuarie.textContent = nombre;


// const btnBuscar = document.getElementById("btnBuscar");
/*
btnBuscar.addEventListener("click", ()=>{
    busqueda();
});
*/