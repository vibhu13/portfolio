import React from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {

    // Browser Router SSR , SEO Friendly
    // const navigationObj = [
    //     {id: 1,value: "Home",href: "/portfolio"},
    //     {id: 2,value: "Contact",href: "/portfolio/contact"},
    //     {id: 3,value: "Resume",href: "/portfolio/resume"},
    //     // {id: 4,value: "Extra",href: "/extra"},
    // ]

    const [darkMode,setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle("dark");
    }

    const navigationObj = [
      {id: 1,value: "Home",href: ""},
      {id: 2,value: "Contact",href: "/contact"},
      {id: 3,value: "Resume",href: "/resume"},
      // {id: 4,value: "Extra",href: "/extra"},
  ]

    const [isOpen,setIsOpen] = useState(true);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    console.log(isOpen);


    return (
        <nav className="dark:bg-gray-800 bg-white ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button onClick={toggleNavBar} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg className={`${isOpen ? 'block h-6 w-6': 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg className={`${isOpen ? 'hidden' : 'block h-6 w-6'}`} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        {/* <Logo/> */}
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navigationObj.map(navigation => {
                return <NavLink 
                to={navigation.href} 
                className={({ isActive }) => isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>
                {navigation.value}
                </NavLink>
            })}
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 dark:bg-gray-800 bg-white">
      <a href="https://www.linkedin.com/in/vibhu-yadav13" target="_blank" rel="noopener noreferrer">
      <button type="button" className="relative rounded-full  p-1 text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View LinkedIn</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8">
            <path fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
            </path>
        </svg>
      </button>
      </a>
        {/* <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View Instagram</span>
          <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
        </button> */}
      <a href="https://www.instagram.com/vibhu_13/" target="_blank" rel="noopener noreferrer">
      <button type="button" className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View Instagram</span>
          <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
      </button>
      </a>
      <a href="https://leetcode.com/smartyvibhuse/" target="_blank" rel="noopener noreferrer">
      <button type="button" className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View Leetcode</span>
          <svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 21.334 21.334" id="leetcode"><path fill="#B3B1B0" d="M19.556 12.76c0 -0.66 -0.502 -1.195 -1.12 -1.195h-8.946c-0.618 0 -1.12 0.536 -1.12 1.195s0.502 1.196 1.12 1.196h8.946c0.618 0 1.12 -0.536 1.12 -1.196"/><path fill="#9C9A99" d="M19.556 12.76H8.37c0 0.66 0.502 1.196 1.12 1.196h8.946c0.618 0 1.12 -0.536 1.12 -1.196"/><path fill="#C98F1B" d="M4.249 12.76h-0.04c0.013 0.654 0.28 1.31 0.797 1.838 1.163 1.188 2.345 2.356 3.52 3.532l0.182 0.176c0.417 0.269 0.421 1.112 0.162 1.485 -0.276 0.399 -0.632 0.648 -1.129 0.648l-0.056 -0.001c-0.178 -0.007 -0.324 -0.077 -0.472 -0.161q-0.047 -0.026 -0.092 -0.056c0.846 0.748 1.964 1.111 3.19 1.111 1.32 0 2.516 -0.455 3.382 -1.328l2.301 -2.344c0.454 -0.456 0.438 -1.213 -0.035 -1.688a1.224 1.224 0 0 0 -0.87 -0.367c-0.296 0 -0.585 0.11 -0.806 0.332l-2.378 2.317c-0.41 0.415 -0.98 0.588 -1.608 0.588s-1.196 -0.173 -1.608 -0.588l-3.819 -3.879c-0.404 -0.408 -0.612 -0.998 -0.619 -1.617"/><path fill="#060605" d="M4.209 12.76H1.704c0.006 1.32 0.529 2.617 1.545 3.645 1.176 1.188 2.361 2.367 3.542 3.552a1.882 1.882 0 0 0 0.422 0.322c0.148 0.084 0.294 0.154 0.472 0.161l0.056 0.001c0.499 0 0.855 -0.248 1.129 -0.648 0.259 -0.375 0.254 -1.216 -0.162 -1.485l-0.182 -0.176c-1.175 -1.176 -2.358 -2.344 -3.52 -3.532 -0.518 -0.528 -0.784 -1.185 -0.797 -1.839"/><path fill="#E7A41F" d="m3.096 16.167 3.832 3.877c0.864 0.871 2.06 1.29 3.382 1.29 1.32 0 2.516 -0.455 3.382 -1.328l2.301 -2.344c0.454 -0.456 0.438 -1.213 -0.035 -1.688 -0.472 -0.475 -1.223 -0.491 -1.674 -0.035l-2.378 2.317c-0.41 0.415 -0.98 0.588 -1.608 0.588s-1.196 -0.173 -1.608 -0.588l-3.819 -3.879c-0.411 -0.416 -0.619 -1.022 -0.619 -1.656s0.208 -1.207 0.619 -1.622l3.809 -3.894c0.412 -0.416 0.992 -0.573 1.62 -0.573 0.629 0 1.197 0.173 1.608 0.588l2.378 2.316c0.454 0.457 1.204 0.441 1.675 -0.034 0.472 -0.476 0.488 -1.232 0.035 -1.689l-2.301 -2.343a4.424 4.424 0 0 0 -2.126 -1.182l-0.029 -0.006 2.175 -2.226c0.456 -0.456 0.44 -1.214 -0.033 -1.689 -0.472 -0.475 -1.224 -0.491 -1.677 -0.034L3.096 9.312c-0.865 0.872 -1.318 2.078 -1.318 3.41s0.453 2.572 1.319 3.445"/><path fill="#070706" d="M7.213 20.28a1.882 1.882 0 0 1 -0.422 -0.321c-1.179 -1.185 -2.364 -2.364 -3.542 -3.552 -1.768 -1.785 -2.046 -4.388 -0.697 -6.506 0.208 -0.328 0.471 -0.616 0.745 -0.892L11.852 0.435c0.555 -0.556 1.331 -0.58 1.848 -0.058 0.497 0.5 0.469 1.293 -0.069 1.835l-2.054 2.067c-0.037 0.108 -0.124 0.178 -0.2 0.255 -0.767 0.779 -1.557 1.538 -2.312 2.328 -0.099 0.103 -0.232 0.166 -0.33 0.271 -1.265 1.265 -2.544 2.516 -3.791 3.798 -1.01 1.037 -0.974 2.612 0.06 3.67 1.163 1.188 2.345 2.356 3.52 3.532l0.182 0.176c0.417 0.269 0.421 1.112 0.162 1.485 -0.285 0.414 -0.657 0.666 -1.185 0.648 -0.177 -0.008 -0.323 -0.078 -0.471 -0.161"/><path fill="#EAB03C" d="M11.575 4.29c-0.04 0.103 -0.122 0.168 -0.197 0.243 -0.767 0.779 -1.557 1.538 -2.312 2.328 -0.099 0.103 -0.232 0.166 -0.33 0.271 -1.265 1.265 -2.544 2.516 -3.791 3.798a2.541 2.541 0 0 0 -0.735 1.868h0.04l-0.002 -0.077c0 -0.633 0.208 -1.207 0.619 -1.622l3.809 -3.894c0.412 -0.416 0.992 -0.573 1.62 -0.573 0.629 0 1.197 0.173 1.608 0.588l2.378 2.316c0.22 0.223 0.512 0.333 0.808 0.333 0.312 0 0.627 -0.122 0.869 -0.367 0.472 -0.476 0.488 -1.232 0.035 -1.689l-2.301 -2.343a4.424 4.424 0 0 0 -2.118 -1.181M12.8 0a1.129 1.129 0 0 0 -0.5 0.118c0.163 -0.073 0.332 -0.113 0.5 -0.118"/><path fill="#272726" d="M12.828 0h-0.027a1.224 1.224 0 0 0 -0.5 0.118c-0.158 0.072 -0.311 0.178 -0.448 0.316L3.3 9.006c-0.276 0.276 -0.536 0.564 -0.745 0.892a5.271 5.271 0 0 0 -0.848 2.9h2.504a2.541 2.541 0 0 1 0.735 -1.868c1.246 -1.282 2.526 -2.533 3.791 -3.798 0.099 -0.105 0.232 -0.168 0.33 -0.271 0.755 -0.791 1.544 -1.548 2.312 -2.328 0.073 -0.074 0.157 -0.141 0.197 -0.243l0.005 -0.012 2.054 -2.067c0.536 -0.542 0.567 -1.336 0.069 -1.835A1.224 1.224 0 0 0 12.828 0"/></svg>
      </button>
      </a>
      <button onClick={toggleDarkMode} type="button" className="relative rounded-full p-1 text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Toggle Theme</span>
          {
          darkMode ? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg> 
        }
      </button>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className={`${isOpen ? 'hidden' : 'sm:hidden'}`} id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {navigationObj.map(navigation => {
                return <NavLink 
                to={navigation.href} 
                onClick={toggleNavBar}
                className={({ isActive }) => isActive ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>
                {navigation.value}
                </NavLink>
            })}
    </div>
  </div>
</nav>

    );
}

export default Navbar;
