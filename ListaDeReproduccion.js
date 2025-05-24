

export class ListaDeReproduccion{

    construct(){
        this.lista = []
    }

    pop(indice){
        let eliminado = this.lista[i];
        this.lista.splice(indice,1);
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
        for(i = 0; i < this.lista.length; i++){
            accion(this.lista, i);
        }
    }


}

function intercambia_shuffle(lista,i){
    let j = Math.floor(Math.random() * (indice+1))
    intercambia(lista,i,j);
}

function intercambia(lista,a,b){
    let c = lista[a];
    lista[a] = lista[b];
    lista[b] = lista[c];
}