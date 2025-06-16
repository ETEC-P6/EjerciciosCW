class Peticion{
    constructor(tipo, id){
        this.tipo = tipo;
        if (id === undefined || id === null){
            this.id = null;
        }
        else {
            this.id = id;
        }
    }
}

const mapPalabraPlural = new Map(
    [
        ["cancion", "Canciones"],
        ["album", "Álbumes"],
        ["artista", "Artistas"],
        ["genero", "Generos"]
    ]
);
class PeticionEnDOM{
    constructor(peticion){
        this.peticion = peticion;
        this.secciones = new Map(
            [
                ["titulo", document.createElement("div")],
                ["desc", document.createElement("div")],
                ["contenido", document.createElement("div")],
            ]
        );

        let BD = tipoContenido.get(this.peticion.tipo);

        this.contenedor = document.createElement("div");
        this.contenedor.classList.add("cont-peticion");


        let titulo = this.secciones.get("titulo");
        titulo.classList.add("cont-pet-titulo");
        let div1 = document.createElement("div");
        let h2 = document.createElement("h2");
        
        h2.innerText = (!peticion.id)? mapPalabraPlural.get(this.peticion.tipo) : (()=>{
            let s = "";
            s+=this.peticion.tipo[0].toUpperCase();
            s+=this.peticion.tipo.slice(1);
            s+= `: ${BD[this.peticion.id-1].nombre}`;
            console.log(s);
            return s;
        })();  
        div1.appendChild(h2);
        titulo.appendChild(div1);
        this.contenedor.appendChild(titulo);
        // console.log(bdArtistas[this.peticion.id-1])

        if(peticion.id){
            let desc = this.secciones.get("desc");
            desc.classList.add("cont-pet-desc");
            let div2 = document.createElement("div");
            let img = document.createElement("img");
            img.src = (!peticion.id)?  "" : BD[this.peticion.id-1].url_img;
            img.classList.add("img-tar-grande");
            div2.appendChild(img);
            desc.appendChild(div2);

            let div3 = document.createElement("div");
            div3.classList.add("cont-pet-desc-texto");
            let span = document.createElement("span");
            span.innerText = (!peticion.id)? "No hay información disponible" : BD[this.peticion.id-1].descripcion;
            div3.appendChild(span);
            desc.appendChild(div3);
            this.contenedor.appendChild(desc);
        }
        
        let cont = this.secciones.get("contenido");
        cont.classList.add("cont-pet-contenido");

        if(this.peticion.tipo === "artista"){
            let listaDeAlbumes = bdAlbums;
            listaDeAlbumes.forEach(album => {
                console.log(album);
                if(album.id_artista == this.peticion.id){
                    let divAlbum = document.createElement("div");
                    divAlbum.classList.add("tarjeta");
                    let div01 = document.createElement("div");
                    div01.classList.add("content-tarj-img");
                    let img = document.createElement("img");
                    img.src = album.url_img;
                    div01.appendChild(img);
                    divAlbum.appendChild(div01);

                    let div02 = document.createElement("div");
                    div02.classList.add("content-tarj-info");
                    let span = document.createElement("span");
                    span.innerText = album.nombre;
                    div02.appendChild(span);
                    divAlbum.appendChild(div02);

                    divAlbum.setAttribute("event-detonator", "click");
                    divAlbum.setAttribute("data-id", `${album.id}`);
                    divAlbum.setAttribute("data-res-busc-item", `${"album"}`);

                    divAlbum.addEventListener("click", (e) => {
                        let id = e.currentTarget.getAttribute("data-id");
                        let tipo = e.currentTarget.getAttribute("data-res-busc-item");
                        contenido(tipo, id);
                    });
                    cont.appendChild(divAlbum);
                }
            });
        } else if(this.peticion.tipo === "album"){
            let listaDeCanciones = bdCanciones;
            listaDeCanciones.forEach(cancion => {
                console.log(cancion);
                if(cancion.id_album == this.peticion.id){
                    let divCancion = document.createElement("div");
                    divCancion.classList.add("lista");
                    let div01 = document.createElement("div");
                    
                    let span1 = document.createElement("span");
                    span1.classList.add("tituloCancion");
                    span1.innerText = cancion.nombre;
                    div01.appendChild(span1);

                    let div02 = document.createElement("div");
                    div02.classList.add("infoCancion");
                    let span = document.createElement("span");
                    span.classList.add("albumCancion");
                    span.innerText = cancion.album;
                    span.addEventListener("click", (e) => {
                        e.stopPropagation();
                        let id = (()=>{
                            // let idArtista = bdAlbums.find(album => album.nombre === cancion.album).id_artista;
                            let idArtista = bdAlbums[this.peticion.id-1].id_artista;
                            console.log(idArtista);
                            return idArtista;
                        })();
                        contenido("artista", id);
                    });

                    let span2 = document.createElement("span");
                    span2.innerText = cancion.genero;
                    div02.appendChild(span);
                    div02.appendChild(span2);
                    div01.appendChild(div02);
                    divCancion.appendChild(div01);

                    let div03 = document.createElement("div");
                    div03.classList.add("botonesCancion");
                    div03.innerHTML = `<div class="cursor icono-peq agregar-cancion" title="Agregar a lista de reproducción">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path></svg>
                                        </div>`;
                    divCancion.appendChild(div03);

                    divCancion.setAttribute("event-detonator", "click");
                    divCancion.setAttribute("data-id", `${cancion.id}`);
                    divCancion.setAttribute("data-res-busc-item", `${"cancion"}`);

                    divCancion.addEventListener("click", (e) => {
                        let id = e.currentTarget.getAttribute("data-id");
                        let tipo = e.currentTarget.getAttribute("data-res-busc-item");
                        contenido(tipo, id);
                        
                    });

                    cont.appendChild(divCancion);
                }
            });
        }
        this.contenedor.appendChild(cont);  
    }
}

