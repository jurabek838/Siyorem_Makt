import "./App.css";
import Routes from "./routes/Routes";
import Sidebar from "./routes/sidebar/Sidebar";

import { useState } from "react";
function App() {
  const [sidebar, setSidebar] = useState(true);
  const [darkmood, setDarkmood] = useState(false);
  const [language, setLanguage] = useState("UZ");


  return (
    <div className={darkmood ? "tun" : "kun"}>
      <div className="container">
    
        {sidebar ? (
          <Sidebar darkmood={darkmood} setSidebar={setSidebar} language={language} setLanguage={setLanguage} />
        ) : null}
        <Routes
      
          darkmood={darkmood}
          setDarkmood={setDarkmood}
          sidebar={sidebar}
          setSidebar={setSidebar}
          language={language} setLanguage={setLanguage}
        />
      </div>
    </div>
  );
}

export default App;
