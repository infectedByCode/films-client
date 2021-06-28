import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const updateView = () => {
      const isMobile = window.innerWidth < 640;
      if (isMobile) setIsMobile(true);
      else setIsMobile(false);
    };

    window.addEventListener('resize', updateView);

    return () => window.removeEventListener('resize', updateView);
  }, []);

  const toggleMenu = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  return (
    <nav className='mobile:flex mobile:flex-col laptop:block mx-auto bg-gray-300 py-5'>
      <a
        className='p-5 absolute top-0 tablet:w-60 text-center -left-96 focus:left-0 transition-all focus:bg-yellow-300 focus:ring-2 mobile:w-screen'
        href='#mainContent'
      >
        Skip to Content
      </a>
      {isMobile && (
        <button onClick={toggleMenu} className='p-5 -m-5'>
          Menu
        </button>
      )}
      {((isMobile && showMenu) || !isMobile) && (
        <>
          <NavLink
            to='/'
            className='p-5 mt-10 mobile:w-screen mobile:text-center'
          >
            Home
          </NavLink>
          <NavLink
            to='/films'
            className='p-5 mobile:w-screen mobile:text-center'
          >
            Films
          </NavLink>
          <NavLink
            to='/register'
            className='p-5 mobile:w-screen mobile:text-center  '
          >
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Header;
