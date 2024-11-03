import "./Header.css";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";



const Header = ({ setSidebar, sidebar, setDarkmood, darkmood ,value, language, setLanguage }) => {
  


  function kunFunc() {
    localStorage.setItem("mood", "tun");
    setDarkmood(true);
  }
  function tunFunc() {
    localStorage.setItem("mood", "kun");
    setDarkmood(false);
  }
  return (
    <header className="header">
      <div className="header_left_content">
        {!sidebar ? (
          <IoMenu
            className="header_menu_icons"
            onClick={() => setSidebar(true)}
          />
        ) : null}
        <h2 className="header_title">
          {language === "UZ" ? "Xisobot" : "Education CRM"}
        </h2>
      </div>
      <p className="header_data">20.11.2024</p>
      <div className="header_right">
        <div className="header_right_content">
          <p className="header_language_value">
            
            <IoIosArrowDown className="header_language_arrow_icons" />
          </p>
          <div className="header_select_value">
            <p
              onClick={() => setLanguage("UZ")}
              className="header_language_select_text"
            >
              UZ
            </p>
            <p
              onClick={() => setLanguage("ENG")}
              className="header_language_select_text"
            >
              ENG
            </p>
          </div>
        </div>
        <div className="dark_mood">
          {darkmood ? (
            <FaRegMoon onClick={() => tunFunc()} />
          ) : (
            <IoSunny onClick={() => kunFunc()} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
