import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef();

  // Verificación de que la clave de reCAPTCHA existe
  useEffect(() => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    console.log("🔐 Clave de sitio reCAPTCHA:", siteKey);

    if (!siteKey) {
      alert("⚠️ Error: No se encontró la clave de reCAPTCHA en .env");
      setSuccess("⚠️ Error de configuración: falta la clave de reCAPTCHA.");
    }
  }, []);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("📨 Enviando formulario...");

    if (!recaptchaLoaded) {
      console.error("❌ reCAPTCHA no está listo aún");
      alert("❌ reCAPTCHA no se ha cargado. Intenta recargar la página.");
      return;
    }

    try {
      const token = await recaptchaRef.current.executeAsync();
      console.log("✅ Token reCAPTCHA generado:", token);
      recaptchaRef.current.reset();

      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, token }),
      });

      const data = await response.json();
      console.log("📥 Respuesta del backend:", data);

      if (response.ok) {
        setSuccess("¡Mensaje enviado con éxito!");
        setName("");
        setEmail("");
        setMessage("");
        console.log("✅ Formulario limpio y éxito mostrado");
      } else {
        console.error("❌ Error en backend:", data.message);
        setSuccess("Hubo un error al enviar el mensaje.");
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
          size="invisible"
          onErrored={() => {
            console.error("⚠️ Error al cargar reCAPTCHA");
            alert("⚠️ Error al cargar reCAPTCHA. Intenta recargar la página.");
          }}
          onExpired={() => console.warn("⚠️ El token expiró")}
          onLoad={() => {
            setRecaptchaLoaded(true);
            console.log("✅ reCAPTCHA cargado");
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
