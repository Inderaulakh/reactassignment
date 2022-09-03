import React from 'react';
import * as FaIcons from 'react-icons/fa';

import * as IoIcons from 'react-icons/io';
import * as Profile from "react-icons/cg";
export const SidebarData = [
  {
    title: 'Profile',
    path: '/',
    icon: <Profile.CgUser />,
    cName: 'nav-text'
  },
  {
    title: 'Run ',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Tech',
    path: '/',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Lead',
    path: '/',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/',
    cName: 'nav-text'
  
  },
  {
    title: 'Terms of Use',
    path: '/',
    cName: 'nav-text'
  },
  {
    title: 'Privacy',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];