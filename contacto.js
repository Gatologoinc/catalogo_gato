emailjs.init("rIUDcgPWkN13PhkIk");

// Capturamos el formulario desde el HTML
const formRegistro = document.getElementById("formulario_contacto");

// "Escucha" el formulario
formRegistro.addEventListener("submit", async (evento) => {
  evento.preventDefault(); // Evita que la página se recargue

  //Capturar lo que escribió el usuario en las cajas de texto
  const nombreInput = document.getElementById("nombre_usuario").value;
  const correoInput = document.getElementById("correo_usuario").value;
  const asuntoInput = document.getElementById("asunto_usuario").value;
  const messageInput = document.getElementById("mensaje_usuario").value;

  //Si cualquiera de los campos está vacío, detenemos el programa
  if (
    nombreInput === "" ||
    correoInput === "" ||
    asuntoInput === "" ||
    messageInput === ""
  ) {
    alert("Todos los campos son obligatorios!");
    return; // Este return rompe la función y evita que se ejecute el INSERT
  }

  const parametros = {
    name: nombreInput, //campo {{name}}
    email: correoInput, //campo  {{email}}
    title: asuntoInput, //campo  {{title}}
    message: messageInput, //campo  {{message}}
  };

  // Funcion para enviar el correo
  emailjs.send("service_8w9z5hj", "template_c9pxzbp", parametros).then(
    function (response) {
      alert("¡Mensaje enviado con exito, Gracias por su preferencia!");
      formRegistro.reset();
    },
    function (error) {
      console.error("Error: ", error);
      alert("Error: " + JSON.stringify(error));
    },
  );
});
