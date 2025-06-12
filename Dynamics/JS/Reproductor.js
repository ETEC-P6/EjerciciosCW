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


function busqueda()
{
    var palabra = document.getElementById("buscador").value;
    var resultados = [];
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
    document.getElementById("resultados").innerHTML= "";
    for (var i = 0; i < resultados.length; i++)
    {
        document.getElementById("resultados").innerHTML += "<p>" + resultados[i].nombre + "-" + resultados[i].artista;
        document.getElementById("resultados").innerHTML += "<button onclick='reproducir(" + resultados[i].id + ")'>Reproducir</button>";
        document.getElementById("resultados").innerHTML += "<button onclick='agregarALista(" + resultados[i].id + ")'>Agregar</button>" + "</p>";
    }
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
                    playerVars: { playsinline: 1 }
            });
        }
        }
    }    
}
