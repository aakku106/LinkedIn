import { NavLink } from "react-router-dom"
import "../assets/styles/navBar.css"

export default function Navbar() {
  return (
    <div>
      <nav
        className="navBar flex justify-between bg-white dark:bg-black text-black dark:text-white text-nowrap items-center-safe" >

        <div className="logo-container order-first flex flex-col items-center-safe hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" data-supported-dps="34x34" fill="currentColor"
            className="mercado-match m-6" width="68" height="68" focusable="false">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </div>

        <div className="search m-6 flex flex-col items-center-safe hover:cursor-pointer">
          <input type="text" placeholder="Search" className="outline-white border rounded-full p-2.5" />
        </div>

        <div className="mainNaviagtions flex">
          <div className="home m-6 flex flex-col items-center-safe hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <span>Home</span>
          </div>
          <NavLink
            to={"/feed"}
            className={({ isActive }) => `home m-6 flex flex-col items-center-safe hover:cursor-pointer ${isActive ? "active" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              className="mercado-match" width="24" height="24" focusable="false">
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <span>Home</span>
          </NavLink>

          <div className="network m-6 flex flex-col items-center-safe hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <span>My Networks</span>
          </div>

          <div className="jobs m-6 flex flex-col items-center-safe hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <span>Jobs</span>
          </div>

          <div className="message m-6 flex flex-col items-center-safe hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            <span>Messaging</span>
          </div>

          <div className="notifications m-6 flex flex-col items-center-safe hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <span>Notifications</span>
          </div>
        </div>

        <div className="profile">
          <img
            width="24"
            src="https://media.licdn.com/dms/image/v2/D4D03AQFwmSRvw8b-zA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720872992345?e=1774483200&amp;v=beta&amp;t=dXlkwGyqdd8ba4gknTiWai0eElE9QGCL31yV4f4D6MI"
            height="24"
            alt="Adarasha Gaihre"
            id="ember16"
            className="global-nav__me-photo evi-image ember-view"
          />
        </div>

        <div className="extra flex">
          <div className="forBusiness m-6 flex flex-col items-center-safe hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false">
              <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
            </svg>
            <span>For Business</span>
          </div>

          <div className="tryPremium m-6 flex flex-col items-center-safe hover:cursor-pointer">
            <span>Try Primum for 0$</span>
          </div>
        </div>

      </nav>
    </div>
  )
}

