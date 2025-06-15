const contBuscador = document.getElementById("contBuscador");

contBuscador.innerHTML = `
    <div id="innerContBuscador" class="flexRow">
        <input type='text' id='buscador' placeholder='Buscar Algo'/>
    </div>
    <div id='resultados' class="hide"></div>
`;

const buscador = document.getElementById("buscador");
const divResultados = document.getElementById("resultados");

buscador.addEventListener("input", (event)=>{
    if(divResultados.classList.contains("hide")) {
        divResultados.classList.toggle("hide");
        divResultados.classList.toggle("show");
    }
    if(buscador.value === "" || buscador.value === null || buscador.value === undefined) {
        divResultados.innerHTML= "";
        divResultados.classList.toggle("hide");
    } else {
        busqueda();
    }
    
});


// const btnBuscar = document.getElementById("btnBuscar");
/*
btnBuscar.addEventListener("click", ()=>{
    busqueda();
});
*/