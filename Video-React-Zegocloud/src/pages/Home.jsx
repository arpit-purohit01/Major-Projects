import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Home() {
    let [input, setInput] = useState("");
    let [history, setHistory] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('meetingHistory') || '[]');
        setHistory(savedHistory.slice(0, 3)); // Show last 3 meetings
    }, []);

    function handleJoin(roomId = input) {
        if (roomId.trim()) {
            // Save to history
            const updatedHistory = [roomId, ...history.filter(id => id !== roomId)].slice(0, 5);
            localStorage.setItem('meetingHistory', JSON.stringify(updatedHistory));
            
            navigate(`/video/${roomId}`)
        }
    }

    return (
        <div className='home-page'>
            <nav className='navbar'>
                <Link to="/" className='nav-logo'>
                    <span>⚡</span> VideoConnect
                </Link>
                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/features">Features</Link>
                    <a href="https://github.com" target="_blank" rel="noreferrer">Documentation</a>
                </div>
            </nav>

            <main className='main-wrapper'>
                <div className='hero-section'>
                    <div className='hero-content'>
                        <h1>Premium video meetings. Now free for everyone.</h1>
                        <p>We re-engineered the service we built for secure business meetings, VideoConnect, to make it free and available for all.</p>
                        <div className='hero-stats'>
                            {/* Visual decorative elements can go here */}
                        </div>
                    </div>

                    <div className='container'>
                        <div className='header'>
                            <h2>Join or Create</h2>
                            <p>Enter a code or link to get started</p>
                        </div>
                        <div className='input-group'>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input 
                                    type="text" 
                                    placeholder='Enter a room code' 
                                    onChange={(e) => setInput(e.target.value)} 
                                    value={input} 
                                    onKeyPress={(e) => e.key === 'Enter' && handleJoin()}
                                />
                                <button 
                                    onClick={() => setInput(Math.random().toString(36).substring(2, 8))}
                                    style={{ width: 'auto', padding: '0 1rem', background: 'var(--bg-dark)', border: '1px solid var(--border-color)' }}
                                    title="Generate Random Code"
                                >
                                    🎲
                                </button>
                            </div>
                            <button onClick={() => handleJoin()}>Start Meeting</button>
                        </div>

                        {history.length > 0 && (
                            <div className='history-section'>
                                <h3>Recent Meetings</h3>
                                <div className='history-list'>
                                    {history.map((id, index) => (
                                        <div key={index} className='history-item' onClick={() => handleJoin(id)}>
                                            <span>Room: {id}</span>
                                            <span>Join →</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home