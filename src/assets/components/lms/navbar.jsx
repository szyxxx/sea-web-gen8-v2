import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdLibraryBooks, MdAccountBox } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { Link as Navigate } from 'react-router-dom'

const NavbarItems = (props) => {
  const getCurrentPage = () => {
    const path = window.location.pathname.toLowerCase();
    console.log(path);

    let color = 'black';
    let bg = '';

    if (path.includes('/dashboard') && props.icon === 'dashboard') {
      console.log('dashboard case');
      color = 'white';
      bg = 'bg-sky-400';
    } else if (path.includes('/courses') && props.icon === 'courses') {
      console.log('courses case');
      color = 'white';
      bg = 'bg-sky-400';
    } else if (path.includes('/account') && props.icon === 'account') {
      console.log('account case');
      color = 'white';
      bg = 'bg-sky-400';
    } else {
      console.log('Default case');
    }

    return { color, bg };
  };

  const { color, bg } = getCurrentPage();

  const getIcon = () => {
    const iconStyle = {
      color,
      backgroundColor: bg === 'black' ? 'rgb(56, 189, 248)' : 'transparent',
    };

    switch (props.icon) {
      case 'dashboard':
        return <GoHomeFill style={iconStyle} />;
      case 'courses':
        return <MdLibraryBooks style={iconStyle} />;
      case 'account':
        return <MdAccountBox style={iconStyle} />;
      case 'logout':
        return <IoLogOut style={{ ...iconStyle, rotate: '180deg' }} />;
      default:
        return null;
    }
  };

  return (
    <li className={`navbar-items flex justify-center text-center text-2xl my-10 rounded-lg px-4 py-4 ${bg}`}>
      <a>{getIcon()}</a>
    </li>
  );
};

export const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center h-screen w-24 drop-shadow-lg rounded-lg bg-white py-10 fixed">
      <img src='src\assets\SEA-logo.png' className='px-5 my-8'/>
      <div>
        <ul>
        <Navigate to="/dashboard"><NavbarItems icon="dashboard" /></Navigate>
        <Navigate to="/courses"><NavbarItems icon="courses" /></Navigate>
        <Navigate to="/account"><NavbarItems icon="account" /></Navigate>
        </ul>
      </div>
      <Navigate to="/login"><NavbarItems icon="logout" color="black"></NavbarItems></Navigate>
    </aside>
  )
}