import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [token, setToken] = useState(""); // ← Solo aquí está bien
  const recaptchaRef = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = async (e) => {
    e.preventDefault();
  
    if (!token) {
      alert("⚠️ Debes verificar el reCAPTCHA antes de enviar.");
      return;
    }
  
    try {
      const response = await fetch("https://portafolio-backend-c3a2.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, token }),  // 👈 Asegúrate que se envía el token
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSuccess("¡Mensaje enviado con éxito!");
        setName("");
        setEmail("");
        setMessage("");
        recaptchaRef.current.reset();  // 👈 Reinicia reCAPTCHA
        setToken("");
      } else {
        setSuccess("❌ Hubo un error al enviar el mensaje.");
        console.error("❌ Error backend:", data.message);
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
      setSuccess("Error del servidor al enviar el mensaje.");
    }
  };
  

  return (
    <div>
      <p className="text-cyan text-sm font-semibold">{success}</p>
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Correo"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Escribe tu mensaje aquí..."
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          size="normal"
          onChange={(token) => setToken(token)}
          onErrored={() => {
            console.error("⚠️ Error al cargar reCAPTCHA");
            alert("⚠️ Error al cargar reCAPTCHA. Intenta recargar la página.");
          }}
          onExpired={() => {
            console.warn("⚠️ El token expiró");
            setToken("");
          }}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
