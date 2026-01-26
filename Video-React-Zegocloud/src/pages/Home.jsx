import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let [input, setInput] = useState("");
    let navigate = useNavigate();
    function handleJoin() {
        navigate(`/video/${input}`)
    }
    return (
        <div id='home'>
            <input type="text" placeholder='Enter Room ID' onChange={(e) => setInput(e.target.value)} value={input} />
            <button onClick={handleJoin}>Join Now</button>
        </div>
    )
}

export default Home