# Pequeña guía rápida para usar la API de YouTube 

Están disponibles dos: 

https://developers.google.com/youtube/iframe_api_reference?hl=es-419
y https://developers.google.com/youtube/v3/docs?apix=true&hl=es-419#Videos 

## Requisitos 

- [ ] Tener una cuenta de Google
- [ ] Tener una cuenta de GCP (Google Cloud Platform) 

## Consideraciones

### Cuotas de YouTube Data API v3

> Los proyectos que habilitan la API de datos de YouTube tienen una asignación de cuota predeterminada de 10,000 unidades por día, una cantidad suficiente para la inmensa mayoría de los usuarios de nuestra API. La cuota predeterminada, que está sujeta a cambios, nos ayuda a optimizar las asignaciones de cuotas y escalar nuestra infraestructura de una manera que sea más significativa para los usuarios de la API. Puedes ver tu uso de la cuota en la página Cuotas de la Consola de API. 

> Google calcula el uso de tu cuota asignando un costo a cada solicitud. Los diferentes tipos de las operaciones tienen diferentes costos de cuota. Por ejemplo:
>    - Operación de lectura que recupera una lista de recursos (canales, videos, playlists) y, por lo general, cuesta 1 unidad.
>   - Una operación de escritura que crea, actualiza o borra un recurso suele tener costos 50 unidades.
>   - Una solicitud de búsqueda cuesta 100 unidades.
>   - Subir un video cuesta 1600 unidades.

Puedes consultar el recurso completo en: https://developers.google.com/youtube/v3/getting-started?hl=es-419#quota

### Conocimientos necesarios para comprender qué estamos haciendo

- Qué es la Nube
- Qué es una API
- Métodos HTTP (REST)

## Instrucciones 

1. Crear una cuenta en GCP [COLOCAR CÓMO HACERLO]
2. Crear un proyecto en GCP [COLOCAR CÓMO HACERLO]
   IMPORTANTE: Los nombres de los proyectos deben ser únicos. Recomiendo que sea super especifico para que no les pongan cadenar raras. Ejemplo: api-youtube-curso-web-[usuario-github]
3. Crear un cliente
  - Google Auth Platform / Clientes / Crear cliente
  IMPORTANTE: El nombre también debe ser muy descriptivo.
4. Copiar el secreto - lo usaremos más tarde
5. Habilitar las APIs
  - APIs y Servicios / Hbailitar APIs y Servicios
  - Buscar YouTube Data API v3 y [COLOCAR LA OTRA JAJAJAJ]
