import Main from "../../components/main/Main";
import Status from "../../components/status/Status";

const Xisobot = ({ language, setLanguage, }) => {



  return (
    <>
      <Main language={language} setLanguage={setLanguage} />
      <Status />

    </>
  )
}

// darkmood={darkmood} setDarkmood={setDarkmood} main={main}

export default Xisobot;