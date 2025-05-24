

export class ListaDeReproduccion{

    constructor(arreglo){
        this.lista = null;
        if(!Array.isArray(arreglo))
            this.lista = [];
        else
            this.lista = structuredClone(arreglo); 
    }
    

    pop(indice){
        let eliminado = this.lista[indice];
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
        for(let i = 0; i < this.lista.length; i++){
            accion(this.lista, i);
        }
    }
    toString(){
        let string = "[";
        for(let i  = 0; i < this.lista.length-1; i++){
            string += this.lista[i] + ", ";
        }
        string += this.lista[this.getSize()-1] + "]";
        return string;
    }

}

function intercambia_shuffle(lista,i){
    let j = Math.floor(Math.random() * (i+1))
    intercambia(lista,i,j);
}

function intercambia(lista,a,b){
    let c = lista[a];
    lista[a] = lista[b];
    lista[b] = c;
}


//Ejemplo
let a = [1,2,3,4,5,6,7,8,9,0];
let lista = new ListaDeReproduccion(a);
lista.push(10);
lista.pop(lista.getSize()-1);
console.log(lista.toString())
for(let i = 0; i < lista.getSize(); i++){
    lista.shuffle();
    console.log(lista.toString());
}

