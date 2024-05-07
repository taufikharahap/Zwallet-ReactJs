import React from "react";
import dashboardIcon from "../assets/icon-dashboard.png";
import transferIcon from "../assets/icon-transfer.png";
import topupIcon from "../assets/icon-topup.png";
import profileIcon from "../assets/icon-profile.png";
import logoutIcon from "../assets/icon-logout.png";

function Header() {
  return (
    <aside
      id="default-sidebar"
      className="hidden md:block w-52 md:w-60 min-h-[90vh] rounded-2xl transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <nav className="flex flex-col justify-between min-h-[90vh] h-full px-5 py-6 rounded-2xl overflow-y-auto  bg-white">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
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
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img src={topupIcon} alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap">Top Up</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img src={profileIcon} alt="" />
              <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
            </a>
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
export default Header;
