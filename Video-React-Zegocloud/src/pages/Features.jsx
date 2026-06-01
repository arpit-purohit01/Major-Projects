import React from 'react'
import { Link } from 'react-router-dom'

function Features() {
    const features = [
        {
            icon: "🔒",
            title: "Secure by Default",
            description: "All meetings are encrypted to ensure your conversations stay private and secure."
        },
        {
            icon: "📱",
            title: "Cross-Platform",
            description: "Join from any device—desktop, tablet, or mobile—with no loss in quality."
        },
        {
            icon: "🎥",
            title: "HD Video & Audio",
            description: "Crystal clear high-definition video and spatial audio for immersive meetings."
        },
        {
            icon: "👥",
            title: "Large Groups",
            description: "Host meetings with up to 100 participants with low latency performance."
        },
        {
            icon: "💬",
            title: "Real-time Chat",
            description: "Share links, documents, and messages instantly during your video calls."
        },
        {
            icon: "🛠️",
            title: "Advanced Controls",
            description: "Mute participants, manage screen sharing, and control room access easily."
        }
    ];

    return (
        <div className='features-page'>
            <nav className='navbar'>
                <Link to="/" className='nav-logo'>
                    <span>⚡</span> VideoConnect
                </Link>
                <div className='nav-links'>
                    <Link to="/">Home</Link>
                    <Link to="/features">Features</Link>
                </div>
            </nav>

            <div className='features-container'>
                <div className='header' style={{textAlign: 'center', marginBottom: '4rem'}}>
                    <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Platform Features</h1>
                    <p style={{fontSize: '1.25rem', color: 'var(--text-secondary)'}}>Everything you need for seamless collaboration.</p>
                </div>

                <div className='features-grid'>
                    {features.map((feature, index) => (
                        <div key={index} className='feature-card'>
                            <div className='feature-icon'>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p style={{color: 'var(--text-secondary)', marginTop: '0.5rem'}}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
