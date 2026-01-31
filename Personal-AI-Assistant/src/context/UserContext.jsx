import React, { createContext } from 'react'
export const dataContext = createContext();
function UserContext({ children }) {

    function speak(text){
        let text_speak =new SpeechSynthesisUtterance(text);
        text_speak.volume = 1;
        text_speak.pitch = 1;
        text_speak.rate = 1;
        text_speak.lang= "HI-GB";
        window.speechSynthesis.speak(text_speak)
    }
    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition = new speechRecognition();
    recognition.onresult=(e)=>{
        let currentIndex = e.resultIndex
        let transcript = e.results[currentIndex][0].transcript
        console.log(e);
        console.log(transcript);
    }

    const value = {
        recognition
    }
    return (
        <>
            <dataContext.Provider value={value}>
                {children}
            </dataContext.Provider>
        </>
    )
}

export default UserContext