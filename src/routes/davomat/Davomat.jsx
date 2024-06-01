import "./Davomat.css"
import { IoSearch } from "react-icons/io5";
import { MdOutlineSaveAlt } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import brobaqaloq from "../../assets/images/unsplash_mjRwhvqEC0U.png"
import keneshka from "../../assets/images/unsplash_3TLl_97HNJo.png"
import arrubrot from "../../assets/images/unsplash_gutlccGLXKI.png"
import { Link } from "@mui/material";

const Davomat = ({language}) => {
  return (
    <div className="sdfghjynt" >s


<div className="davomat_card_init">
          <h2 className='davomat_header_top_text'> {language === "UZ" ? "Davomat olinadigan guruhni tanlang" : "Select the groupbe taken"} </h2>
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
  )
}

export default Davomat