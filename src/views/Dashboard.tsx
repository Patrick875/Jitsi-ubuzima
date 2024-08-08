import { IoIosAddCircleOutline } from "react-icons/io";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
function Dashboard() {
    // const userRole='ADMIN'
    let userRole = 'DOCTOR'
    let userName = 'Luke'
    // const userRole='NURSE'
    return (
        <div className='min-h-[100vh] w-full pt-10 bg-[#fbfbfb] px-4'>
            <div className="flex justify-between mb-3">
                <div>
                    <p className='text-xl font-bold'>Hello {userRole === 'ADMIN' ? "" : userRole === 'DOCTOR' ? 'Dr ' : ''}{userName} </p>
                    <p className='font-bold text-gray-300 '>Have a great and productive day</p>
                </div>
                <div className="bg-white  p-2 rounded-[8px]">
                    <button className='p-2 px-3 rounded-[6px] bg-gray-100'>Weekly</button>
                    <button className='p-2 px-3 rounded-[6px]'>Monthly</button>
                    <button className='p-2 px-3 rounded-[6px]'>All time</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3'>

                <div className="p-2 rounded-[8px] min-h-[10vh]">
                    <div >
                        <div className="inline-block p-3 bg-white rounded-full">
                            <LuCalendarCheck2 className='text-lg' />
                        </div>
                    </div>
                    <p className='text-4xl font-bold '>4</p>
                    <p className=''>patients assessed</p>
                    {/* allow the button only to nurse */}
                    <Link to='patient-assessment' className='flex items-center gap-2 px-3 py-2 mt-3 text-white bg-black rounded-full'>
                        <IoIosAddCircleOutline className='text-2xl' />
                        <p>Start New Assement</p>
                    </Link>
                </div>
                <div className='p-2 rounded-[8px] min-h-[10vh] bg-sky-600'>
                    <div >
                        <div className="inline-block p-3 bg-white rounded-full">
                            <MdOutlineEdit className='text-lg' />
                        </div>
                    </div>
                    <div className='text-center text-white'>
                        <p className='text-lg '><span className='text-4xl font-bold'>3</span> consultations</p>
                        <p className='my-2 text-sm font-bold'>Scheduled Today</p>
                    </div>
                    <div className='p-2 bg-white rounded-[8px]'>
                        <div className="flex justify-between py-2 ">
                            <p>Annet / Dr Luke </p>
                            <p>2:00 PM</p>
                        </div>
                        <div className="flex justify-between py-2 ">
                            <p>Annet / Dr Luke </p>
                            <p>2:00 PM</p>
                        </div>
                        <div className="flex justify-between py-2 ">
                            <p>Annet / Dr Luke </p>
                            <p>2:00 PM</p>
                        </div>

                    </div>


                </div>
                <div className='p-2 rounded-[8px] min-h-[10vh] bg-green-600'>
                    <div >
                        <div className="inline-block p-3 bg-white rounded-full">
                            <MdOutlineEdit className='text-lg' />
                        </div>
                    </div>
                    <div className='text-center text-white'>
                        <p className='text-lg '><span className='text-4xl font-bold'>3</span> Follow up sessions</p>
                        <p className='my-2 text-sm font-bold'>Scheduled Today</p>
                    </div>
                    <div className='p-2 bg-white rounded-[8px]'>
                        <div className="flex justify-between py-2 ">
                            <p>Annet / 0780000000 </p>
                            <p>2:00 PM</p>
                        </div>
                        <div className="flex justify-between py-2 ">
                            <p>Annet / 0780000000 </p>
                            <p>2:00 PM</p>
                        </div>
                        <div className="flex justify-between py-2 ">
                            <p>Annet / 0780000000 </p>
                            <p>2:00 PM</p>
                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default Dashboard