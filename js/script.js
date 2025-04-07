document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // evita el envío

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const formMsg = document.getElementById("formMsg");

    // Validaciones simples
    if (nombre.length < 3) {
      formMsg.textContent = "El nombre debe tener al menos 3 caracteres.";
      formMsg.style.color = "red";
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      formMsg.textContent = "Por favor, introduce un correo válido.";
      formMsg.style.color = "red";
      return;
    }

    if (asunto === "" || mensaje === "") {
      formMsg.textContent = "Por favor, completa todos los campos.";
      formMsg.style.color = "red";
      return;
    }

    // Éxito simulado
    formMsg.textContent = "¡Mensaje enviado correctamente! (simulado)";
    formMsg.style.color = "green";

    // Aquí podrías hacer fetch o enviar a Formspree
    // fetch('https://formspree.io/f/tu-form-id', {...})
  });