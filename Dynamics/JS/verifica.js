document.getElementById('form-registro').addEventListener('submit', function (e) {
    const usuario = document.getElementById('nombre').value.trim();
    

    if (nombre === '' || email === '') {
      e.preventDefault(); // Detiene el envío
      alert('Por favor llena todos los campos obligatorios.');
    }

    // También podrías validar el formato del email aquí si quieres
  });





// const formData = new FormData(form);
// console.log(formData.get('nombre'));
// console.log(formData.get('email'));
