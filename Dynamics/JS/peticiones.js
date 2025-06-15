class Peticion{
    Peticion(tipo, id){
        this.tipo = tipo;
        this.id = id;
    }
    Peticion(tipo){
        this.tipo = tipo;
        this.id = null;
    }
}

class PeticionEnDOM{
    PeticionesEnDOM(peticion){
        this.peticion = new Peticion(peticion.tipo, peticion.id);
        this.secciones = [];
    }
}

peticionEnDOM = new PeticionEnDOM(new Peticion("canciones", 1));
