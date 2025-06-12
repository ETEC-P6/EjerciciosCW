class Cancion
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
class Artista{
    id;
    nombre;
    genero;
    link;
    constructor(id, nombre, genero, link)
    {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.link = link;
    }
}