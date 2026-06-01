import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Video() {
    const {roomID} = useParams()
    const myMeeting = async (element) => {
        const appID = Number(import.meta.env.VITE_ZEGO_APP_ID || 0);
        const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET || "";

        if (!appID || !serverSecret) {
            console.error("Missing Zego credentials in environment variables");
            return;
        }

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomID, 
            Date.now().toString(), 
            "Guest User"
        );
        
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        const currentDomain = window.location.origin;
        const generatedShareLink = `${currentDomain}/video/${roomID}`;

        zp.joinRoom({
            container: element,
            sharedLinks: [  
                {
                    name: 'Copy link',
                    url: generatedShareLink,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton: true,
            showUserList: true,
            showAudioVideoSettingsButton: true,
            showTextChat: true,
            showPreJoinView: true,
            branding: {
                logoURL: 'https://cdn-icons-png.flaticon.com/512/3214/3214734.png',
            },
            theme: 'Dark', // Ensuring professional dark theme
        });
    }

    return (
        <div className="video-container" style={{ width: '100vw', height: '100vh', background: '#0f172a' }}>
            <div ref={myMeeting} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default Video