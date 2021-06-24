import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='mobile:flex mobile:flex-col laptop:block mx-auto bg-gray-300 py-5'>
      <NavLink to='/' className='p-10'>
        Home
      </NavLink>
      <NavLink to='/films' className='p-10'>
        Films
      </NavLink>
      <NavLink to='/register' className='p-10'>
        Register
      </NavLink>
    </nav>
  );
};

export default Header;
