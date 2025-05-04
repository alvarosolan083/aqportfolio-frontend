import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [toast, setToast] = useState(null); // { msg: "", type: "success" | "error" }
  const recaptchaRef = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const closeToast = () => setToast(null);

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
        body: JSON.stringify({ name, email, message, token }),
      });

      const data = await response.json();

      if (response.ok) {
        showToast("✅ ¡Mensaje enviado con éxito!", "success");
        setName("");
        setEmail("");
        setMessage("");
        recaptchaRef.current.reset();
        setToken("");
      } else {
        showToast("❌ Hubo un error al enviar el mensaje.", "error");
        console.error("❌ Backend error:", data.message);
      }
    } catch (error) {
      showToast("❌ Error del servidor al enviar el mensaje.", "error");
      console.error("❌ Solicitud fallida:", error);
    }
  };

  return (
    <div className="relative">
      {toast && (
        <div
          className={`fixed top-4 right-4 flex items-center justify-between gap-4 px-4 py-3 rounded shadow-lg z-50 animate-slidefade ${
            toast.type === "success"
              ? "bg-green-100 text-green-900 border border-green-400"
              : "bg-red-100 text-red-900 border border-red-400"
          }`}
        >
          <span>{toast.msg}</span>
          <button
            onClick={closeToast}
            className="ml-2 text-xl font-bold leading-none hover:text-black transition"
          >
            &times;
          </button>
        </div>
      )}

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