const secCentral = document.getElementById("secCentral");

class ListaDePeticiones{
    constructor(){
        this.peticiones = [];
    }
    agregarPeticion(peticion){
        this.peticiones.push(peticion);
    }
    popPeticion(){
        if(this.peticiones.length > 0){
            return this.peticiones.pop();
        }
        return null;
    }
    limpiarPeticiones(){
        this.peticiones = [];
    }
    nuevaPeticion(tipo){
        if(tipo == "prev"){
            if(this.peticiones.length > 0){
                let pets = this.peticiones;
                pilaDePeticionesForward.push(pets);
                this.limpiarPeticiones();
            }
            if(pilaDePeticionesBackward.length > 0){
                let peticiones = pilaDePeticionesBackward.pop();
                this.peticiones = peticiones;
                this.procesarPeticiones();
            }
        } else if(tipo == "next"){
            if(this.peticiones.length > 0){
                let pets = this.peticiones;
                pilaDePeticionesBackward.push(pets);
                this.limpiarPeticiones();
            }
            if(pilaDePeticionesForward.length > 0){
                let peticiones = pilaDePeticionesForward.pop();
                this.peticiones = peticiones;
                this.procesarPeticiones();
            }
        } else if(tipo == "new"){
            if(this.peticiones.length > 0){
                let pets = this.peticiones;
                pilaDePeticionesBackward.push(pets);
                pilaDePeticionesForward = [];
                this.limpiarPeticiones();
            }
        }
        
    }
    procesarPeticiones(){
        secCentral.innerHTML = "";
        
        if(this.peticiones.length > 0){
            this.peticiones.forEach(peticion => {
                // console.log(`Procesando petición: ${peticion.tipo} con ID: ${peticion.id}`);
                console.log(peticion);
                let peticionEnDOM = new PeticionEnDOM(peticion);
                // secCentral.appendChild(peticionEnDOM.contenedor);
                secCentral.appendChild(peticionEnDOM.contenedor);
            });
            
            // const peticion = this.peticiones.shift();
            // console.log(`Procesando petición: ${peticion.tipo} con ID: ${peticion.id}`);
        }
    }
}

let colaDePeticiones = new ListaDePeticiones();

let pilaDePeticionesBackward = [];
let pilaDePeticionesForward = [];

const btnPrev = document.getElementById("btn-prev-page");
const btnNext = document.getElementById("btn-next-page");

btnPrev.addEventListener("click", () => {
    if(pilaDePeticionesBackward.length > 0){
        colaDePeticiones.nuevaPeticion("prev");
    }
});
btnNext.addEventListener("click", () => {
    if(pilaDePeticionesForward.length > 0){
        colaDePeticiones.nuevaPeticion("next");
    }
}); 