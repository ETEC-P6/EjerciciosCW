
/**
 * Crea una lista de reproducción
 */
export class ListaDeReproduccion{

    /**
     * Constructor de una lista de reproducción
     * @param arreglo  (opcional) si no se otorga este arreglo se asigna uno vacio
     */
    constructor(arreglo){
        this.lista = null;
        if(!Array.isArray(arreglo))
            this.lista = [];
        else
            this.lista = structuredClone(arreglo); 
    }
    
    /**
    * Elimina un elemento del índice indicado en la lista de reproducción
    * @param indice el indice a eliminar
    * @retuns el elemento eliminado
    */
    pop(indice){
        let eliminado = this.lista[indice];
        this.lista.splice(indice,1);
        return eliminado;
    }

    /**
     * Agrega un objeto a la lista de reproducción
     * @param objeto el objeto a agregar 
     */
    push(objeto){
        this.lista.push(objeto);
    }

    /**
     * Devuelve el número de elementos de la lista de reproducción
     * @returns el número de elementos de la lista de reproducción
     */
    getSize(){
        return this.lista.length;
    }
    
    /**
     * Mezcla aleatoriamente los elementos de la lista de reproducción
     */
    shuffle(){
        this.forEach(intercambia_shuffle);
    }


    /** 
     * Recorre todos los elementos de la lista y ejecuta una accion en cada uno.
     * @param {function} accion funcion para ejecutar en cada iteración. Puede aceptar (lista, indice). 
     */
    forEach(accion){
        for(let i = 0; i < this.lista.length; i++){
            accion(this.lista, i);
        }
    }

    /**
     * Devuelve la lista de reproducción en formato de texto
     * @returns el texto que representa la lista de reproducción
     */
    toString(){
        let string = "[";
        for(let i  = 0; i < this.lista.length-1; i++){
            string += this.lista[i] + ", ";
        }
        string += this.lista[this.getSize()-1] + "]";
        return string;
    }

}

/**
 * Función auxiliar para intercambiar dos elementos de manera aleatoria para mezclar un arreglo
 * @param arreglo el arreglo a mezclar
 * @param i índice del elemento a intercambiar
 */
function intercambia_shuffle(arreglo,i){
    let j = Math.floor(Math.random() * (i+1))
    intercambia(arreglo,i,j);
}

/**
 * Intercambia dos elementos dentro de un arreglo
 * @param arreglo el arreglo 
 * @param a índice del primer elemento
 * @param b índice del segundo elemento
 */
function intercambia(arreglo,a,b){
    let c = arreglo[a];
    arreglo[a] = arreglo[b];
    arreglo[b] = c;
}


//Ejemplo de uso con arreglo
let a = [1,2,3,4,5,6,7,8,9,0];
let lista = new ListaDeReproduccion(a);
lista.push(10);
lista.pop(lista.getSize()-1);
console.log(lista.toString())
for(let i = 0; i < lista.getSize(); i++){
    lista.shuffle();
    console.log(lista.toString());
}

//Salto de linea
console.log()

//Ejemplo de uso sin arreglo
lista = new ListaDeReproduccion();
lista.push(0);
lista.push(1);
lista.push(2);
lista.push(3);
lista.push(4);
lista.push(5);
lista.push(6);
lista.push(7);
lista.push(8);
lista.push(9);
lista.push(10);
lista.pop(lista.getSize()-1);
console.log(lista.toString())
for(let i = 0; i < lista.getSize(); i++){
    lista.shuffle();
    console.log(lista.toString());
}

