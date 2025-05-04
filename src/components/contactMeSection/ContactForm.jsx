import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef();

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 5000);
  };

  const closeToast = () => setToast(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!token) return alert("⚠️ Verifica el reCAPTCHA antes de enviar.");

    setLoading(true);

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
        showToast("❌ Error al enviar: " + data.message, "error");
      }
    } catch (error) {
      showToast("❌ Error del servidor. Intenta más tarde.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {toast && (
        <div
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0
            flex items-center gap-3 px-6 py-4 rounded-xl shadow-xl z-50 animate-slidefade w-[90vw] max-w-md
            transition-all duration-500
            ${toast.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
            }`}
        >
          <span className="text-2xl">
            {toast.type === "success" ? "✅" : "❌"}
          </span>
          <span className="flex-1 text-sm md:text-base font-medium">
            {toast.msg}
          </span>
          <button
            onClick={closeToast}
            className="text-xl font-bold leading-none hover:text-gray-300 transition"
            aria-label="Cerrar notificación"
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
          className="h-12 rounded-lg bg-lightBrown px-4 text-white placeholder-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Correo"
          required
          className="h-12 rounded-lg bg-lightBrown px-4 text-white placeholder-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Escribe tu mensaje aquí..."
          required
          className="rounded-lg bg-lightBrown p-4 text-white placeholder-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={(token) => setToken(token)}
          onErrored={() => {
            alert("⚠️ Error al cargar reCAPTCHA");
            console.error("Error reCAPTCHA");
          }}
          onExpired={() => {
            setToken("");
            console.warn("⚠️ Token expirado");
          }}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
