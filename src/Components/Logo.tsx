import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import { getSideBarSize } from '../store';
import { sidedimension } from '../Types';
import { LiaHospitalAltSolid } from "react-icons/lia";

export const Logo = () => {
    const sidebarsize = useSelector(getSideBarSize);

    return (
        <div className='flex items-center gap-3'>
            {sidebarsize === sidedimension.small ?
                <LiaHospitalAltSolid />
                :
                <>
                    <img alt='logo' className='block w-24 h-24' src={logo} />
                    <p className={` ${sidebarsize === sidedimension.small ? "hidden" : ""} text-bold font-medium text-base`}>UBUZIMA PORTAL</p>

                </>
            }

        </div>
    );
};
