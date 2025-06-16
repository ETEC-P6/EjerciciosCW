window.addEventListener("load", ()=>{
    const fotoPerfil = document.getElementById("fotoPerfil");
    const archivo = document.getElementById("agregar");

    archivo.addEventListener("change", function () {
        const file = archivo.files[0];

        if (file) {
            const lector = new FileReader();
            lector.onload = function (e) {
                fotoPerfil.src = e.target.result;
            };
            lector.readAsDataURL(file);
        }
    });

})