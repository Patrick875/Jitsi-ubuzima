import { JitsiMeeting } from "@jitsi/react-sdk";

function JitsiMeetingComponent() {
	const domain = "meet.victor-abz.com"; // Corrected domain format
	return (
		<JitsiMeeting
			domain={domain}
			roomName="MyCustomRoomName"
			configOverwrite={{
				startWithAudioMuted: true,
				startRecording: {
					mode: "file",
					autoRecord: true,
				},
			}}
			interfaceConfigOverwrite={{
				DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
				AUTO_REC: true,
			}}
			getIFrameRef={(iframeRef) => {
				iframeRef.style.height = "600px";
				iframeRef.style.width = "600px";
			}}
			onApiReady={(externalApi) => console.log("Jitsi Meet External API", externalApi)}
			lang="en" // Set the language to English
		/>
	);
}

export default JitsiMeetingComponent;
