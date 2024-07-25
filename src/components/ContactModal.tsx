import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError("");

    try {
      const webhookURL =
        "https://discord.com/api/webhooks/1258956731111968779/GWh0Kz2DTKokq19XbATKRQty_lKZ0I72STsHqgH2YMdtfcWsAkASyMkuUG3EK6nnfhoL"; //
      const message = {
        content: `**Yhteydenotto pyyntö**\n\n**Nimi:** ${formData.name}\n**Sähköposti:** ${formData.email}\n**Viesti:**\n${formData.message}`,
      };

      await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      setFormData({ name: "", email: "", message: "" });
      onClose();
    } catch (err) {
      setError("Failed to send message.");
      console.error("Discord Webhook error:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-card bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-background rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-accent hover:text-secondary"
          >
            <FaTimes size={20} />
          </button>
          <h2 className="text-2xl font-semibold text-accent mb-4">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-accent text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-background border border-card rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-accent text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-3 py-2 bg-background border border-card  rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-accent text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full px-3 py-2 bg-background border border-card  rounded-md focus:outline-none"
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-card text-white py-2 px-4 rounded-md hover:bg-background"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
