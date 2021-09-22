import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";
import lettre from "../pictos/courrier.png";


const ContactForm = () => {
  const [mail, setMail] = useState(null);
  const [name, setName] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [message, setMessage] = useState(null);
  // const mailTo = "mailto:" + mail + "?subject=" + name + firstname + "&body=" + message;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value.replace(/\n/g, "%0A"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mail || !name || !firstname || !message) {
      alert("Por favor, preencha todos os espaços em branco");
    } else {
      emailjs.sendForm(
        "service_sj798oe",
        "template_1vr5dno",
        e.target,
        "user_3IV3CFwlcwoGhXLwgO2tv"
      );
      // .then(
      //   (result) => {
      //     console.log(result.text);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );
      alert("Sua mensagem foi enviada com sucesso !!");
      e.target.reset();
    }
  };

  return (
    <div className="sectionContact">
       <div className="pictoLettre">
      <img src={lettre} className="lettre" alt="lettre"/>
      <h1 className="titrePage">Contato</h1>
      <br />
        <p className="paragrapheContact">
        Se você tiver alguma dúvida ou quiser entrar em contato comigo, por favor, sinta-se à vontade para
          me mande uma mensagem.
        </p>
      </div>
      
      <div className="containerForm">
        <form className="Form" onSubmit={handleSubmit}>
          <div className="inputsName">
          <input
            className="inputName"
            type="text"
            name="name"
            placeholder="Seu nome"
            onChange={handleName}
          />

          <input
            className="inputFirstName"
            type="text"
            name="firstname"
            placeholder="Seu primeiro nome"
            onChange={handleFirstName}
          />
          </div>

          <input
            className="inputEmail"
            type="email"
            name="email"
            placeholder="Seu email"
            onChange={handleMail}
          />

          <textarea
            className="inputMessage"
            type="text"
            name="message"
            placeholder="Sua mensagem"
            onChange={handleMessage}
          />
          <div>
            <br />
            <button className="envoyer" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
