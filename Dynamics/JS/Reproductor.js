// [ ICONS ]
const ICON_ARTIS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>`;
const ICON_PLAY = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
const ICON_PAUSE =`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>`
const ICON_SONG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7l0 72 0 264c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 147 192 223.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 200l0-72c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>`;
const ICON_ALBUM = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;
const ICON_GENERO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>`;
const ICON_BUSCADOR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`;

function JSONToArray(json)
{
    //console.log(json);
    const bd = new Array(); 

    //Para canciones
    for (let i = 0; i < json.canciones.length; i++)
        bd.push(new Cancion(json.canciones[i].id, json.canciones[i].nombre, json.canciones[i].artista, json.canciones[i].album, json.canciones[i].link, json.canciones[i].genero, json.canciones[i].id_artista, json.canciones[i].id_genero, json.canciones[i].id_album));
    // console.log(bd);
    return bd; 
}

let bdCanciones = JSONToArray(baseDatosJSON);
// let bdArtistas = baseDatosJSON.artistas.map(artista => new Artista(artista.id, artista.nombre, artista.genero, artista.link));
let bdArtistas = baseDatosJSON.artistas;
let bdGeneros = baseDatosJSON.genero;
let bdAlbums = baseDatosJSON.album;
let bdCancionHasArtista = baseDatosJSON.cancion_has_artista;
// console.log(bdArtistas);

const divSecPlayer = document.getElementById("divSecPlayer");

function contenido(tipo, id){
    console.log(`Me presionaste soy tipo: ${tipo} y con id: ${id}`);
}

function generarSeccion(resultados){
    //console.log(resultados);
    divResultados.innerHTML= "";
    for (var i = 0; i < resultados.length; i++)
    {
        let nuevoP = document.createElement("p");
        let nuevoInnerHTML = "";

        let icon = resultados[i].tipo == "cancion" ? ICON_SONG : resultados[i].tipo == "artista" ? ICON_ARTIS : resultados[i].tipo == "album" ? ICON_ALBUM : ICON_GENERO;
        //console.log(resultados);
        let spanTitulo = document.createElement("span");
        spanTitulo.classList.add("tituloCancion");
        spanTitulo.innerText = (resultados[i].tipo=="cancion")? resultados[i].nombre + " - " + resultados[i].artista : resultados[i].nombre;

        let infoCancion = (resultados[i].tipo == "cancion")?
                                        `<span data-set="${resultados[i].id_album}" onclick="contenido("album", resultados[i].id_album)">Álbum: ${resultados[i].album}</span>
                                        <span data-set="${resultados[i].id_genero}">Género: ${resultados[i].genero}</span>` : "";
        let botonesCancion = (resultados[i].tipo == "cancion")?  
                                `<button onclick="reproducir(${resultados[i].id})">Reproducir</button>
                                <button onclick="agregarALista(${resultados[i].id})">Agregar</button>`: "";

        
        nuevoP.addEventListener("click", (evento)=>{
            let elementoEventoDetonado = evento.currentTarget;
            let tipoBusqueda = elementoEventoDetonado.getAttribute("resBuscItem");
            let idBusqueda = elementoEventoDetonado.dataset.id;
            //console.log(evento.currentTarget.getAttribute("resBuscItem"));
            contenido(tipoBusqueda, idBusqueda);
            
        });

        nuevoP.setAttribute("data-id", resultados[i].id);        

        let claseTipoResBusc = (resultados[i].tipo == "cancion")? "resBuscCancion"
                                                    : (resultados[i].tipo == "album")? "resBuscAlbum" : "resBuscArtista";
        nuevoP.classList.add("resBuscCancion", "flexRow", "cursor");
        nuevoP.setAttribute("resBuscItem", claseTipoResBusc);

        nuevoInnerHTML += `<div class="flexRow contIconInfoCancion">
                                <div class="icono">
                                    ${icon}
                                </div>
                                <div class="infoCancionItem">
                                    ${spanTitulo.outerHTML}
                                    <div class="infoCancion">
                                        ${infoCancion}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="botonesCancion">
                                ${botonesCancion}
                            </div>`;
        nuevoP.innerHTML = nuevoInnerHTML;
        divResultados.appendChild(nuevoP);
    }
    // divResultados.innerHTML = nuevoInnerHTML;
}

