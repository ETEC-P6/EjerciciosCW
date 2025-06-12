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


// const btnBuscar = document.getElementById("btnBuscar");
/*
btnBuscar.addEventListener("click", ()=>{
    busqueda();
});
*/