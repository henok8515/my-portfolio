import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import {
  GitHub,
  LinkedIn,
  Phone,
  Share,
  Mail,
  Telegram,
  ArrowUpward,
} from "@mui/icons-material";
import { Link } from "@mui/material";
export default function Contact({ darkMode }) {
  const [message, setMessage] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    email: "",
    name: "",
    message: "",
  });
  const form = useRef();
  let data = [
    // {
    //   name: "Location",
    //   value: "Addis Abeba Ethiopa",
    //   icon: <Room className="icon" />,
    // },
    {
      value: "henokegezew44@gmail.com",
      icon: <Mail className="icon" />,
    },
    {
      value: "0943851525",
      icon: <Phone className="icon" />,
    },
    {
      icon: <Share className="icon" />,
      value: [
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/henok-egezew-0a460b208/"
        >
          <LinkedIn target="_blank" className="logo" />
        </a>,
        <a rel="noreferrer" target="_blank" href="https://github.com/henok8515">
          <GitHub className="logo" />
        </a>,
        <a rel="noreferrer" target="_blank" href="https://t.me/Matosxo">
          <Telegram className="logo" />
        </a>,
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ ...input, email: "", message: "", name: "" });
    emailjs
      .sendForm(
        "service_fsumtqp",
        "template_rp7bh5n",
        form.current,
        "bIAsAM7oU7p4dGHia",
        {
          reply_to: `${input.email}`,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      );
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  setTimeout(() => {
    setMessage(false);
  }, 10000);
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <div className={`${darkMode ? "container" : "container-dark"}`}>
        <div className="left">
          {data.map((d) => (
            <div className="content" key={d.name}>
              <div className="img"> {d.icon}</div>
              <div className="names">
                <p> {d.value}</p>
              </div>
            </div>
          ))}
        </div>
        <form className="right" ref={form} onSubmit={handleSubmit}>
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
            placeholder="message"
          />
          <div>
            <button>send message</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
            {error && <p>{error}</p>}
          </div>
        </form>
      </div>
      <Link className="link" href="#intro">
        <ArrowUpward />
      </Link>
    </div>
  );
}
