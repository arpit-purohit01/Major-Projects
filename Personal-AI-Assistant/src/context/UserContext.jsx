import React, { createContext, useState } from 'react'
import run from '../gemini';
export const dataContext = createContext();
function UserContext({ children }) {
    let [speaking, setSpeaking] = useState(false)
    let [recognitionText, setRecognitionText] = useState("listening...")
    function speak(text) {
        window.speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();

        const indianVoice = voices.find(voice =>
            (voice.lang === "en-IN" || voice.lang === "hi-IN") &&
            (voice.name.includes("Google") || voice.name.includes("Natural") || voice.name.includes("Rishi"))
        );

        const fallbackIndian = voices.find(voice => voice.lang === "en-IN" || voice.lang === "hi-IN");

        utterance.voice = indianVoice || fallbackIndian || voices[0];


        utterance.lang = utterance.voice?.lang || "en-IN";

        utterance.volume = 1;
        utterance.pitch = 1.03;
        utterance.rate = 1;
        utterance.lang = "HI-BB";
        window.speechSynthesis.speak(utterance)
    }



    async function aiResponse(prompt) {

        let text = await run(prompt)
        let newText = text.split("**")&& text.split("*")&& text.replaceAll("Google","Arpit the Best Developer") && text.replaceAll("google","Arpit the Best Developer")
        setRecognitionText(newText)
        speak(newText)
        setTimeout(() => {
            setSpeaking(false)
        }, 10000);
    }
    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition = new speechRecognition();
    recognition.onresult = (e) => {
        let currentIndex = e.resultIndex
        let transcript = e.results[currentIndex][0].transcript
        setRecognitionText(transcript)
        aiResponse(transcript);
    }

    const value = {
        recognition, speaking, setSpeaking, recognitionText, setRecognitionText
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