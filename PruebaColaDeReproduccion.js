import { ColaDeReproduccion } from "./ColaDeReproduccion.js";
import { ColaDeReproduccionNoOptima } from "./ColaDeReproduccionNoOptima.js";

let cola_de_reproduccion = new ColaDeReproduccion();
let cancion1 = "Rosa Pastel"
let cancion2 = "Memories - Maroon 5"
let cancion3 = "Counting Stars - One Republic"
let cancion4 = "Starboy - The Weeknd"
let cancion5 = "No Roots - Alice Merton" 
let cancion6 = "Perfect - Ed Sheeran"
let cancion7 = "Closer - The Chainsmokers"
let cancion8 = "Despacito - Luis Fonsi"
let cancion9 = "Shape of You - Ed Sheeran"
let cancion10 = "Believer - Imagine Dragons"
let cancion11 = "Thunder - Imagine Dragons"
let cancion12 = "Roma - Torreblanca"


cola_de_reproduccion.push(cancion1);
cola_de_reproduccion.push(cancion2);
cola_de_reproduccion.push(cancion3);
cola_de_reproduccion.push(cancion4);
cola_de_reproduccion.push(cancion5);
cola_de_reproduccion.push(cancion6);
cola_de_reproduccion.push(cancion7);
cola_de_reproduccion.push(cancion8);
cola_de_reproduccion.push(cancion9);
cola_de_reproduccion.push(cancion10);
cola_de_reproduccion.push(cancion11);
cola_de_reproduccion.push(cancion12);

console.log("Canciones en la cola de reproduccion: ");
//Forma trivial de recorrer una cola de reproduccion
while(!cola_de_reproduccion.isEmpty()){
    console.log(cola_de_reproduccion.pop())
}





console.log()






let cola = new ColaDeReproduccionNoOptima();
cola.push(cancion1);
cola.push(cancion2);
cola.push(cancion3);
cola.push(cancion4);
cola.push(cancion5);
cola.push(cancion6);
cola.push(cancion7);
cola.push(cancion8);
cola.push(cancion9);
cola.push(cancion10);
cola.push(cancion11);
cola.push(cancion12);

console.log("Canciones en la cola de reproduccion: ");
//Forma trivial de recorrer una cola de reproduccion
while(!cola.isEmpty()){
    console.log(cola.pop());
}
