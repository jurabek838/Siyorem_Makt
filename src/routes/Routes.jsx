import "./Routes.css";
import { Route } from "react-router-dom";
import Header from "../components/header/Header";
import Xisobot from "../routes/xisobot/Xisobot"
import Murojatlar from "./murojatlalar/Murojatlar";
import Uquvchilar from "./uquvchilar/Uquvchilar";
import Guruhlar from "./guruhlar/Guruhlar";
import Tulovlar from "./tulovlar/Tulovlar";
import Davomat from "./davomat/Davomat";
import Guruhlartwo from "./guruhlartwo/Guruhlartwo"
import Matem from "./pages/matem/Matem"
import { useState } from "react";


const Routes = ({ setSidebar, sidebar, setDarkmood, darkmood, setValue, language, setLanguage }) => {
  
  return (
    <div className="routes">
      <Header darkmood={darkmood} setDarkmood={setDarkmood} sidebar={sidebar} setSidebar={setSidebar}  language={language} setLanguage={setLanguage} />
      <Route exact path="/xisobot">
        <Xisobot  language={language} setLanguage={setLanguage} />
      </Route>
      <Route path="/murojatlar">
        <Murojatlar  language={language} setLanguage={setLanguage} />
      </Route>
      <Route path="/uquvchilar">
        <Uquvchilar  language={language} setLanguage={setLanguage} />
      </Route>
      <Route path="/guruhlar">
        <Guruhlar  language={language} setLanguage={setLanguage} />
      </Route>

      <Route path="/tulovlar">
        <Tulovlar  language={language} setLanguage={setLanguage}/>
      </Route>

      <Route path="/guruhlartwo">
        <Guruhlartwo  language={language} setLanguage={setLanguage} setValue={setValue} />
      </Route>
      <Route path="/davomat">
        <Davomat  language={language} setLanguage={setLanguage}/>
      </Route>
      <Route path="/matem">
        <Matem  language={language} setLanguage={setLanguage}/>
      </Route>
     
    </div>
  );
};

export default Routes;
