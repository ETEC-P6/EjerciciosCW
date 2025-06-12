/**
 * Cola De Reproducción No Optima
 * @description Clase que implementa una cola de reproducción no optima 
 */
export class ColaDeReproduccionNoOptima{

    /** 
     * Crea una nueva cola de reproducción
     */
    constructor(){
        this.cola = [];
    }

    /**
     * Mete un elemento a la cola de reproduccion
     * @param cancion el elemento a agregar
     * @description Si el elemento es null, no se agrega nada
     */
    push(cancion){
        if(cancion ==  null)
            return; //No se agrega nada
        this.cola.push(cancion); //Agrega el elemento
    }

    /**
    * Saca un elemento de la cola de reproduccion
    * @returns el elemento eliminado
    * @description Si la cola de reproduccion esta vacia, devuelve null
    */
    pop(){
        if(this.isEmpty())
            return null;
        let elemento_eliminado = this.get(); //Por si se quiere guardar el elemento eliminado
        this.cola.shift(); // Elimina el elemento
        return elemento_eliminado; //Devuelve el elemento eliminado
    }

    

    /**
     * Devuelve el elemento en la cola de reproducción
     * @returns el elemento en la cabeza de la cola de reproducción
     */
    get(){
        return this.cola[0];
    }

    /**
     * Nos dice si la cola de reproducción esta vacia
     * @returns true si la cola de reproducción esta vacia, false en otro caso
     */
    isEmpty(){
        return this.cola.length == 0;
    }

    /**
     * Devuelve el número de elementos
     * @returns el número de elementos en la cola de reproducción
     */
    getLongitud(){
        return this.cola.length;
    }

}
