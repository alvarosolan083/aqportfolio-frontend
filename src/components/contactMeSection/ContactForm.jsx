import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef();

  const showAlert = (title, text, icon = "success") => {
    Swal.fire({
      title,
      text,
      icon,
      toast: window.innerWidth >= 768,
      position: window.innerWidth < 768 ? "center" : "top-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      background: "#2c2523", // Combina con tu fondo
      color: "#f1e1d9",       // Texto suave
      customClass: {
        popup: "rounded-xl shadow-lg text-sm md:text-base px-6 py-4",
      },
    });
  };

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
        showAlert("¡Enviado!", "Tu mensaje fue enviado con éxito ✅", "success");
        setName("");
        setEmail("");
        setMessage("");
        recaptchaRef.current.reset();
        setToken("");
      } else {
        showAlert("Error", data.message || "Hubo un problema al enviar", "error");
      }
    } catch (error) {
      showAlert("Error", "Servidor no disponible. Intenta más tarde.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
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
  );
};

export default ContactForm;
