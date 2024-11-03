
import "./Guruhlartwo.css"

import arrubrot from "../../assets/images/unsplash_gutlccGLXKI.png"
const Guruhlartwo = ({ language }) => {
  return (
    <div className="eewr4tr55554">



      <div>
        <h2 className='Bugungi'>
          {language === "UZ" ? "Informatika guruhi ro’yhati" : "Add new group"}</h2>
      </div>

      <div className="dfrtyuiuytrf"  >
        <div className="gang_flelter">
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
          <div className="sdefrghjklkjhg">
            <p className="shuoytulovlar"> {language === "UZ" ? "Shu oy bo’yicha to’lov qilmaganlar" : "Those who did not pay this month"}  </p>
            <p className="muxammadaliyev" >1.Muxamadaliyev Ibroxim</p>
            <p className="muxammadaliyev" >2.Muxamadaliyev Ibroxim</p>
            <p className="muxammadaliyev" >3.Muxamadaliyev Ibroxim</p>
          </div>
        </div>


        <div>
          <table className="trecalof" >
            <th ><div className="sdfghj"> <div className="hretm"><p>№ </p><p> {language === "UZ" ? "O’quvchi ismi" : "Reader's name"} </p> </div><p className="dfgthyjkl">  {language === "UZ" ? "To’lov" : "tulovs"}  </p></div></th>
          </table>
          <table className="trecalof_two" >
            <th ><div className="drtyuiopoiu" ><p>1</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
          <table className="trecalof_two" >
            <th ><div className="drtyuiopoiu" ><p>2</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
          <table className="trecalof_two" >
            <th ><div className="drtyuiopoiu" ><p>3</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
          <table className="trecalof_two" >
            <th ><div className="drtyuiopoiu" ><p>4</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
          <table className="trecalof_two" >
            <th ><div className="drtyuiopoiu" ><p>5</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
          <table className="trecalof_two" >
            <th ><div className="drtyuiopoiu" ><p>6</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
          <table className="trecalof_two" >
            <th ><div className="drtyuiopoiu" ><p>7</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
          <table className="trecalof_two" >
            <th ><div className="drtyuiopoiu" ><p>8</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
          <table className="trecalof_two" >
            <th ><div className="drtyuiopoiu" ><p>9</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
          <table className="trecalof_two" >
            <th ><div className="ganghjdg" ><p>10</p><p>Jurabeek Nematov</p> <p>  <label className="checkbox-wrapper"> <input type="checkbox" className="checkbox_element" /> </label> </p> </div></th>

          </table>
        </div>
      </div>
    </div>
  )
}

export default Guruhlartwo; 