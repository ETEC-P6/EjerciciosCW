
/**
 * Cola De Reproducción
 * @description Clase que implementa una cola de reproducción 
 */
export class ColaDeReproduccion{

    /** 
     * Crea una nueva cola de reproducción
     */
    constructor(){
        this.reproduccion_actual = null;
        this.ultimo_agregado = null;
        this.elementos = 0;
    }

    /**
     * Mete un elemento a la cola de reproduccion
     * @param cancion el elemento a agregar
     * @description Si el elemento es null, no se agrega nada
     */
    push(cancion){
        if(cancion ==  null)
            return; //No se agrega nada
        let nodo_nuevo = new Nodo(cancion);
        if(this.isEmpty()){
            this.reproduccion_actual = nodo_nuevo; 
            this.ultimo_agregado = nodo_nuevo;
            //Si la cola esta vacia el primero es igual al ultimo agregado
        }else{
            this.ultimo_agregado.setSiguiente(nodo_nuevo); // Agrega el nuevo nodo al final de la cola
            this.ultimo_agregado = nodo_nuevo; 
        }
        this.elementos++;
    }

    /**
    * Saca un elemento de la cola de reproduccion
    * @returns el elemento eliminado
    * @description Si la cola de reproduccion esta vacia, devuelve null
    */
    pop(){
        if(this.isEmpty())
            return null;
        let elemento_eliminado = this.reproduccion_actual.get(); //Por si se quiere guardar el elemento eliminado
        this.reproduccion_actual = this.reproduccion_actual.getSiguiente(); // Elimina el elemento
        if(this.isEmpty()){
            this.ultimo_agregado = null; //Si despues de eliminar el elemento la cola esta vacia, no hay ultimo agregado
        }
        this.elementos--;
        return elemento_eliminado; //Devuelve el elemento eliminado
    }

    /**
     * Devuelve el elemento en la cola de reproducción
     * @returns el elemento en la cabeza de la cola de reproducción
     */
    get(){
        return this.reproduccion_actual.get();
    }

    /**
     * Nos dice si la cola de reproducción esta vacia
     * @returns true si la cola de reproducción esta vacia, false en otro caso
     */
    isEmpty(){
        return this.reproduccion_actual == null;
    }

    /**
     * Devuelve el número de elementos
     * @returns el número de elementos en la cola de reproducción
     */
    getLongitud(){
        return this.elementos;
    }

}
/**
 * Nodo
 * @description Clase que implementa un nodo para la cola de reproducción
 * @param objeto el objeto a guardar
 */
class Nodo{

    /**
     * Crea un nuevo nodo
     * @param objeto el objeto a guardar
     */
    constructor(objeto){
        this.objeto = objeto;
        this.nodo_siguiente = null;
    }
    /**
     * Establece el nodo siguiente
     * @param nodo el siguiente nodo
     */
    setSiguiente(nodo){
        this.nodo_siguiente = nodo;
    }
    /**
     * Devuelve el nodo siguiente
     * @returns el nodo siguiente
     */
    getSiguiente(){
        return this.nodo_siguiente;
    }
    /**
     * Devuelve el objeto guardado en el nodo
     * @returns el objeto guardado en el nodo
     */
    get(){
        return this.objeto;
    }
}