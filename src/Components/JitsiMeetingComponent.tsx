import { JitsiMeeting } from "@jitsi/react-sdk";
import { useEffect, useState } from "react";

function JitsiMeetingComponent() {
	const domain = "meet.victor-abz.com";
	const [dimensions, setDimensions] = useState<{ height: string, width: string }>({ height: '600px', width: '800px' });
	const [isReady, setIsReady] = useState(false);
	useEffect(() => {
		setDimensions({
			height: window.innerHeight + 'px',
			width: window.innerWidth + 'px'
		})

		const handleResize = () => {
			setDimensions({
				height: window.innerHeight + 'px',
				width: window.innerWidth + 'px'
			})
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [dimensions])
	if (!isReady) return <div className='min-h-[100vh] w-full flex justify-center items-center'><p className='text-xl font-bold'>Loading ....</p></div>
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
				DEFAULT_LOGO_URL: '../assets/logo.png',
				AUTO_REC: true,
			}}
			getIFrameRef={(iframeRef) => {
				iframeRef.style.height = dimensions.height;
				iframeRef.style.width = dimensions.width;
			}}
			onApiReady={() => {
				setIsReady(true)
			}}
			onReadyToClose={() => {
				window.history.go(-1);
			}}
			lang="en"
		/>
	);
}

export default JitsiMeetingComponent;
