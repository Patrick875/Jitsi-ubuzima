import { Navigate, Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { adminNavs, DoctorNavs, nurseNavs } from '../constants';
import { navitem, sidedimension, user } from '../Types';
import { getSideBarSize, getUser } from '../store';

const LogedInWrapper = () => {
    const user = useSelector(getUser);
    const sidebarsize = useSelector(getSideBarSize);
    const role: string = 'NURSE';

    const sideNavs = (user: user): navitem[] => {
        if (user) {
            if (user.role === 'ADMIN') {
                return adminNavs;
            } else if (user.role === 'DOCTOR') {
                return DoctorNavs;
            } else if (user.role === 'NURSE') {
                return nurseNavs;
            }
        }
        else {
            return nurseNavs;
        }
        return []
    };

    return (
        <div className='flex overflow-x-hidden bg-primary-backg'>
            <motion.div
                initial={{ width: sidebarsize === sidedimension.small ? '3vw' : '16vw' }}
                animate={{ width: sidebarsize === sidedimension.small ? '3vw' : '16vw' }}
                transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] }}
                className={`fixed bg-sidebar-bg   `}>
                {<SideBar navlinks={sideNavs(user)} />}
            </motion.div>
            <div

                className={` ${sidebarsize === sidedimension.small ? "ml-[3vw] w-[97vw] overflow-x-hidden" : "ml-[16vw] w-[84vw]"} flex-1`}>
                <div className={`px-4 w-full md:px-6 py-1 min-h-[90vh]`}>
                    {/* <div style={{ zIndex: 10 }} className='sticky top-0 w-full mb-3 '>
                            <TopBar />
                        </div> */}
                    <Outlet context={{ userRole: role }} />
                </div>
            </div>
        </div>
    );
};

export default LogedInWrapper;
