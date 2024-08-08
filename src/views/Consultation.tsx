import { useFrappeAuth } from "frappe-react-sdk";
import JitsiMeetingComponent from "../Components/JitsiMeetingComponent"
import { useEffect } from "react";

function Consultation() {
    const { currentUser } = useFrappeAuth();
    useEffect(() => {
        setTimeout(() => {
            if (!currentUser) {
                window.location.href = new URL('https://ubuzima.org', window.location.origin).toString()
            }
        }, 5000)
    })
    return (
        <div className='min-h-[100vh] flex justify-center items-center'>
            {currentUser && <JitsiMeetingComponent />}
            {/* <JitsiMeetingComponent /> */}
        </div>
    )
}

export default Consultation