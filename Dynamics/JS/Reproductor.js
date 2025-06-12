// [ ICONS ]
const ICON_ARTIS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>`;
const ICON_SONG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7l0 72 0 264c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 147 192 223.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 200l0-72c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>`;
const ICON_ALBUM = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;

function JSONToArray(json)
{
    console.log(json);
    const bd = new Array(); 

    //Para canciones
    for (let i = 0; i < json.canciones.length; i++)
        bd.push(new Cancion(json.canciones[i].id, json.canciones[i].nombre, json.canciones[i].artista, json.canciones[i].album, json.canciones[i].link, json.canciones[i].genero, json.canciones[i].id_artista, json.canciones[i].id_genero, json.canciones[i].id_album));
    // console.log(bd);
    return bd; 
}

let bdCanciones = JSONToArray(baseDatosJSON);

const btnBuscar = document.getElementById("btnBuscar");
const divSecPlayer = document.getElementById("divSecPlayer");

function generarSeccion(resultados){
    console.log(resultados);
    divResultados.innerHTML= "";
    for (var i = 0; i < resultados.length; i++)
    {
        let nuevoP = document.createElement("p");
        let nuevoInnerHTML = "";
        nuevoP.setAttribute("data-set", resultados[i].id);
        nuevoP.classList.add("cancionItem");
        nuevoInnerHTML += `<div class="flexRow contIconInfoCancion">
                                <div class="iconoCancion">
                                    ${ICON_SONG}
                                </div>
                                <div class="infoCancionItem">
                                    <span class="tituloCancion">${resultados[i].nombre} - ${resultados[i].artista}</span>
                                    <div class="infoCancion">
                                        <span data-set="${resultados[i].id_album}">Álbum: ${resultados[i].album}</span>
                                        <span data-set="${resultados[i].id_genero}">Género: ${resultados[i].genero}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="botonesCancion">
                                <button onclick="reproducir(${resultados[i].id})">Reproducir</button>
                                <button onclick="agregarALista(${resultados[i].id})">Agregar</button>
                            </div>`;
        nuevoP.innerHTML = nuevoInnerHTML;
        divResultados.appendChild(nuevoP);
    }
    console.log(nuevoInnerHTML);
    // divResultados.innerHTML = nuevoInnerHTML;
}
function busqueda()
{
    let palabra = buscador.value;
    let resultados = [];
    let canciones = bdCanciones;
    for (var i = 0; i < canciones.length; i++)
    {
        if (canciones[i].nombre.toLowerCase().includes(palabra.toLowerCase()))
        {
            resultados.push(canciones[i]);
        }
        else if (canciones[i].artista.toLowerCase().includes(palabra.toLowerCase()))
        {
            resultados.push(canciones[i]);
        }
        else if (canciones[i].album.toLowerCase().includes(palabra.toLowerCase()))
        {
            resultados.push(canciones[i]);
        }
    }
    // console.log(resultados, divResultados);
    if (resultados.length > 0)
    {
        generarSeccion(resultados);
    }
    else
    {
        divResultados.innerHTML = "<p>No se encontraron resultados</p>";
    }
}
let player;
function reproducir(id)
{
    divSecPlayer.style.display = "block";
    
    for (var i = 0; i < bdCanciones.length; i++)
    {
        if (bdCanciones[i].id == id)
        {
            let contenedor = document.getElementById('playerContainer');

            if (player) 
                player.loadVideoById(id);
            else 
            {
                contenedor.innerHTML = '<div id="player"></div>';
                player = new YT.Player('player', {
                    height: '390',
                    width: '640',
                    videoId: bdCanciones[i].link,
                    playerVars: { playsinline: 1, autoplay: 1 }
                });
        }
        }
    }    
}
let reproduciendo = false;

function cancionAnterior(i)
{
    let nuevoID = i - 1;
    if (nuevoID < 0)
    {
        nuevoID = bdCanciones.length - 1;    
    }
    reproducir(bdCanciones[nuevoID].id);
}

function cancionSiguiente(i)
{
    let nuevoID = i + 1;
    if (nuevoID >= bdCanciones.length)
    {
        nuevoID = 0;    
    }
    reproducir(bdCanciones[nuevoID].id);
}

function playPausa()
{
    let iframe = document.querySelector('iframe');
    if(reproduciendo = true)
    {
        
        reproduciendo = false;    
    }
    else
    {
        
        reproduciendo = true;
    }
}
class ListaDeReproduccion{
        constructor(arreglo){
            this.lista = null;
            if(!Array.isArray(arreglo))
                this.lista = [];
            else
                this.lista = structuredClone(arreglo); 
        }
        
        pop(indice){
            let eliminado = this.lista[indice];
            this.lista.splice(indice, 1);
            return eliminado;
        }

        push(objeto){
            this.lista.push(objeto);
        }

        getSize(){
            return this.lista.length;
        }
        
        shuffle(){
            this.forEach(intercambia_shuffle);
        }

        forEach(accion){
            for(let i = 0; i < this.lista.length; i++){
                accion(this.lista, i);
            }
        }
        toString(){
            return this.lista.map(cancion => cancion.toString()).join(", ");
        }
    }

    function intercambia_shuffle(arreglo,i){
        let j = Math.floor(Math.random() * (i+1))
        intercambia(arreglo,i,j);
    }
        
    function intercambia(arreglo,a,b){
        let c = arreglo[a];
        arreglo[a] = arreglo[b];
        arreglo[b] = c;
    }

    let listaReproduccion = new ListaDeReproduccion(bdCanciones);

    function agregarALista(id) 
    {
        for (var i = 0; i < listaReproduccion.lista.length; i++)
        {
            if(listaReproduccion.lista[i].id === id)
                return;
        }
        
        for (var j = 0; j < bdCanciones.length; j++) 
        {
            if (bdCanciones[j].id === id) 
            {
                listaReproduccion.push(bdCanciones[j]);
                mostrarLista();
                return;
            }
        }        
    }

    function eliminarDeLista(index)
    {
        listaReproduccion.pop(index);
        mostrarLista();
    }

    function mostrarLista()
    {
        document.getElementById("listaContainer").innerHTML = "";
            for (var i = 0; i < listaReproduccion.lista.length; i++)
            {
                document.getElementById("listaContainer").innerHTML += "<p>" + listaReproduccion.lista[i].nombre + "-" + listaReproduccion.lista[i].artista;
                document.getElementById("listaContainer").innerHTML += "<button onclick='reproducir(" + listaReproduccion.lista[i].id + ")'>Reproducir</button>";
                document.getElementById("listaContainer").innerHTML += "<button onclick='eliminarDeLista(" + i + ")'>Eliminar</button>" + "</p>";
            }
    }

    function mezclarLista()
    {
        listaReproduccion.shuffle();
        mostrarLista();
    }


btnBuscar.addEventListener("click", ()=>{
    busqueda();
});
