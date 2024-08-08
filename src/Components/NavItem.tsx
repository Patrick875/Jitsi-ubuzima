import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { navitem, sidedimension } from '../Types';
import { getSideBarSize } from '../store';


export const NavItem = ({ page, link, location, children }: navitem) => {
    const { pathname } = useLocation();
    const url = pathname.split('/');
    const sidebarSize: sidedimension = useSelector(getSideBarSize);

    return (
        <NavLink
            to={link}
            className={({ isActive }) =>
                `flex text-sm items-center ${sidebarSize === sidedimension.large ? "" : "justify-center"} gap-3 p-2 capitalize font-medium ${(isActive && url.length === 2) || (isActive && location === url[2])
                    ? `text-white bg-sky-700 rounded-tr-[6px] rounded-bl-[6px]`
                    : '  hover:bg-sky-50 duration-300 ease-in-out delay-50'
                } `
            }
        >
            {children}
            {sidebarSize === sidedimension.large ? page : null}
        </NavLink>
    );
};

export default NavItem