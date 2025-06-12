class cancion
{
    id;
    nombre;
    artista;
    album;
    link;
    genero; 
    constructor(id, nombre, artista, album, link, genero)
    {
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.link = link;
        this.genero = genero;
    }
}

function JSONToArray(json) 
{
    const bd = new Array(); 
    for (let i = 0; i < json.length; i++) 
        bd.push(new cancion(json[i].id, json[i].nombre, json[i].artista, json[i].album, json[i].link, json[i].genero));
    return bd; 
}

var baseDatos = JSONToArray(baseDatosJSON);
const buscador = document.getElementById("buscador");
const divResultados = document.getElementById("resultados");
const btnBuscar = document.getElementById("btnBuscar");

function busqueda()
{
    let palabra = buscador.value;
    let resultados = [];
    for (var i = 0; i < baseDatos.length; i++)
    {
        if (baseDatos[i].nombre.toLowerCase().includes(palabra.toLowerCase()))
        {
            resultados.push(baseDatos[i]);
        }
        else if (baseDatos[i].artista.toLowerCase().includes(palabra.toLowerCase()))
        {
            resultados.push(baseDatos[i]);
        }
        else if (baseDatos[i].album.toLowerCase().includes(palabra.toLowerCase()))
        {
            resultados.push(baseDatos[i]);
        }
    }
    // console.log(resultados, divResultados);

    divResultados.innerHTML= "";
    let nuevoInnerHTML="";
    for (var i = 0; i < resultados.length; i++)
    {
        nuevoInnerHTML += "<p>" + resultados[i].nombre + "-" + resultados[i].artista;
        nuevoInnerHTML += "<button onclick='reproducir(" + resultados[i].id + ")'>Reproducir</button>";
        nuevoInnerHTML += "<button onclick='agregarALista(" + resultados[i].id + ")'>Agregar</button>" + "</p>";
    }
    divResultados.innerHTML = nuevoInnerHTML;
}
let player;
function reproducir(id)
{
    for (var i = 0; i < baseDatos.length; i++)
    {
        if (baseDatos[i].id == id)
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
                    videoId: baseDatos[i].link,
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
        nuevoID = baseDatos.length - 1;    
    }
    reproducir(baseDatos[nuevoID].id);
}

function cancionSiguiente(i)
{
    let nuevoID = i + 1;
    if (nuevoID >= baseDatos.length)
    {
        nuevoID = 0;    
    }
    reproducir(baseDatos[nuevoID].id);
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

    let listaReproduccion = new ListaDeReproduccion(baseDatos);

    function agregarALista(id) 
    {
        for (var i = 0; i < listaReproduccion.lista.length; i++)
        {
            if(listaReproduccion.lista[i].id === id)
                return;
        }
        
        for (var j = 0; j < baseDatos.length; j++) 
        {
            if (baseDatos[j].id === id) 
            {
                listaReproduccion.push(baseDatos[j]);
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


buscador.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        busqueda();
    }
});
btnBuscar.addEventListener("click", ()=>{
    busqueda();
});
