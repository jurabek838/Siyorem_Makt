import "./Guruhlar.css"
import { MdOutlineSaveAlt } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import brobaqaloq from "../../assets/images/unsplash_mjRwhvqEC0U.png"
import keneshka from "../../assets/images/unsplash_3TLl_97HNJo.png"
import arrubrot from "../../assets/images/unsplash_gutlccGLXKI.png"
import { Link } from "@mui/material";
import Guruhlartwo from "../guruhlartwo/Guruhlartwo";
import { Route } from "react-router-dom";
const Guruhlar = ({ language, setValue, setValueEn }) => {
  if (window.location.pathname === "/guruhlartwo") {
    setValue("guruhlartwo")
  };

  if (window.location.pathname === "/guruh") {
    setValueEn("Groups")
  }
  return (
    <div className="sdfghjkjhgfd">

      <div className="well_container">
        <div>
          <h2 className='Bugungi'>
            {language === "UZ" ? "Yangi guruh qo’shish" : "Add new group"}</h2>
        </div>

        <div className="input_cards" >

          <div>
            <p className="input_cener_text_top" >  {language === "UZ" ? "Guruh yo’nalishi" : "Group direction"} </p>
            <input maxLength={30} className="input_ceter_ucul" type="text" placeholder=" Matematika" />
          </div>

          <div>
            <p className="input_cener_text_top" >  {language === "UZ" ? "Dars kunlari" : "Class days"} </p>
            <input maxLength={13} className="input_ceter_ucul" type="text" placeholder="DU-CHOR-JUMA" />
          </div>
          <div>
            <p className="input_cener_text_top" > {language === "UZ" ? " Dars vaqti" : "Class time"}</p>
            <div className="derdadd">  <input maxLength={10} className="input_ceter_ucul01" type="text" placeholder="14:00-16:00" /><p className="arrov_input_border"><IoIosArrowDown className="arrov_input" /></p></div>
          </div>
        </div>

        <div className="input_cards_two" >

          <div>
            <p className="input_cener_text_top" > {language === "UZ" ? "O’qituvchi" : "Teacher"} </p>
            <input maxLength={30} className="input_ceter_ucul" type="text" placeholder="Ota-onasi ismi" />
          </div>

          <div>
            <p className="input_cener_text_top" > {language === "UZ" ? "O’qituvchi tell nomeri" : "Teacher tell number"} </p>
            <input maxLength={13} className="input_ceter_ucul" type="text" placeholder="++998900113861" />
          </div>

          <div className="new_pupil_child_two">
            <p className="input_cener_text_top"> {language === "UZ" ? "O’qituvchi rasmi" : "Teacher picture"}  (3x4)</p>
            <label class="custom-file-upload">
              Yuklash
              <MdOutlineSaveAlt className="save" />
              <input className="file_input" type="file" required />
            </label>
            <div className="werfghjkl">
              <button className="btn" > Qo’shish</button>
            </div>
          </div>

        </div>
        <div className="uquvchilar_input_cards_astro">
          <h2 className='Bugungi'> {language === "UZ" ? "Mavjud guruhlar" : "Existing groups"} </h2>
          <div className="weril">  <p className="input_search"> <IoSearch className="search_icons" /></p> <input maxLength={30} className="inputgred" type="text" placeholder="Guruh nomini kiriting" /></div>
        </div>


        <div className="wergthyjukilop">



          <div className="guruhlar_cards_left">
            <p className="tugri_chiziq">Matemadika</p>
            <div className="asdfghjk">
              <div>
                <img src={brobaqaloq} alt="" />
              </div>
              <div>
                <p className="text_guruhlar">O’qituvchi: <span className="text_guruhlar_two" >Muxamadaliyev</span> </p>
                <p className="text_guruhlar_two_for">Ibroxim</p>
                <p className="text_guruhlar">Tell raqam: <span className="text_guruhlar_two">+998900113861</span> </p>

              </div>
            </div>

            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars kunlari:</p>
              <p className="dushanba_kun" >DU-CHOR-JUMA</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars vaqti:</p>
              <p className="dushanba_kun1" >14:00-16:00</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">O’quvchilar soni</p>
              <p className="dushanba_kun1" >25ta</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">To’lov qilganlar</p>
              <p className="dushanba_kun1" >10ta</p>
            </div>
          </div>


          <div className="guruhlar_cards_left">
            <p className="tugri_chiziq">Ona tili</p>
            <div className="asdfghjk">
              <div>
                <img className="keneshka" src={keneshka} alt="" />
              </div>
              <div>
                <p className="text_guruhlar">O’qituvchi: <span className="text_guruhlar_two" >Olimjoniva</span> </p>
                <p className="text_guruhlar_two_for1">Nargiza</p>
                <p className="text_guruhlar">Tell raqam: <span className="text_guruhlar_two">+998900113861</span> </p>

              </div>
            </div>

            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars kunlari:</p>
              <p className="dushanba_kun" >SE-PA-SHA</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars vaqti:</p>
              <p className="dushanba_kun1" >11:00-13:00</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">O’quvchilar soni</p>
              <p className="dushanba_kun1" >20ta</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">To’lov qilganlar</p>
              <p className="dushanba_kun1" >10ta</p>
            </div>
          </div>

          <div className="guruhlar_cards_left">
            <p className="tugri_chiziq">Informatika</p>
            <div className="asdfghjk">
              <div>
                <img className="keneshka" src={arrubrot} alt="" />
              </div>
              <div>
                <p className="text_guruhlar">O’qituvchi: <span className="text_guruhlar_two" >Muxamadaliyev</span> </p>
                <p className="text_guruhlar_two_for">Ibroxim</p>
                <p className="text_guruhlar">Tell raqam: <span className="text_guruhlar_two">+998900113861</span> </p>

              </div>
            </div>

            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars kunlari:</p>
              <p className="dushanba_kun" >DU-CHOR-JUMA</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars vaqti:</p>
              <p className="dushanba_kun1" >14:00-16:00</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">O’quvchilar soni</p>
              <p className="dushanba_kun1" >25ta</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">To’lov qilganlar</p>
              <p className="dushanba_kun1" >10ta</p>
            </div>
          </div>
        </div>

        <div className="wergthyjukilop">


          <div className="guruhlar_cards_left">
            <p className="Huquq">HUQUQ</p>
            <div className="asdfghjk">
              <div>
                <img src={brobaqaloq} alt="" />
              </div>
              <div>
                <p className="text_guruhlar">O’qituvchi: <span className="text_guruhlar_two" >Muxamadaliyev</span> </p>
                <p className="text_guruhlar_two_for">Ibroxim</p>
                <p className="text_guruhlar">Tell raqam: <span className="text_guruhlar_two">+998900113861</span> </p>

              </div>
            </div>

            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars kunlari:</p>
              <p className="dushanba_kun" >DU-CHOR-JUMA</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars vaqti:</p>
              <p className="dushanba_kun1" >14:00-16:00</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">O’quvchilar soni</p>
              <p className="dushanba_kun1" >25ta</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">To’lov qilganlar</p>
              <p className="dushanba_kun1" >10ta</p>
            </div>
          </div>

          <div className="guruhlar_cards_left">
            <p className="Huquq">ADABYOT</p>
            <div className="asdfghjk">
              <div>
                <img className="keneshka" src={keneshka} alt="" />
              </div>
              <div>
                <p className="text_guruhlar">O’qituvchi: <span className="text_guruhlar_two" >Olimjoniva</span> </p>
                <p className="text_guruhlar_two_for1">Nargiza</p>
                <p className="text_guruhlar">Tell raqam: <span className="text_guruhlar_two">+998900113861</span> </p>

              </div>
            </div>

            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars kunlari:</p>
              <p className="dushanba_kun" >SE-PA-SHA</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars vaqti:</p>
              <p className="dushanba_kun1" >11:00-13:00</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">O’quvchilar soni</p>
              <p className="dushanba_kun1" >20ta</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">To’lov qilganlar</p>
              <p className="dushanba_kun1" >10ta</p>
            </div>
          </div>

          <div className="guruhlar_cards_left">
            <p className="tugri_chiziq">ENGLISH</p>
            <div className="asdfghjk">
              <div>
                <img className="keneshka" src={arrubrot} alt="" />
              </div>
              <div>
                <p className="text_guruhlar">O’qituvchi: <span className="text_guruhlar_two" >Muxamadaliyev</span> </p>
                <p className="text_guruhlar_two_for">Ibroxim</p>
                <p className="text_guruhlar">Tell raqam: <span className="text_guruhlar_two">+998900113861</span> </p>

              </div>
            </div>

            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars kunlari:</p>
              <p className="dushanba_kun" >DU-CHOR-JUMA</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">Dars vaqti:</p>
              <p className="dushanba_kun1" >14:00-16:00</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">O’quvchilar soni</p>
              <p className="dushanba_kun1" >25ta</p>
            </div>
            <div className="dars_kunlari_dars">
              <p className="dars_kunlari">To’lov qilganlar</p>
              <p className="dushanba_kun1" >10ta</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Guruhlar