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
          {/* <div className="itemContainer">
            <span>+251 943851525</span>
          </div>
          <div className="itemContainer">
          <div><EmailIcon color={bg} onClick={() => copyToClipBoard('henokegezew44@gmail.com')} /> </div>
           
          </div>
          <div className="itemContainer">
          <Link href="https://github.com/henok8515"  target="_blank"  ><GitHubIcon /></Link>
          </div> */}
          <button onClick={()=>setDarkMode(!darkMode)}>
            {
              darkMode ?<ModeNightIcon /> : <LightModeOutlinedIcon /> 
            }
          </button>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
