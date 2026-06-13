import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//connect
function Home() {
    let [input, setInput] = useState("");
    let navigate = useNavigate();

    function handleJoin() {
        if (input.trim()) {
            navigate(`/video/${input}`)
        }
    }

    return (
        <div className='container'>
            <div className='header'>
                <h1>Video Connect</h1>
                <p>Simple, secure video conferencing for everyone.</p>
            </div>
            <div className='input-group'>
                <input 
                    type="text" 
                    placeholder='Enter Room ID' 
                    onChange={(e) => setInput(e.target.value)} 
                    value={input} 
                    onKeyPress={(e) => e.key === 'Enter' && handleJoin()}
                />
                <button onClick={handleJoin}>Join Meeting</button>
            </div>
            <div className='footer-text'>
                <p>Start a new meeting or join an existing one.</p>
            </div>
        </div>
    )
}

export default Home
