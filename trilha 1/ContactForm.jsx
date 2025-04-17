export default function ContactForm() {
  return (
    <form className="contact-form">
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required />

      <label htmlFor="message">Mensagem:</label>
      <textarea id="message" rows="5" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
}
