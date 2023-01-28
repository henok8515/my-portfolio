import { useState , useRef} from "react";
import "./contact.scss"
import emailjs from '@emailjs/browser';

export default function Contact({darkMode}) {
  const [message, setMessage] = useState(false);
  const [error, setError]=useState('') 
  const [input, setInput] = useState({
    email: "",
    name: "",
    message: "",
  });
  const form = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({...input, email:"", message:"",name:''})
    emailjs.sendForm('service_fsumtqp', 'template_rp7bh5n', form.current, 'bIAsAM7oU7p4dGHia',{
      reply_to: `${input.email}`,
    })
    .then((result) => {
        console.log(result.text);
    setMessage(true);
    }, (error) => {
        console.log(error.text);
        setError(error.text)
    });
  };
  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value });
  };
  setTimeout(() =>{
    setMessage(false)
  },10000)
  return (
    <div className= 'contact' id="contact">
      <div className={darkMode ? 'right-dark' : 'right'}>
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={handleSubmit}>
          
        <input
            name="name"
            value={input.name}
            onChange={handleChange}
            type="text"
            required
            placeholder="name"
          />
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
  
          {message &&  <span>Thanks, I'll reply ASAP :)</span>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
