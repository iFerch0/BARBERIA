
const contactForm = document.querySelector("#contactForm");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const emailInput = document.querySelector("#email");
const telefonoInput = document.querySelector("#telefono");
const mensajeInput = document.querySelector("#mensaje");

const publicKey = "A964BMyycDp_Vnoo0";
const serviceID = "service_0sje8eb";
const templateID = "template_svua5yv";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => { 
    e.preventDefault();
    const inputFields = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value,
        mensaje: mensajeInput.value
    }
emailjs.send(serviceID, templateID, inputFields)
.then(() => {
   alert("Mensaje enviado con éxito");
    nombreInput.value = "";
    apellidoInput.value = "";
    emailInput.value = "";
    telefonoInput.value = "";
    mensajeInput.value = "";
}, (error) => {
    console.log(error);
    alert("Error al enviar");
}); 
});

