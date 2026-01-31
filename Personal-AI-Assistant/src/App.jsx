import React, {useContext} from "react"
import { dataContext } from "./context/UserContext";
function App() {
  let {recognition} = useContext(dataContext);
  // speak("hello bhaisahab!! kya baat ho gyi");
  return (
    <>
      <div className="blur">
        <div className='intro'>Start speaking to your own Virtual Assistant Friday</div>
        <button onClick={()=>recognition.start()}>Start Speaking</button>
      </div>
    </>
  )
}

export default App
