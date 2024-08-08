import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { navitem, sidedimension } from '../Types';
import NavItem from './NavItem';
import { changeSize } from '../Redux/sidebarSlice';
import { getSideBarSize } from '../store';
import { Logo } from './Logo';

interface SideBarNavProps {
    navlinks: navitem[];
}

const SideBar = ({ navlinks }: SideBarNavProps) => {
    const dispatch = useDispatch();
    const sidebarsize = useSelector(getSideBarSize);
    const changeSideBarSize = () => {
        if (sidebarsize === sidedimension.large) {
            dispatch(changeSize(sidedimension.small));
        } else {
            dispatch(changeSize(sidedimension.large));
        }
    };
    return (
        <aside className='w-full '>
            <div className="flex flex-col min-h-screen ">
                <Link to='/admin' className='block p-4 basis-1/8'>
                    <Logo />
                </Link>
                <div className=''>
                    {navlinks.map((el) => (
                        <NavItem
                            key={crypto.randomUUID()}
                            page={el.page}
                            link={el.link}
                            defaultColor='sky-700'
                            location={el.location}
                        >
                            {el.icon}
                        </NavItem>
                    ))}
                </div>
            </div>
            <button onClick={changeSideBarSize} className='  absolute right-0 z-20 top-[50vh] '>
                {sidebarsize === sidedimension.large ? (
                    <IoIosArrowDropleftCircle className={`text-sky-700 bg-white rounded-full text-4xl `} />
                ) : (
                    <IoIosArrowDroprightCircle className={`text-sky-700 bg-white rounded-full text-4xl `} />
                )}
            </button>

        </aside>
    );
};

export default SideBar;
