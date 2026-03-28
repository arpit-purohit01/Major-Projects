import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function Video() {
    const {roomID} = useParams()
    const myMeeting = async (element) => {
        const appID = 1960998235;
        const serverSecret = "677f05d4b7e8fbf94492c039386b4bdd";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Arpit-Purohit");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        const currentDomain = window.location.origin;
        const generatedShareLink = `${currentDomain}/room/${roomID}`;

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
        });
    }
    return (
        <>
            <div ref={myMeeting} />
        </>
    )
}

export default Video