function busqCanciones(palabra, resultados){
    let canciones = bdCanciones;
    for (var i = 0; i < canciones.length; i++)
    {
        if (canciones[i].nombre.toLowerCase().includes(palabra.toLowerCase()))
        {
            canciones[i].tipo = "cancion"; 
            resultados.push(canciones[i]);
        }
        else if (canciones[i].artista.toLowerCase().includes(palabra.toLowerCase()))
        {
            canciones[i].tipo = "cancion"; 
            resultados.push(canciones[i]);
        }
        else if (canciones[i].album.toLowerCase().includes(palabra.toLowerCase()))
        {
            canciones[i].tipo = "cancion"; 
            resultados.push(canciones[i]);
        }
    }
}
function busqArtistas(palabra, resultados){
    let artistas = bdArtistas;
    // console.log(artistas);
    for (var i = 0; i < artistas.length; i++)
    {
        if (artistas[i].nombre.toLowerCase().includes(palabra.toLowerCase()))
        {
            artistas[i].tipo = "artista"; 
            resultados.push(artistas[i]);
        }
    }
}
function busqGeneros(palabra, resultados){
    let generos = bdGeneros;
    //console.log(generos);
    for (var i = 0; i < generos.length; i++)
    {
        if (generos[i].nombre.toLowerCase().includes(palabra.toLowerCase()))
        {
            generos[i].tipo = "genero"; 
            resultados.push(generos[i]);
        }
    }
}
function busqAlbums(palabra, resultados){
    let albums = bdAlbums;
    for (var i = 0; i < albums.length; i++)
    {
        if (albums[i].nombre.toLowerCase().includes(palabra.toLowerCase()))
        {
            albums[i].tipo = "album"; 
            resultados.push(albums[i]);
        }
    }
}
function busqueda()
{
    let palabra = buscador.value;
    let resultados = [];
    busqCanciones(palabra, resultados);
    busqArtistas(palabra, resultados);
    busqAlbums(palabra, resultados);
    busqGeneros(palabra, resultados);
    
    //console.log(resultados);
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

let btnPausa = document.getElementById("btnPausa");
btnPausa.innerHTML = ICON_PLAY;
function playPausa()
{
    let iframe = document.querySelector('iframe');
    if(reproduciendo = true)
    {
        reproduciendo = false; 
        btnPausa.innerHTML = ICON_PLAY
    }
    else
    {
        
        reproduciendo = true;
        btnPausa.document.innerHTML = ICON_PAUSE;
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

    /**
        El primer for que se tenía no estaba funcionando para nada.
     */
    function agregarALista(id) 
    {
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
                document.getElementById("listaContainer").innerHTML += "<p> <span class = 'tituloCancion'>" + listaReproduccion.lista[i].nombre + "-" + listaReproduccion.lista[i].artista + "</span>";
                /** Añado la verificación, en este caso vi que era con 'True', pero debemos de ver si se cambia para también cambiarlo aquí. */
                const textoAlbum = (listaReproduccion.lista[i].album !== 'True') ? listaReproduccion.lista[i].album : 'Sin álbum';
                console.log("tengo en listaReproduccion.lista[i].album " + listaReproduccion.lista[i].album);
                
                document.getElementById("listaContainer").innerHTML += "<p> <span> " + textoAlbum + "</span>";
                document.getElementById("listaContainer").innerHTML += "<button onclick='reproducir(" + listaReproduccion.lista[i].id + ")'>Reproducir</button>";
                document.getElementById("listaContainer").innerHTML += "<button onclick='eliminarDeLista(" + i + ")'>Eliminar</button>" + "</p>";
            }
    }

    function mezclarLista()
    {
        listaReproduccion.shuffle();
        mostrarLista();
    }