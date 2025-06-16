// Archivo que se encarga de rellenar los enlaces de acuerdo a la sección actual de la página web.

const secciones = ["index.html", "artistas.html", "generos.html", "albumes.html", "busquedas.html"];

const linkFillables = new Map([
    ["home", "index.html"],
    ["perfil", "perfil.html"],
    ["inicio", "index.html"],
    ["buscador", "Busquedas.html"]
]);

const fillables = document.querySelectorAll(".link-fillable");

const ruta = window.location.pathname;
const nombreArchivo = ruta.substring(ruta.lastIndexOf("/") + 1).toLowerCase();
console.log(nombreArchivo);
fillables.forEach((element) => {
    const tipo = element.dataset.fillablelinkTipo;
    let link = linkFillables.get(tipo);
    
    if (nombreArchivo === secciones[0] || nombreArchivo == "") 
    {
        if(tipo === "home" || tipo === "inicio") {
            link = `./${link}`;
        } else {
            link = `./Templates/${link}`;
        }
    } else {
        if (tipo === "home" || tipo === "inicio") {
            link = `../${link}`;
        } else {
            link = `./${link}`;
        }
    }
    // console.log(link);
    element.setAttribute("href", link);
});

if(nombreArchivo === secciones[0] || nombreArchivo == "") {
    colaDePeticiones.nuevaPeticion("new");
    colaDePeticiones.agregarPeticion(new Peticion("artista"));
    colaDePeticiones.agregarPeticion(new Peticion("album"));
    // colaDePeticiones.agregarPeticion(new Peticion("genero"));
    colaDePeticiones.procesarPeticiones();
}