import "./topbar.scss";
// import EmailIcon from '@mui/icons-material/Email';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { Link } from "@mui/material";
import { useState } from "react";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


let name ='< 𝓗𝓮𝓷𝓸𝓴 />'
export default function Topbar({ menuOpen, setMenuOpen ,setDarkMode,darkMode }) {
  const [copySuccess, setCopySuccess] = useState('');

  // eslint-disable-next-line
  const [bg,setBG] =useState('')

// your function to copy here
// eslint-disable-next-line
  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
      if (copySuccess === 'Copied!') {
        alert('email')
        setBG('success')
      }else {
        setBG('') 
      }
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          {name}
          </a>
         
  
        </div>
        <div className={`${darkMode ? 'nav' : 'nav-dark'}`}>
        <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
 
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        
      </ul>
        </div>
        <button onClick={()=>setDarkMode(!darkMode)}>
            {
              darkMode ?<ModeNightIcon /> : <LightModeOutlinedIcon /> 
            }
          </button>
        
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`${darkMode ? 'line' : 'line-dark'}`}></span>
            <span className={`${darkMode ? 'line' : 'line-dark'}`}></span>
            <span className={`${darkMode ? 'line' : 'line-dark'}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
