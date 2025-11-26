import "../styles/main.css";
import { useLocation, Link, Outlet } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect } from "react";


export default function Base() {
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState('');

  const clearSearch = () => {
    setSearchTerm('');
  };

  // Initialize Preline UI components (accordions, dropdowns, overlays)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);
  return (
    <>

      <div id="container" className="min-h-screen">
        {/* <!-- ========== HEADER ========== --> */}
        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px] ">
          <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
            <div className="me-5 lg:me-0 lg:hidden">
              {/* <!-- Logo --> */}
              <a className="flex-none text-red-600 rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="#">
                <svg version="1.0"
                  height="30" viewBox="-5 45 245 50">
                  <g transform="translate(0.000000,140.000000) scale(0.100000,-0.100000)"
                    fill="currentColor" stroke="currentColor">
                    <path d="M169 916 c-87 -23 -151 -94 -163 -181 l-6 -40 13 45 c19 64 31 84 78
124 167 143 422 -48 330 -249 -25 -57 -91 -113 -141 -121 -22 -4 -43 -10 -45
-14 -11 -17 83 12 120 38 52 35 95 118 95 181 0 146 -141 255 -281 217z"/>
                    <path d="M164 830 c-31 -12 -72 -66 -80 -105 -12 -67 37 -145 102 -161 45 -11
105 3 135 32 64 61 61 154 -6 213 -30 26 -44 31 -83 30 -26 0 -56 -4 -68 -9z
m93 -26 c8 -22 -10 -49 -32 -49 -22 0 -40 27 -32 49 8 21 56 21 64 0z m-80
-60 c8 -22 -10 -49 -32 -49 -22 0 -40 27 -32 49 8 21 56 21 64 0z m161 -16 c4
-33 -31 -49 -55 -25 -24 24 -8 59 25 55 21 -2 28 -9 30 -30z m-104 -14 c13 -5
14 -9 5 -20 -16 -20 -29 -17 -29 6 0 22 1 23 24 14z m-24 -83 c0 -28 -28 -47
-48 -34 -24 15 -27 44 -7 59 22 17 55 1 55 -25z m100 0 c0 -28 -28 -47 -48
-34 -24 15 -27 44 -7 59 22 17 55 1 55 -25z"/>
                    <path d="M562 743 c-11 -10 -22 -35 -25 -55 -5 -32 -3 -38 12 -38 12 0 20 12
27 43 8 36 13 42 37 45 23 3 28 0 25 -15 -2 -10 -13 -19 -26 -21 -26 -4 -20
-22 7 -22 21 0 46 26 55 58 7 21 5 22 -42 22 -33 0 -57 -6 -70 -17z"/>
                    <path d="M708 746 c-9 -7 -21 -31 -27 -54 -8 -37 -7 -42 9 -42 12 0 20 12 26
43 8 36 13 42 37 45 20 2 27 -1 27 -13 0 -9 -9 -19 -20 -22 -20 -5 -28 -23
-10 -23 6 0 10 -7 10 -15 0 -8 9 -15 21 -15 16 0 19 4 14 20 -4 11 0 29 9 42
27 38 20 48 -31 48 -27 0 -56 -6 -65 -14z"/>
                    <path d="M846 741 c-9 -10 -20 -35 -23 -55 l-6 -36 55 0 c64 0 74 9 84 68 l7
42 -50 0 c-36 0 -55 -5 -67 -19z m74 -29 c0 -32 -16 -52 -42 -52 -14 0 -18 8
-18 33 0 40 6 47 37 47 19 0 23 -5 23 -28z"/>
                    <path d="M1015 750 c-4 -6 7 -10 25 -10 28 0 30 -2 24 -27 -3 -16 -7 -34 -10
-40 -4 -15 -54 -18 -54 -3 0 6 -9 10 -20 10 -11 0 -20 -7 -20 -15 0 -11 13
-15 54 -15 62 0 75 11 83 70 l6 40 -41 0 c-22 0 -44 -4 -47 -10z"/>
                    <path d="M1132 743 c-11 -10 -22 -35 -25 -55 l-6 -38 67 2 c56 1 59 2 20 5
-61 5 -63 23 -4 23 25 0 48 5 51 10 4 6 -12 10 -40 10 -39 0 -46 3 -43 18 3
19 58 31 58 13 0 -17 27 -13 34 5 3 9 6 18 6 20 0 2 -22 4 -49 4 -32 0 -56 -6
-69 -17z"/>
                    <path d="M1277 745 c-11 -7 -21 -32 -24 -54 l-6 -41 64 2 c60 1 61 1 19 7 -43
6 -45 7 -41 36 1 17 5 33 8 38 7 12 51 8 55 -5 6 -16 38 -2 38 17 0 20 -87 20
-113 0z"/>
                    <path d="M1405 750 c-3 -6 5 -10 19 -10 23 0 25 -3 20 -32 -3 -18 -7 -39 -10
-45 -2 -7 5 -13 16 -13 15 0 20 10 26 45 5 39 10 45 30 45 13 0 24 5 24 10 0
6 -26 10 -59 10 -33 0 -63 -4 -66 -10z"/>
                    <path d="M1610 750 c0 -5 10 -10 21 -10 20 0 21 -4 14 -46 -6 -41 -5 -45 12
-42 10 2 19 12 21 23 8 58 13 65 37 65 14 0 25 5 25 10 0 6 -28 10 -65 10 -37
0 -65 -4 -65 -10z"/>
                    <path d="M1746 721 c-10 -62 -2 -71 59 -71 58 0 58 -1 71 73 5 30 3 37 -10 37
-18 0 -21 -7 -31 -63 -5 -34 -9 -38 -33 -35 -28 3 -30 13 -16 76 3 17 0 22
-15 22 -14 0 -20 -10 -25 -39z"/>
                    <path d="M1906 741 c-9 -10 -20 -35 -23 -55 -4 -29 -2 -36 11 -36 14 0 21 14
28 65 2 13 12 21 31 23 15 2 27 -1 27 -7 0 -6 -9 -11 -20 -11 -11 0 -20 -4
-20 -10 0 -5 9 -10 21 -10 27 0 20 -21 -12 -37 -24 -13 -24 -13 7 -13 37 0 58
21 49 49 -3 10 -1 22 5 26 5 3 10 13 10 21 0 23 -92 19 -114 -5z"/>
                    <path d="M2048 743 c-9 -10 -18 -35 -22 -55 l-7 -38 68 2 c56 1 60 2 21 5 -61
5 -63 23 -4 23 25 0 48 5 51 10 4 6 -12 10 -39 10 -39 0 -46 3 -46 20 0 16 7
20 30 20 17 0 30 -4 30 -10 0 -5 7 -10 15 -10 8 0 15 9 15 20 0 17 -7 20 -48
20 -34 0 -54 -5 -64 -17z"/>
                    <path d="M2190 740 c-11 -11 -20 -29 -20 -40 0 -17 7 -20 47 -20 59 0 46 -17
-17 -23 -43 -3 -43 -4 11 -5 43 -2 60 2 72 16 25 28 21 32 -29 32 -38 0 -45 3
-42 18 3 19 58 31 58 13 0 -17 27 -13 34 5 3 9 6 18 6 20 0 2 -22 4 -50 4 -37
0 -55 -5 -70 -20z"/>
                    <path d="M401 684 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                    <path d="M344 568 l-19 -23 23 19 c21 18 27 26 19 26 -2 0 -12 -10 -23 -22z" />
                  </g>
                </svg>
              </a>
              {/* <!-- End Logo --> */}
            </div>

            <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">

              <div className="hidden md:block">
                {/* <!-- Search Input --> */}
                <div className="relative flex items-center ">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                    <svg className="shrink-0 size-4 text-custom-secondary-dark " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                  </div>
                  <input type="text" className="py-2 ps-10 pe-16 block w-full bg-white border-custom-secondary border rounded-lg text-sm focus:outline-none" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  <div className="hidden absolute inset-y-0 end-0 lg:flex items-center  z-20 pe-1" >
                    <button type="button" className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-custom-secondary-dark  focus:outline-none" onClick={clearSearch}>
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                    </button>
                  </div>
                </div>

              </div>
              {/* <!-- End Search Input --> */}
            </div>

            <div className="flex flex-row items-center justify-end gap-1">
              <button type="button" className="md:hidden size-6 sm:size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-custom-primary hover:text-custom-primary-light focus:outline-none disabled:opacity-50 disabled:pointer-events-none" >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </button>

              <button type="button" className="size-6 sm:size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-custom-primary hover:text-custom-primary-light focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
              </button>

              <button type="button" className="size-6 sm:size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-custom-primary hover:text-custom-primary-light focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </button>

              {/* <!-- Dropdown --> */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button id="hs-dropdown-account" type="button" className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                  <img className="shrink-0 size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-red shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-account">
                  <div className="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
                    {/* <p className="text-sm text-gray-500 dark:text-neutral-500">Signed in as</p> */}
                    <Link to="/login" className="text-xs text-white hover:text-custom-primary-light font-bold uppercase">login</Link>
                    {/* <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">james@site.com</p> */}
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                      Newsletter
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                      Purchases
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
                      Downloads
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      Team Account
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Dropdown --> */}
            </div>
          </nav>
        </header>
        {/* <!-- ========== END HEADER ========== --> */}

        {/* <!-- ========== MAIN CONTENT ========== --> */}
        <div className="-mt-px">
          {/* <!-- Breadcrumb --> */}
          <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden ">
            <div className="flex items-center py-2">
              {/* <!-- Navigation Toggle --> */}
              <button type="button" className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-custom-primary hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                <span className="sr-only">Toggle Navigation</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m8 9 3 3-3 3" /></svg>
              </button>
              {/* <!-- End Navigation Toggle --> */}

              {/* <!-- Breadcrumb --> */}
              <ol className="ms-3 flex items-center whitespace-nowrap">
                <li className="flex items-center text-sm text-custom-primary ">
                  Application Layout
                  <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </li>
                <li className="text-sm font-semibold text-custom-primary truncate " aria-current="page">
                  Dashboard
                </li>
              </ol>
              {/* <!-- End Breadcrumb --> */}
            </div>
          </div>
          {/* <!-- End Breadcrumb --> */}
        </div>

        {/* <!-- Sidebar --> */}
        <div id="hs-application-sidebar" className="hs-overlay  [--auto-close:lg]
          hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0" role="dialog" tabIndex="-1" aria-label="Sidebar">
          <div className="relative flex flex-col h-full max-h-full">
            <div className="px-6 pt-4">
              {/* <!-- Logo --> */}
              <a className="flex-none rounded-sm text-xl inline-block font-semibold focus:outline-none text-custom-primary  focus:opacity-80" href="#" aria-label="Preline">

                <svg version="1.0"
                  height="40" viewBox="-5 45 245 50">
                  <g transform="translate(0.000000,140.000000) scale(0.100000,-0.100000)"
                    fill="currentColor" stroke="none">
                    <path d="M169 916 c-87 -23 -151 -94 -163 -181 l-6 -40 13 45 c19 64 31 84 78
124 167 143 422 -48 330 -249 -25 -57 -91 -113 -141 -121 -22 -4 -43 -10 -45
-14 -11 -17 83 12 120 38 52 35 95 118 95 181 0 146 -141 255 -281 217z"/>
                    <path d="M164 830 c-31 -12 -72 -66 -80 -105 -12 -67 37 -145 102 -161 45 -11
105 3 135 32 64 61 61 154 -6 213 -30 26 -44 31 -83 30 -26 0 -56 -4 -68 -9z
m93 -26 c8 -22 -10 -49 -32 -49 -22 0 -40 27 -32 49 8 21 56 21 64 0z m-80
-60 c8 -22 -10 -49 -32 -49 -22 0 -40 27 -32 49 8 21 56 21 64 0z m161 -16 c4
-33 -31 -49 -55 -25 -24 24 -8 59 25 55 21 -2 28 -9 30 -30z m-104 -14 c13 -5
14 -9 5 -20 -16 -20 -29 -17 -29 6 0 22 1 23 24 14z m-24 -83 c0 -28 -28 -47
-48 -34 -24 15 -27 44 -7 59 22 17 55 1 55 -25z m100 0 c0 -28 -28 -47 -48
-34 -24 15 -27 44 -7 59 22 17 55 1 55 -25z"/>
                    <path d="M562 743 c-11 -10 -22 -35 -25 -55 -5 -32 -3 -38 12 -38 12 0 20 12
27 43 8 36 13 42 37 45 23 3 28 0 25 -15 -2 -10 -13 -19 -26 -21 -26 -4 -20
-22 7 -22 21 0 46 26 55 58 7 21 5 22 -42 22 -33 0 -57 -6 -70 -17z"/>
                    <path d="M708 746 c-9 -7 -21 -31 -27 -54 -8 -37 -7 -42 9 -42 12 0 20 12 26
43 8 36 13 42 37 45 20 2 27 -1 27 -13 0 -9 -9 -19 -20 -22 -20 -5 -28 -23
-10 -23 6 0 10 -7 10 -15 0 -8 9 -15 21 -15 16 0 19 4 14 20 -4 11 0 29 9 42
27 38 20 48 -31 48 -27 0 -56 -6 -65 -14z"/>
                    <path d="M846 741 c-9 -10 -20 -35 -23 -55 l-6 -36 55 0 c64 0 74 9 84 68 l7
42 -50 0 c-36 0 -55 -5 -67 -19z m74 -29 c0 -32 -16 -52 -42 -52 -14 0 -18 8
-18 33 0 40 6 47 37 47 19 0 23 -5 23 -28z"/>
                    <path d="M1015 750 c-4 -6 7 -10 25 -10 28 0 30 -2 24 -27 -3 -16 -7 -34 -10
-40 -4 -15 -54 -18 -54 -3 0 6 -9 10 -20 10 -11 0 -20 -7 -20 -15 0 -11 13
-15 54 -15 62 0 75 11 83 70 l6 40 -41 0 c-22 0 -44 -4 -47 -10z"/>
                    <path d="M1132 743 c-11 -10 -22 -35 -25 -55 l-6 -38 67 2 c56 1 59 2 20 5
-61 5 -63 23 -4 23 25 0 48 5 51 10 4 6 -12 10 -40 10 -39 0 -46 3 -43 18 3
19 58 31 58 13 0 -17 27 -13 34 5 3 9 6 18 6 20 0 2 -22 4 -49 4 -32 0 -56 -6
-69 -17z"/>
                    <path d="M1277 745 c-11 -7 -21 -32 -24 -54 l-6 -41 64 2 c60 1 61 1 19 7 -43
6 -45 7 -41 36 1 17 5 33 8 38 7 12 51 8 55 -5 6 -16 38 -2 38 17 0 20 -87 20
-113 0z"/>
                    <path d="M1405 750 c-3 -6 5 -10 19 -10 23 0 25 -3 20 -32 -3 -18 -7 -39 -10
-45 -2 -7 5 -13 16 -13 15 0 20 10 26 45 5 39 10 45 30 45 13 0 24 5 24 10 0
6 -26 10 -59 10 -33 0 -63 -4 -66 -10z"/>
                    <path d="M1610 750 c0 -5 10 -10 21 -10 20 0 21 -4 14 -46 -6 -41 -5 -45 12
-42 10 2 19 12 21 23 8 58 13 65 37 65 14 0 25 5 25 10 0 6 -28 10 -65 10 -37
0 -65 -4 -65 -10z"/>
                    <path d="M1746 721 c-10 -62 -2 -71 59 -71 58 0 58 -1 71 73 5 30 3 37 -10 37
-18 0 -21 -7 -31 -63 -5 -34 -9 -38 -33 -35 -28 3 -30 13 -16 76 3 17 0 22
-15 22 -14 0 -20 -10 -25 -39z"/>
                    <path d="M1906 741 c-9 -10 -20 -35 -23 -55 -4 -29 -2 -36 11 -36 14 0 21 14
28 65 2 13 12 21 31 23 15 2 27 -1 27 -7 0 -6 -9 -11 -20 -11 -11 0 -20 -4
-20 -10 0 -5 9 -10 21 -10 27 0 20 -21 -12 -37 -24 -13 -24 -13 7 -13 37 0 58
21 49 49 -3 10 -1 22 5 26 5 3 10 13 10 21 0 23 -92 19 -114 -5z"/>
                    <path d="M2048 743 c-9 -10 -18 -35 -22 -55 l-7 -38 68 2 c56 1 60 2 21 5 -61
5 -63 23 -4 23 25 0 48 5 51 10 4 6 -12 10 -39 10 -39 0 -46 3 -46 20 0 16 7
20 30 20 17 0 30 -4 30 -10 0 -5 7 -10 15 -10 8 0 15 9 15 20 0 17 -7 20 -48
20 -34 0 -54 -5 -64 -17z"/>
                    <path d="M2190 740 c-11 -11 -20 -29 -20 -40 0 -17 7 -20 47 -20 59 0 46 -17
-17 -23 -43 -3 -43 -4 11 -5 43 -2 60 2 72 16 25 28 21 32 -29 32 -38 0 -45 3
-42 18 3 19 58 31 58 13 0 -17 27 -13 34 5 3 9 6 18 6 20 0 2 -22 4 -50 4 -37
0 -55 -5 -70 -20z"/>
                    <path d="M401 684 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                    <path d="M344 568 l-19 -23 23 19 c21 18 27 26 19 26 -2 0 -12 -10 -23 -22z" />
                  </g>
                </svg>

              </a>
              {/* <!-- End Logo --> */}
            </div>

            {/* <!-- Content --> */}
            <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
              <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                <ul className="flex flex-col space-y-1">
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-custom-primary-light text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none" href="#">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                      Dashboard
                    </a>
                  </li>

                  <li className="hs-accordion" id="users-accordion">
                    <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none   " aria-expanded="true" aria-controls="users-accordion-child">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      Users

                      <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                      <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </button>

                    <div id="users-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="users-accordion">
                      <ul className="hs-accordion-group ps-8 pt-1 space-y-1" data-hs-accordion-always-open>
                        <li className="hs-accordion" id="users-accordion-sub-1">
                          <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none   " aria-expanded="true" aria-controls="users-accordion-sub-1-child">
                            Sub Menu 1

                            <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                            <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                          </button>

                          <div id="users-accordion-sub-1-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="users-accordion-sub-1">
                            <ul className="pt-1 space-y-1">
                              <li>
                                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                                  Link 1
                                </a>
                              </li>
                              <li>
                                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                                  Link 2
                                </a>
                              </li>
                              <li>
                                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                                  Link 3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="hs-accordion" id="users-accordion-sub-2">
                          <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none   " aria-expanded="true" aria-controls="users-accordion-sub-2-child">
                            Sub Menu 2

                            <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                            <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                          </button>

                          <div id="users-accordion-sub-2-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="users-accordion-sub-2">
                            <ul className="pt-1 space-y-1">
                              <li>
                                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                                  Link 1
                                </a>
                              </li>
                              <li>
                                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                                  Link 2
                                </a>
                              </li>
                              <li>
                                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                                  Link 3
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="hs-accordion" id="account-accordion">
                    <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none   " aria-expanded="true" aria-controls="account-accordion-child">
                      <svg className="shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3" /><circle cx="9" cy="7" r="4" /><path d="M10 15H6a4 4 0 0 0-4 4v2" /><path d="m21.7 16.4-.9-.3" /><path d="m15.2 13.9-.9-.3" /><path d="m16.6 18.7.3-.9" /><path d="m19.1 12.2.3-.9" /><path d="m19.6 18.7-.4-1" /><path d="m16.8 12.3-.4-1" /><path d="m14.3 16.6 1-.4" /><path d="m20.7 13.8 1-.4" /></svg>
                      Account

                      <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                      <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </button>

                    <div id="account-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="account-accordion">
                      <ul className="ps-8 pt-1 space-y-1">
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="hs-accordion" id="projects-accordion">
                    <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none   " aria-expanded="true" aria-controls="projects-accordion-child">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                      Projects

                      <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>

                      <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </button>

                    <div id="projects-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden" role="region" aria-labelledby="projects-accordion">
                      <ul className="ps-8 pt-1 space-y-1">
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light focus:outline-none  " href="#">
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light" href="#">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                    Calendar
                  </a></li>
                  <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-custom-primary rounded-lg hover:bg-custom-primary-light" href="#">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                    Documentation
                  </a></li>
                </ul>
              </nav>
            </div>
            {/* <!-- End Content --> */}
          </div>
        </div>
        {/* <!-- End Sidebar --> */}

        {/* <!-- Content --> */}
        <div className="w-full lg:ps-64">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* <!-- your content goes here ... --> */}
            <Outlet />
          </div>
        </div>
        {/* <!-- End Content --> */}
        {/* <!-- ========== END MAIN CONTENT ========== --> */}
      </div >
    </>
  )
}
