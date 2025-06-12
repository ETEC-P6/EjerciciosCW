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

    constructor(nombre, id, genero, artista, url){
        this.nombre = nombre;
        this.id = id;
        this.genero = genero;
        this.artista = artista;
        this.url = url;
        this.reproduciendo = false; 
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
        this.genero = genero;
    }
    getGenero(){
        return this.genero;
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
            recomendados = new ListaDeReproduccion(recomendados.fusionar(new ListaDeReproduccion(this.base_de_datos.filter(n => n.getGenero() == masEscuchados[i]))));
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

//---------------------------------------------------------------PRUEBA DEL ALGORITMO----------------------------------------------------------

bdd = [ 
  new Cancion("Bohemian Rhapsody", 1, "Rock", "Queen", "https://www.youtube.com/watch?v=yk3prd8GER4"),
  new Cancion("Billie Jean", 2, "Pop", "Michael Jackson", "https://www.youtube.com/watch?v=DKFS2tDsZRY"),
  new Cancion("Still D.R.E.", 3, "Hip Hop", "Dr. Dre ft. Snoop Dogg", "https://www.youtube.com/watch?v=BaFF4OkLOss"),
  new Cancion("Wake Me Up", 4, "Electrónica", "Avicii", "https://www.youtube.com/watch?v=p_9pwEiOQ6E"),
  new Cancion("Kill Bill", 5, "R&B", "SZA", "https://www.youtube.com/watch?v=sk6rMb8OsQY"),
  new Cancion("Despacito", 6, "Pop", "Justin Beiber ft. Luis Fonsi & Daddy Yankee", "https://www.youtube.com/watch?v=TfkP5ubz1z4"),
  new Cancion("Take Me Home, Country Roads", 7, "Country", "John Denver", "https://www.youtube.com/watch?v=uu7j_xljCRY"),
  new Cancion("What a Wonderful World", 8, "Jazz", "Louis Armstrong", "https://www.youtube.com/watch?v=A3yCcXgbKrE"),
  new Cancion("The Thrill Is Gone", 9, "Blues", "B.B. King", "https://www.youtube.com/watch?v=HpP5ri5yv04"),
  new Cancion("The Other Side", 10, "Pop", "The Greatest Showman", "https://www.youtube.com/watch?v=-OX6pEeVVVo"),
  new Cancion("Domestic De Violence", 11, "J-pop", "ADO", "https://www.youtube.com/watch?v=Cdt-KtXCHCw&pp=ygUfZG9tZXN0aWMgZGUgdmlvbGVuY2UgYWRvIGx5cmljcw%3D%3D"),
  new Cancion("Hai Yorokonde", 12, "J-pop", "Kocchi no Kento", "https://www.youtube.com/watch?v=i62rtMpP3Es"),
  new Cancion("Pierdeme el respeto", 13, "Pop", "Playa Limbo", "https://www.youtube.com/watch?v=VjRmmCRXDhY&pp=ygUacGllcmRlbWUgZWwgcmVzcGV0byBseXJpY3M%3D"),
  new Cancion("All I want", 14, "Rock", "The Offspring", "https://www.youtube.com/watch?v=CzuolmEMIEk&pp=ygUfYWxsIGkgd2FudCB0aGUgb2Zmc3ByaW5nIGx5cmljcw%3D%3D"),
  new Cancion("Lueve sobre la ciudad", 15, "Pop", "The Bunkers", "https://www.youtube.com/watch?v=7a3kCFdsJ60&pp=ygUpbGx1ZXZlIHNvYnJlIGxhIGNpdWRhZCBsb3MgYnVua2VycyBseXJpY3M%3D"),
  new Cancion("Thunder Bringer", 16, "Rock", "Jorge Rivera-Herrans", "https://www.youtube.com/watch?v=3oZO_XE-MK4"),
  new Cancion("OTONABLUE", 17, "J-pop", "ATARASHII GAKKO!", "https://www.youtube.com/watch?v=7zS9gtMz0Uk&pp=ygUQb3RvbmFibHVlIGx5cmljcw%3D%3D"),
  new Cancion("Right Hand Man", 18, "Hip Hop", "Lin-Manuel Miranda", "https://www.youtube.com/watch?v=BG2BsgurwMg&pp=ygUVcmlnaHQgaGFuZCBtYW4gbHlyaWNz"),
  new Cancion("La Bachata", 19, "Bachata", "Manuel Turizo", "https://www.youtube.com/watch?v=nEd7mXPQ688&pp=ygURbGEgYmFjaGF0YSBseXJpY3M%3D"),
  new Cancion("Lamento Boliviano", 20, "Rock", "Los Enanitos Verdes", "https://www.youtube.com/watch?v=_dRsmc8vDN0&pp=ygUYbGFtZW50byBib2xpdmlhbm8gbHlyaWNz"),
]

cancion =  new Cancion("Bohemian Rhapsody", 1, "Rock", "Queen", "https://www.youtube.com/watch?v=yk3prd8GER4");
let historial = new ListaHistorial(cancion,bdd);
historial.push(new Cancion("Billie Jean", 2, "Pop", "Michael Jackson", "https://www.youtube.com/watch?v=DKFS2tDsZRY"));
historial.push(new Cancion("Domestic De Violence", 11, "J-pop", "ADO", "https://www.youtube.com/watch?v=Cdt-KtXCHCw&pp=ygUfZG9tZXN0aWMgZGUgdmlvbGVuY2UgYWRvIGx5cmljcw%3D%3D"));
historial.push(new Cancion("Still D.R.E.", 3, "Hip Hop", "Dr. Dre ft. Snoop Dogg", "https://www.youtube.com/watch?v=BaFF4OkLOss"))
historial.push(new Cancion("La Bachata", 19, "Bachata", "Manuel Turizo", "https://www.youtube.com/watch?v=nEd7mXPQ688&pp=ygURbGEgYmFjaGF0YSBseXJpY3M%3D"));
historial.push(new Cancion("Kill Bill", 5, "R&B", "SZA", "https://www.youtube.com/watch?v=sk6rMb8OsQY"))
historial.push(new Cancion("Kill Bill", 5, "R&B", "SZA", "https://www.youtube.com/watch?v=sk6rMb8OsQY"))
historial.push(cancion);
historial.push(new Cancion("Billie Jean", 2, "Pop", "Michael Jackson", "https://www.youtube.com/watch?v=DKFS2tDsZRY"));
historial.push(new Cancion("Domestic De Violence", 11, "J-pop", "ADO", "https://www.youtube.com/watch?v=Cdt-KtXCHCw&pp=ygUfZG9tZXN0aWMgZGUgdmlvbGVuY2UgYWRvIGx5cmljcw%3D%3D"));
historial.push(new Cancion("Still D.R.E.", 3, "Hip Hop", "Dr. Dre ft. Snoop Dogg", "https://www.youtube.com/watch?v=BaFF4OkLOss"))

//Deberia de aparecer lo que sea excepto Bachata, ya que solo se puso una vez
historial.obtenerCancionesRecomendadas();