import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [input, setInput] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    console.log(input);
    setInput({...input, email:"", message:""})
  

  };
  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="asset/man" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            type="email"
            required
            placeholder="Email"
          />
          <textarea
          required
            value={input.message}
            name="message"
            onChange={handleChange}
            placeholder="Message"
          />
          <button type="submit">Send</button>
  
          {message && input.email === '' ?' ':  <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
