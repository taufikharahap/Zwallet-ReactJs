import React from 'react';
import { Link } from 'react-router-dom';
import dashboardIcon from '../assets/icon-dashboard.png';
import logoutIcon from '../assets/icon-logout.png';
import profileIcon from '../assets/icon-profile.png';
import topupIcon from '../assets/icon-topup.png';
import transferIcon from '../assets/icon-transfer.png';

function Sidebar() {
  return (
    <aside
      id="default-sidebar"
      className="hidden md:block w-52 md:w-[270px] min-h-[90vh] rounded-2xl transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <nav className="flex flex-col justify-between min-h-[90vh] h-full px-5 py-6 rounded-2xl overflow-y-auto  bg-white">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="/home"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img src={dashboardIcon} alt="" />
              <span className="ms-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img src={transferIcon} alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap">Transfer</span>
            </a>
          </li>
          <li>
            <Link
              to={'/topup'}
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img src={topupIcon} alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap">Top Up</span>
            </Link>
          </li>
          <li>
            <Link
              to={'/profile'}
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img src={profileIcon} alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
            </Link>
          </li>
        </ul>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <img src={logoutIcon} alt="" />
          <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
        </a>
      </nav>
    </aside>
  );
}
export default Sidebar;
