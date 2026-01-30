import React, {useContext} from "react"
import { dataContext } from "./context/UserContext.jsx";
function App() {
  let {speak} = useContext(dataContext);
  speak("hello bhaisahab!! kya baat ho gyi");
  return (
    <>
      <div className="blur">
        <div className='intro'>Start speaking to your own Virtual Assistant Friday</div>
        <button>Start Speaking</button>
      </div>
    </>
  )
}

export default App
