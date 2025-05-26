const clientId = "580444222087-s3h886ata5sjeg10ki7hgf1jvku0kj1m.apps.googleusercontent.com";
const scopes = "https://www.googleapis.com/auth/youtube.readonly";

let tokenClient;
let accessToken = null;

function handleAuth() {
    tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    scope: scopes,
    callback: (tokenResponse) => {
        accessToken = tokenResponse.access_token;
        cargarSubs();
    },
    });

    tokenClient.requestAccessToken();
}

function cargarSubs() {
    fetch("https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=10", {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
    })
    .then(response => response.json())
    .then(data => {
    const lista = document.getElementById("subs");
    lista.innerHTML = "";
    data.items.forEach(item => {
        const nombre = item.snippet.title;
        const canal = document.createElement("li");
        canal.textContent = nombre;
        lista.appendChild(canal);
    });
    })
    .catch(err => console.error("Error al cargar subscripciones:", err));
}