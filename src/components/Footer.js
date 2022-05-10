import "../css/Footer.css";
import {BsLinkedin, BsFacebook} from "react-icons/bs";
import {RiInstagramFill} from "react-icons/ri"
const Footer = () => {
    return (
        <div className="footer_main">
            <BsLinkedin />
            <RiInstagramFill />
            <BsFacebook />
        </div>
    )
};

export default Footer;