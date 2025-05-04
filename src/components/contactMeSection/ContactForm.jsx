import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [toast, setToast] = useState(null); // { msg, type }
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

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
        className={`fixed top-4 right-4 flex items-center justify-between gap-4 px-4 py-3 rounded z-50 animate-slidefade w-[calc(100%-2rem)] max-w-sm
          shadow-lg transition-all duration-300 ease-in-out
          ${toast.type === "success"
            ? "bg-green-100 text-green-900 border border-green-400"
            : "bg-red-100 text-red-900 border border-red-400"
          }`}
        >
          <span className="flex-1 text-sm">{toast.msg}</span>
          <button
            onClick={closeToast}
            className="ml-2 text-xl font-bold leading-none hover:text-black transition"
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
          onChange={handleName}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Correo"
          required
          className="h-12 rounded-lg bg-lightBrown px-4 text-white placeholder-white"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Escribe tu mensaje aquí..."
          required
          className="rounded-lg bg-lightBrown p-4 text-white placeholder-white"
          value={message}
          onChange={handleMessage}
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
