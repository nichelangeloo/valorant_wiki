import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div className='h-20 bg-[#27272fff] border-b-2 text-[#ffffffb3] border-[#ffffffb3] font-light flex items-center justify-between px-12'>
       <div><Link to='/'>VALORANT <span className="text-[#ff4656]">WIKI</span></Link></div>
       <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // Toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // Change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase text-[#ffffffb3]">
                <NavLink onClick={() => setIsNavOpen(false)} to="/">Agents</NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-[#ffffffb3]">
                <NavLink onClick={() => setIsNavOpen(false)} to="/weapons">Weapons</NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-[#ffffffb3]">
                <NavLink onClick={() => setIsNavOpen(false)} to="/maps">Maps</NavLink>
              </li>
            </ul>
          </div>
        </section>

        <ul className='DESKTOP-MENU hidden lg:flex gap-6'>
            <li><NavLink to='/' className='transition duration-200 ease-in-out hover:text-[#ff4656] focus:border-b focus:border-[#ff4656] focus:text-[#ff4656] p-0.5'>AGENTS</NavLink></li>
            <li><NavLink to='/weapons' className='transition duration-200 ease-in-out hover:text-[#ff4656] focus:border-b focus:border-[#ff4656] focus:text-[#ff4656] p-0.5'>WEAPONS</NavLink></li>
            <li><NavLink to='/maps' className='transition duration-200 ease-in-out hover:text-[#ff4656] focus:border-b focus:border-[#ff4656] focus:text-[#ff4656] p-0.5'>MAPS</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar