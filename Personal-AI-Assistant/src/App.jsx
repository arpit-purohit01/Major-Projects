import React, { useContext } from "react";
import { dataContext } from "./context/UserContext";
function App() {
  let { recognition, speaking, setSpeaking, recognitionText, setRecognitionText } = useContext(dataContext);
  // speak("hello bhaisahab!! kya baat ho gyi");
  return (
    <>
      <div className="blur">
        <span className='intro'>Start speaking to your own Virtual Assistant Friday</span>
        {!speaking ? <button onClick={() => {
          setRecognitionText("listening...");setSpeaking(true)
          recognition.start()
        }}>Start Speaking</button> : <p id="listening">{recognitionText}</p>}


      </div>
    </>
  )
}

export default App
