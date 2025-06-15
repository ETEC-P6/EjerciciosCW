const baseDatosJSON = {
  canciones: [
    {
      id: 1,
      nombre: "Wake me up",
      artista: "Avicii",
      id_artista: 1,
      album: "True",
      id_album: 1,
      link: "SsYXnH9lzCY",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 2,
      nombre: "Hey brother",
      artista: "Avicii",
      id_artista: 1,
      album: "True",
      id_album: 1,
      link: "69Fb6XozEx8",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 3,
      nombre: "Alone",
      artista: "Marshmello",
      id_artista: 2,
      album: "Marshmello",
      id_album: 2,
      link: "nR5l-1lmkkI",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 4,
      nombre: "Animals",
      artista: "Martin Garrix",
      id_artista: 3,
      album: "Animals",
      id_album: 3,
      link: "2kpAzC2Mja8",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 5,
      nombre: "Titanium",
      artista: "David Guetta",
      id_artista: 4,
      album: "Nothing but the Beat",
      id_album: 4,
      link: "KxnpFKZowcs",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 6,
      nombre: "Despacito",
      artista: "Luis Fonsi ft. Daddy Yankee",
      id_artista: 5,
      album: "Despacito",
      id_album: 5,
      link: "kJQP7kiw5Fk",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 7,
      nombre: "Shape of You",
      artista: "Ed Sheeran",
      id_artista: 6,
      album: "Divide",
      id_album: 6,
      link: "JGwWNGJdvx8",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 8,
      nombre: "Bohemian Rhapsody",
      artista: "Queen",
      id_artista: 7,
      album: "A Night at the Opera",
      id_album: 7,
      link: "fJ9rUzIMcZQ",
      genero: "Rock",
      id_genero: 3
    },
    {
      id: 9,
      nombre: "Viento",
      artista: "Caifanes",
      id_artista: 8,
      album: "Caifanes",
      id_album: 8,
      link: "T8TtE-enslA",
      genero: "Rock",
      id_genero: 3
    }
  ],
  artistas: [
    {
      id: 1,
      nombre: "Avicii",
      descripcion: "Avicii fue un DJ y productor sueco de música electrónica, conocido por su estilo melódico y pegajoso."
    },
    {
      id: 2,
      nombre: "Marshmello",
      descripcion: "Marshmello es un DJ y productor estadounidense, famoso por su característico casco de malvavisco y sus éxitos en la música electrónica."
    },
    {
      id: 3,
      nombre: "Martin Garrix",
      descripcion: "Martin Garrix es un DJ y productor neerlandés, reconocido por su talento en la música electrónica y sus colaboraciones con otros artistas."
    },
    {
      id: 4,
      nombre: "David Guetta",
      descripcion: "David Guetta es un DJ y productor francés, pionero en la música electrónica y conocido por sus numerosas colaboraciones con artistas de renombre."
    },
    {
      id: 5,
      nombre: "Luis Fonsi",
      descripcion: "Luis Fonsi es un cantante y compositor puertorriqueño, famoso por su éxito mundial 'Despacito'."
    },
    {
      id: 6,
      nombre: "Ed Sheeran",
      descripcion: "Ed Sheeran es un cantautor británico, conocido por sus emotivas letras y su estilo musical versátil."
    },
    {
      id: 7,
      nombre: "Queen",
      descripcion: "Queen es una icónica banda británica de rock, famosa por su innovador sonido y la poderosa voz de Freddie Mercury."
    },
    {
      id: 8,
      nombre: "Caifanes",
      descripcion: "Caifanes es una influyente banda mexicana de rock, conocida por su fusión de rock y música latina, y por sus letras poéticas.",
      url_img: "https://images.genius.com/4be6ac6517dde5a18eb0f2f9a28f0ce7.952x952x1.jpg"
    },
    {
      id: 9,
      nombre: "Daddy Yankee",
      descripcion: "Daddy Yankee es un cantante y compositor puertorriqueño, conocido como el 'Rey del Reguetón' y famoso por su éxito 'Despacito'."
    }
  ],
  genero: [
    {
      id: 1,
      nombre: "Música Electrónica",
      descripcion: "La música electrónica es un género musical que utiliza tecnología electrónica para crear sonidos y ritmos, abarcando una amplia variedad de estilos."
    },
    {
      id: 2,
      nombre: "Pop",
      descripcion: "El pop es un género musical popular caracterizado por melodías pegajosas y letras accesibles, abarcando una amplia gama de estilos y artistas."
    },
    {
      id: 3,
      nombre: "Rock",
      descripcion: "El rock es un género musical que se originó en la década de 1950, caracterizado por el uso de guitarras eléctricas, batería y una fuerte presencia vocal."
    },
    {
      id: 4,
      nombre: "Hip Hop",
      descripcion: "El hip hop es un género musical y cultural que se originó en la década de 1970, caracterizado por el rap, el DJing y el breakdancing."
    },
    {
      id: 5,
      nombre: "R&B",
      descripcion: "El R&B (Rhythm and Blues) es un género musical que combina elementos de soul, funk y pop, con un enfoque en las melodías vocales y ritmos pegajosos."
    },
    {
      id: 6,
      nombre: "Country",
      descripcion: "El country es un género musical estadounidense que se originó en el sur, caracterizado por sus historias narrativas y el uso de instrumentos como la guitarra acústica y el banjo."
    },
    {
      id: 7,
      nombre: "Jazz",
      descripcion: "El jazz es un género musical que se originó a principios del siglo XX, caracterizado por su improvisación, ritmos complejos y una rica tradición instrumental."
    }
  ],
  cancion_has_artista: [
    {
      id_CHA: 1,
      id_cancion: 6,
      id_artista: 5
    },
    {
      id_CHA: 2,
      id_cancion: 6,
      id_artista: 9
    }
  ],
  album: [
    {
      id: 1,
      nombre: "True",
      artista: "Avicii",
      id_artista: 1,
      descripcion: "El álbum 'True' de Avicii es una mezcla innovadora de música electrónica y folk, con éxitos como 'Wake Me Up' y 'Hey Brother'."
    },
    {
      id: 2,
      nombre: "Marshmello",
      artista: "Marshmello",
      id_artista: 2,
      descripcion: "El álbum homónimo de Marshmello presenta una colección de sus éxitos más populares, destacando su estilo distintivo en la música electrónica."
    },
    {
      id: 3,
      nombre: "Animals",
      artista: "Martin Garrix",
      id_artista: 3,
      descripcion: "El álbum 'Animals' de Martin Garrix incluye su famoso sencillo del mismo nombre, consolidando su lugar en la escena de la música electrónica."
    },
    {
      id: 4,
      nombre: "Nothing but the Beat",
      artista: "David Guetta",
      id_artista: 4,
      descripcion: "El álbum 'Nothing but the Beat' de David Guetta es un hito en la música electrónica, con colaboraciones de artistas destacados y éxitos globales."
    },
    {
      id: 5,
      nombre: "Despacito",
      artista: "Luis Fonsi ft. Daddy Yankee",
      id_artista: 5,
      descripcion: "'Despacito' es un sencillo icónico que ha alcanzado el estatus de fenómeno mundial, fusionando ritmos latinos con pop."
    },
    {
      id: 6,
      nombre: "Divide",
      artista: "Ed Sheeran",
      id_artista: 6,
      descripcion: "'Divide' es un álbum aclamado por la crítica que presenta una variedad de estilos musicales, destacando la versatilidad de Ed Sheeran."
    },
    {
      id: 7,
      nombre: "A Night at the Opera",
      artista: "Queen",
      id_artista: 7,
      descripcion: "'A Night at the Opera' es un álbum clásico de Queen, conocido por su innovador sonido y la épica 'Bohemian Rhapsody'."
    },
    {
      id: 8,
      nombre: "Caifanes",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'Caifanes' es el álbum debut de la banda mexicana, que fusiona rock y música latina, estableciendo su legado en la escena musical.",
      url_img: "https://i.scdn.co/image/ab67616d00001e0252842eb76a050aa8daec1251"
    },
    {
      id: 9,
      nombre: "El Diablito",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Diablito' es un álbum que marcó un hito en la música rock en español, con letras poéticas y una fusión de géneros.",
      url_img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Caifanes_ElDiablitoLP_cover.jpeg"
    },
    {
      id: 10,
      nombre: "El Silencio",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Silencio' es un álbum emblemático de Caifanes, que consolidó su estatus como una de las bandas más influyentes del rock en español.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273bc4d989c48ad5b154fb0781d"
    },
    {
      id: 11,
      nombre: "El Nervio del Volcán",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Nervio del Volcán' es un álbum que muestra la evolución musical de Caifanes, con letras profundas y una fusión de géneros.",
      url_img: "https://i.scdn.co/image/ab67616d0000b27336aeaab4dc91a8dea53a2d8f"
    }
  ]
};

function JSONToArray(json)
{
    //console.log(json);
    const bd = new Array(); 

    //Para canciones
    for (let i = 0; i < json.canciones.length; i++)
        bd.push(new Cancion(json.canciones[i].id, json.canciones[i].nombre, json.canciones[i].artista, json.canciones[i].album, json.canciones[i].link, json.canciones[i].genero, json.canciones[i].id_artista, json.canciones[i].id_genero, json.canciones[i].id_album));
    // console.log(bd);
    return bd; 
}

let bdCanciones = JSONToArray(baseDatosJSON);
// let bdArtistas = baseDatosJSON.artistas.map(artista => new Artista(artista.id, artista.nombre, artista.genero, artista.link));
let bdArtistas = baseDatosJSON.artistas;
let bdGeneros = baseDatosJSON.genero;
let bdAlbums = baseDatosJSON.album;
let bdCancionHasArtista = baseDatosJSON.cancion_has_artista;

const tipoContenido = new Map([
    ["cancion", bdCanciones],
    ["artista", bdArtistas],
    ["album", bdAlbums],
    ["genero", bdGeneros]
]);