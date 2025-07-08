import logo from "../assets/AtharvLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";


const navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-1 w-16" src={logo} alt="logo" />

        </div>
        <div className="m-6 flex gap-5 px-1 text-2xl text-white">
            <a href="https://github.com/atharvx09/"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/atharv-karole/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/atharvkarole_/"><FaInstagram /></a>
            <a href="https://x.com/KaroleAtharv"><FaSquareXTwitter/></a>
            <a href="https://docs.google.com/document/d/1l6coAWA6FmUh65k-Lp3P73F-G0sL-PD6qxea-Q5Yk3U/edit?usp=sharing"><IoDocumentTextOutline/></a>
            <a href="tel:+917024343213``"><IoCallOutline/></a>
            
            
        </div>
    </nav>
  )
}

export default navbar