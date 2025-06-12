class ListaDeReproduccion{

    constructor(arreglo){
        this.lista = arreglo
    }
    
    pop(indice){
        let c = this.lista[indice];
        this.lista.splice(indice,1);
        return c;
    }

    push(objeto){
        this.lista.push(objeto)
    }

    getSize(){
        return this.lista.length
    }
    
    shuffle(){
        for(let i = 0; i < this.lista.length; i++){
            let j = Math.floor(Math.random() * (i+1));
            intercambiar(this.lista,i,j);
        }
    }

    get(){
        return this.lista;
    }

    fusionar(listaDeReproduccion){
        return listaDeReproduccion.get().concat(this.lista)
    }
    
}

function intercambiar(arreglo, indicea, indiceb){
    let c = arreglo[indicea]
    arreglo[indicea] = arreglo[indiceb]
    arreglo[indiceb] = c;
}


class Cancion{

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

    setNombre(nombre){
        this.nombre = nombre;
    }   
    getNombre(){
        return this.nombre;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }
    setGenero(genero){
        this.id_genero = genero;
    }
    getGenero(){
        return this.id_genero;
    }
    setArtista(artista){
        this.artista = artista;
    }
    getArtista(){
        return this.artista;
    }
    setUrl(url){
        this.url = url;
    }
    getUrl(){
        return this.url;
    }

    estaReproduciendo(){
        return this.reproduciendo
    }

    play(){
        this.reproduciendo = true;
    }

    stop(){
        this.reproduciendo = false;
    }
}

//-------------------------------------------------INICIA EL ALGORITMO---------------------------------------------------

class ListaHistorial extends ListaDeReproduccion{
    constructor(cancion, base_de_datos){
        super([cancion]);
        this.base_de_datos = base_de_datos
    }
    //Shuffle no tiene implementacion para el historial ya que el historial tiene orden
    shuffle(){}

    setBaseDeDatos(base_de_datos){
        this.base_de_datos = base_de_datos
    }

    obtenerCancionesRecomendadas(){

        let moda = {};
        let recomendados = new ListaDeReproduccion([]);

        for(let i = 0; i < this.getSize(); i++){
            let genero = this.lista[i].getGenero();
            moda[genero] = (moda[genero] || 0) + 1;
        }

        let masEscuchados = getCincoMasEscuchados(moda);

        for(let i = 0; i < masEscuchados.length; i++){
            recomendados = new ListaDeReproduccion(recomendados.fusionar(new ListaDeReproduccion(baseDatosJSON.filter(n => n.getGenero() == masEscuchados[i]))));
        }
        recomendados.shuffle();
        return recomendados.get().slice(0,10);
    }

}

function getCincoMasEscuchados(dicc){
    let keys = Object.keys(dicc)
    if(keys.length > 5){
        let recomendados = {}
        let minimo = [null, Infinity];
        for(let i = 0; i < keys.length; i++){
            if(Object.keys(recomendados).length != 5){
                recomendados[keys[i]] = dicc[keys[i]]; 
                minimo = minimo[1] > dicc[keys[i]]  ? [keys[i],dicc[keys[i]]] : minimo;
            }else{
                if(dicc[keys[i]] > minimo[1]){
                    delete recomendados[minimo[0]];
                    recomendados[keys[i]] = dicc[keys[i]];
                    minimo = getMinimo(recomendados);
                }else if(dicc[keys[i]] == minimo[1] & Math.floor(Math.random() * 2) == 0){
                    //Si es igual entonces se elige aleatoriamente entre los dos para elegir uno.
                    delete recomendados[minimo[0]];
                    recomendados[keys[i]] = dicc[keys[i]];
                }
            }
        }
        return Object.keys(recomendados);
    }else{
        return keys;
    }
}

function getMinimo(dicc){
    let min = Infinity;
    for(let key in dicc){
        if(dicc[key] < min){
            min = dicc[key]
        }
    }
    return min == Infinity ? 0 : min;
}