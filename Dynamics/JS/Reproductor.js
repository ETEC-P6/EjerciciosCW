class cancion
{
    id;
    nombre;
    artista;
    album;
    link;
    genero; 
    id_artista;
    id_genero;
    id_album;
    constructor(id, nombre, artista, album, link, genero, id_artista, id_genero, id_album)
    {
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.link = link;
        this.genero = genero;
        this.id_artista = id_artista;
        this.id_genero = id_genero;
        this.id_album = id_album;
    }

}

function JSONToArray(json)
{
    console.log(json);
    const bd = new Array(); 

    //Para canciones
    for (let i = 0; i < json.canciones.length; i++)
        bd.push(new cancion(json.canciones[i].id, json.canciones[i].nombre, json.canciones[i].artista, json.canciones[i].album, json.canciones[i].link, json.canciones[i].genero, json.canciones[i].id_artista, json.canciones[i].id_genero, json.canciones[i].id_album));
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
        nuevoInnerHTML += `<span class="tituloCancion">${resultados[i].nombre} - ${resultados[i].artista}</span>
                            <div class="infoCancion">
                                <span data-set="${resultados[i].id_album}">Álbum: ${resultados[i].album}</span>
                                <span data-set="${resultados[i].id_genero}">Género: ${resultados[i].genero}</span>
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
