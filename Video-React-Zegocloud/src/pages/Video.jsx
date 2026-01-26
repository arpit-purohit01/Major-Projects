import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function Video() {
    const {roomID} = useParams()
    const myMeeting = async (element) => {
        const appID = 29415006;
        const serverSecret = "d0ef68905d9dcd5b2e54c4f4c0bfd4b8";
        // const kitToken = ZegoUIKitPrebuilt.generate
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Arpit-Purohit");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [  
                {
                    name: 'Copy link',
                    url: `http://localhost:5173/video/${roomID}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    }
    return (
        <>
            <div ref={myMeeting} />
        </>
    )
}

export default Video