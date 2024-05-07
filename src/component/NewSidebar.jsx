import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUpIcon,
  DashboardIcon,
  LogoutIcon,
  PersonIcon,
  PlusIcon,
} from './parts/icons';

const sidebarLinks = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon className="w-7 h-7" />,
    route: '/home',
  },
  {
    title: 'Transfer',
    icon: <ArrowUpIcon className=" h-7" />,
    route: '/transfers',
  },
  {
    title: 'Top Up',
    icon: <PlusIcon className="w-7 h-7" />,
    route: '/topup',
  },
  {
    title: 'Profile',
    icon: <PersonIcon className="w-7 h-7 text-primary" />,
    route: '/profile',
  },
];

const SidebarLink = ({ title, icon, route }) => {
  const location = useLocation();

  const isActiveRoute = location.pathname.startsWith(route);
  return (
    <li>
      <Link
        to={route}
        className={`flex items-center py-2 text-gray-900  dark:text-white  dark:hover:bg-gray-700 group border-l-4 px-5 ${
          isActiveRoute
            ? 'text-primary border-primary '
            : 'hover:border-primary border-transparent'
        }`}
      >
        {React.cloneElement(icon, {
          color: isActiveRoute ? '#6379F4' : '',
        })}
        <span className="ms-3">{title}</span>
      </Link>
    </li>
  );
};

function NewSidebar() {
  return (
    <aside
      id="default-sidebar"
      className="hidden md:block w-52 md:w-60 h-screen rounded-3xl drop-shadow-xl transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <nav className="flex flex-col justify-between h-full max-h-[780px] py-6 rounded-2xl overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          {sidebarLinks.map((link, i) => (
            <SidebarLink key={i} {...link} />
          ))}
        </ul>
        <a
          href="#"
          className="flex items-center py-2 px-6 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <LogoutIcon className="w-7 h-7" />
          <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
        </a>
      </nav>
    </aside>
  );
}

export default NewSidebar;
