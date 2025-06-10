class Cancion
{
    constructor(nombre,id,genero,artista,url)
    {
        this.nombre=nombre;
        this.id=id;
        this.genero=genero;
        this.artista=artista;
        this.url=url;
    }
}

const basedecanciones= [{id:1, nombre:"Domestic De Violence", artista:"ADO", genero:"J-pop", url:"https://www.youtube.com/watch?v=iRMYLKIWyUk"},
                        {id:2, nombre:"Hai Yorokonde", artista:"Kocchi no Kento", genero:"J-pop", url:"https://www.youtube.com/watch?v=i62rtMpP3Es"},
                        {id:3, nombre:"Pierdeme el respeto", artista:"Playa Limbo", genero:"pop", url:"https://www.youtube.com/watch?v=zbU4oJ8YHvI"},
                        {id:4, nombre:"All I want", artista:"The Offspring", genero:"Rock", url:"https://www.youtube.com/watch?v=us8OhI-OTHg&pp=ygUYYWxsIGkgd2FudCB0aGUgb2Zmc3ByaW5n"},
                        {id:5, nombre:"Lueve sobre la ciudad", artista:"The Bunkers", genero:"pop", url:"https://www.youtube.com/watch?v=5OuFnuhXUBc&pp=ygUibGx1ZXZlIHNvYnJlIGxhIGNpdWRhZCBsb3MgYnVua2Vycw%3D%3D"},
                        {id:6, nombre:"Thunder Bringer", artista:"Jorge Rivera-Herrans", genero:"rock", url:"https://www.youtube.com/watch?v=3oZO_XE-MK4"},
                        {id:7, nombre:"OTONABLUE", artista:"ATARASHII GAKKO!", genero:"J-pop", url:"https://www.youtube.com/watch?v=l446hUqQ7GY&pp=ygUaYXRhcmFzaGlpIGdha2tvIG90b25hYmx1ZSA%3D"},
                        {id:8, nombre:"Refran", artista:"Carlos Cuevas", genero:"Bolero", url:"https://www.youtube.com/watch?v=yIbaQweSN4Y"},
                        {id:9, nombre:"La Bachata", artista:"Manuel Turizo", genero:"Bachata", url:"https://www.youtube.com/watch?v=TiM_TFpT_DE&pp=ygUVYmFjaGF0YSBtYW51ZWwgdHVyaXpv"},
                        {id:10, nombre:"Tom's Diner", artista:"Klischee", genero:"Electro-Swing", url:"https://www.youtube.com/watch?v=6qmTwABJwp0"},
]