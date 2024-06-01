import "./Main.css";
import { Route } from "react-router-dom";
import icon_fantik from "../../assets/images/icon.png"

const Main = ({  language }) => {

  return <div>
    <>
      <div className="container002">
        <div className="ddfgnhn">
          <div className="main_card_display">
            <div className="boxing_card_one">
              <div className="card_flex">
                <div className="vbertyui">
                  <p className="boxing_card_one_text_rayit">

                    {language === "UZ" ? "Jami o’quvchilar soni:" : "Total enrollment"}

                  </p>
                  <p className="boxing_card_one_sonni">255 ta</p>
                </div>
                <img className="darja" src={icon_fantik} alt="" />
              </div>
            </div>


            <div className="boxing_card_one">
              <div className="card_flex">
                <div>
                  <p className="boxing_card_one_text_rayit">

                    {language === "UZ" ? " O’qituvchilar soni:" : "Number of teachers"}

                  </p>
                  <p className="boxing_card_one_sonni">10 ta</p>
                </div>
                <img src={icon_fantik} alt="" />
              </div>
            </div>


          </div>


          <div>


          </div>


          <div className="">

            <div className="main_card_display">

              <div className="boxing_card_one">
                <div className="card_flex">
                  <div>
                    <p className="boxing_card_one_text_rayit">
                      {language === "UZ" ? "Shu oy tark etganlar" : "Number of teachers"} </p>
                    <p className="boxing_card_one_sonni">60 ta</p>
                  </div>
                  <img className="darja" src={icon_fantik} alt="" />

                </div>
              </div>


              <div className="boxing_card_one">
                <div className="card_flex">
                  <div>

                    <p className="boxing_card_one_text_rayit">   {language === "UZ" ? "Jami guruhlar soni" : "Total number of "}</p>
                    <p className="boxing_card_one_sonni">26 ta</p>
                  </div>
                  <img className="darja" src={icon_fantik} alt="" />

                </div>
              </div>
            </div>
          </div>


        </div>


        <div>


        </div>

      </div>



    </>
  </div>;
};


export default Main;
