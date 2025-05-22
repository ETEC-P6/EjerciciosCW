const fs = require("fs");
function generarPaginaHTML(baseDeDatos) {
    let contenido = `
    <html>
    <head>
        <title>Registros en la Base de Datos</title>
    </head>
    <body>
        <h2>Registros en la Base de Datos</h2>
        <ul>`;

    let actual = baseDeDatos.cabeza;
    
    while (actual) {
        contenido += `<li>ID: ${actual.id}, Nombre: ${actual.nombre}</li>`;

        if (actual.videoURL) {
            // Convertir la URL normal de YouTube a URL de embed
            const videoID = obtenerVideoID(actual.videoURL); // Función para extraer el ID
            const embedURL = `https://www.youtube.com/embed/${videoID}`;
            
            contenido += `
            <br>
            <iframe 
                width="560" 
                height="315" 
                src="${embedURL}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
            <br><br>`;
        }

        actual = actual.siguiente;
    }

    contenido += `
        </ul>
    </body>
    </html>`;

    fs.writeFileSync("baseDatos.html", contenido); // Guardar como archivo HTML
}

function obtenerVideoID(url) {
    // Extraer el ID de diferentes formatos de URL de YouTube
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}


/*function generarPaginaHTML(baseDeDatos) {
    let contenido = "<html><body><h2>Registros en la Base de Datos</h2><ul>";
    let actual = baseDeDatos.cabeza;
    
    while (actual) {
        contenido += `<li>ID: ${actual.id}, Nombre: ${actual.nombre}</li>`;
        actual = actual.siguiente;
    }

    contenido += "</ul></body></html>";
    fs.writeFileSync("baseDatos.html", contenido); // Guardar como archivo HTML
}*/

class Nodo {
    constructor(id, nombre, datos, siguiente = null, anterior = null, videoURL) {
        this.id = id;
        this.nombre = nombre;
        this.datos = datos;
        this.siguiente = siguiente;
        this.anterior = anterior;
        this.videoURL = videoURL;
    }
}

class BaseDeDatos {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.tamaño = 0;
        this.indice = new Map();  // Índice para búsqueda rápida por ID
    }

    // Agregar un nuevo registro
    agregarRegistro(id, nombre, datos, videoURL) {
        const nuevoNodo = new Nodo(id, nombre, datos, null, this.cola, videoURL);

        if (this.cola) {
            this.cola.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.cola;
        } else {
            this.cabeza = nuevoNodo;
        }

        this.cola = nuevoNodo;
        this.tamaño++;
        this.indice.set(id, nuevoNodo);  // Agregar al índice
    }

    // Buscar un registro por ID
    buscarRegistro(id) {
        return this.indice.get(id) || null ;
    }

    // Eliminar un registro por ID
    eliminarRegistro(id) {
        let nodo = this.buscarRegistro(id);
        if (!nodo) return false;

        if (nodo.anterior) {
            nodo.anterior.siguiente = nodo.siguiente;
        } else {
            this.cabeza = nodo.siguiente;
        }

        if (nodo.siguiente) {
            nodo.siguiente.anterior = nodo.anterior;
        } else {
            this.cola = nodo.anterior;
        }

        this.indice.delete(id);
        this.tamaño--;
        return true;
    }

    // Guardar la base de datos en un archivo JSON
    guardarEnArchivo() {
        const data = [];
        let actual = this.cabeza;
        while (actual) {
            data.push({ id: actual.id, nombre: actual.nombre, datos: actual.datos });
            actual = actual.siguiente;
        }
        fs.writeFileSync("baseDatos.json", JSON.stringify(data, null, 2));
    }

    //buscar por nombre
    buscarPorNombre(nombre){
        let actual = this.cabeza;
        let resultados = [];
        let patron = prompt("Ingrese busqueda:");
        patron = "\\" + patron + "\\";
        while (actual)  {
            if (actual.nombre.match(patron)) {
                resultados.push(actual);
            }
            actual = actual.siguiente;
        }
        return resultados;

    }

    // Cargar datos desde un archivo JSON
    cargarDesdeArchivo() {
        if (!fs.existsSync("baseDatos.json")) return;
        
        const data = JSON.parse(fs.readFileSync("baseDatos.json"));
        this.cabeza = null;
        this.cola = null;
        this.tamaño = 0;
        this.indice.clear();

        data.forEach(({ id, nombre, datos }) => this.agregarRegistro(id, nombre, datos));
    }

    // Imprimir registros
    imprimirBase() {
        let actual = this.cabeza;
        let salida = "";
        while (actual) {
            salida += `[ID: ${actual.id}, Nombre: ${actual.nombre}] <-> `;
            actual = actual.siguiente;
        }
        return salida + " [FIN]";
    }
}

// 📌 Ejemplo de uso:
const bd = new BaseDeDatos();
bd.agregarRegistro(1, "Isaac", { edad: 18, ciudad: "CDMX" }, "https://www.youtube.com/embed/9psdED3TY3A?si=G7-m9nYWErBJJiWl");
bd.agregarRegistro(2, "Arturo", { edad: 22, ciudad: "GDL" }, null);
bd.agregarRegistro(3, "Urrutia", { edad: 30, ciudad: "MTY" }, null);

console.log(bd.imprimirBase());
console.log(bd.buscarRegistro(2));

bd.guardarEnArchivo();;
console.log(bd.imprimirBase());

let pattern = prompt("Ingrese busqueda:");
pattern = "\\"  + pattern + "\\";

bd.cargarDesdeArchivo(); // Cargar desde JSON
console.log(bd.imprimirBase());

generarPaginaHTML(bd);
