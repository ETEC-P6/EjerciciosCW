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