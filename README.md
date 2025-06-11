# Proyecto Curso Web 2025

Una página web que permite:
- Reproducir vídeos locales con controles personalizados  
- Buscar y reproducir vídeos de YouTube usando la YouTube Data API v3  
- Crear una lista de reproducción personalizablee.

## Tabla de contenidos

1. [Características](#características)  
2. [Estructura del proyecto](#estructura-del-proyecto)  
3. [Instalación](#instalación)  
4. [Configuración](#configuración)  
5. [Uso](#uso)  
6. [Contribuciones](#contribuciones)  
7. [Licencia](#licencia)  

## Características

- Reproductor de vídeo personalizable (HTML5 + CSS + JS)  
- Integración con la YouTube Data API v3  
- Diseño responsivo para distintos dispositivos
- Creación y manipulación de una lista de reproducción.

## Estructura del proyecto

```bash
.
├── README.md
├── Docs
│   └── YouTubeAPI.md         # Guía de la utilización de API
├── Dynamics
│   └── JS
│       ├── BaseDeDatos.js    # Datos de la Lista de reproducción.
│       └── Reproductor.js    # Implementación y lógica de la lista.
├── Statics
│   └── CSS
│       ├── estilosRep.css    # Diseño principal del reproductor
│       └── estilosYT.css     # Diseño complementario.
└── Templates
    └── Reproductor.html      # Documento del reproductor.
```

## Instalación

```bash
git clone https://github.com/ETEC-P6/EjerciciosCW.git
cd EjerciciosCW
```

## Configuración

Para usar la YouTube Data API v3:

1. Crea un proyecto en Google Cloud .  
2. Habilita la **YouTube Data API v3**.  
3. Genera una **API Key** y cópiala
4. Crea un archivo confij.js dentro de /Dynamics/JS donde tendrás que poner :
   ```js
     const CONFIG = {
        API_KEY: 'AIzaSyA1_jvHsAO0BTQJAEluiK_i-1ZDvXm3HAw', // Reemplaza con tu clave de API de YouTube
      };
   ```

## Uso

### Buscador :
En la primera parte podemos :
1. Ingresa tu término de búsqueda en el campo de texto.  
2. Presiona **Buscar**.  
3. Selecciona un vídeo de los resultados para reproducirlo.

### Lista de reproducción :
En la segunda parte podemos :
1. Mostrar una lista de reproducción.
2. Manipularla.
3. Reproducir aleatoriamente.


## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
