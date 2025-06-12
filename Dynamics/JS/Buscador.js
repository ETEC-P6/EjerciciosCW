const contBuscador = document.getElementById("contBuscador");
const divResultados = document.getElementById("resultados");

contBuscador.innerHTML = `
    <div id="innerContBuscador" class="flexRow">
        <input type='text' id='buscador' placeholder='Buscar Algo'/>
    </div>
`;

const buscador = document.getElementById("buscador");

buscador.addEventListener("keydown", (event)=>{
    if(buscador.value === "" || event.key === "Backspace"){
        divResultados.innerHTML= "";
    } else {
        busqueda();
    }
    
});