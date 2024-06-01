import "./Sidebar.css";
import { BiSolidContact } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
import { RiFolderUserFill } from "react-icons/ri";
import { RiMessage3Fill } from "react-icons/ri";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Sidebar = ({ setSidebar, darkmood,language }) => {
  return (
    <div className={darkmood ? "sidebar sidebar_tun" : "sidebar"}>
      <div className="sidebar_header">

        <div className="sidebar_contact_icons">

          <BiSolidContact />
        </div>

        <h2 className="sidebar_title">CRM PANEL</h2>
        <MdMenuOpen
          onClick={() => setSidebar(false)}
          className="sidebar_active_icons"
        />
      </div>
      <div>
        <Link  to="/xisobot" className="home_icons_card"> <IoHomeOutline className="home_icons" /> <p className="xisobot_text">{language === "UZ" ? "Xisobot" : "Xisobot"}</p></Link>
        <Link to="/uquvchilar" className="home_icons_card_one"> <p className="icons_fredch"><PiGraduationCapFill className="home_icons_one" /></p>  <p className="xisobot_text">{language === "UZ" ? "O’quvchilar" : "Pupils"}</p></Link>
        <Link to="/Guruhlar" className="home_icons_card_one"> <p className="icons_fredch"><FaUsers /></p> <p className="xisobot_text">{language === "UZ" ? "Guruhlar" : "Groups"}</p>  </Link>
        <Link to="/Tulovlar" className="home_icons_card_one"> <p className="icons_fredch"><IoCardOutline /></p><p className="xisobot_text">  <p className="xisobot_text">{language === "UZ" ? "To’lovlar" : "Fees"}</p> </p></Link>
        <Link to="/Davomat" className="home_icons_card_one"> <p className="icons_fredch"><RiFolderUserFill /></p><p className="xisobot_text">{language === "UZ" ? "Davomat" : "Attendance"}</p></Link>
        <Link to="/Murojatlar" className="home_icons_card_one"> <p className="icons_fredch"><RiMessage3Fill /></p><p className="xisobot_text">{language === "UZ" ? "Murojatlar" : "Applications"}</p></Link>
      </div>

    </div>
  );
};

export default Sidebar; 
