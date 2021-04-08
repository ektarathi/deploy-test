import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Logo } from './Logo';

const Nav = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const mobileMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = (
    <>
      <div>
        <Link href="/about">
          <a className="sm:rounded-sm inline-flex items-center leading-5 text-base text-black hover:bg-black sm:hover:bg-transparent hover:text-white sm:text-white sm:hover:underline focus:outline sm:focus:text-white transition duration-150 ease-in-out w-full p-5 sm:w-auto sm:pl-3">
            About Us
          </a>
        </Link>
      </div>
      <div>
        <Link href="/join">
          <a className="sm:rounded-md inline-flex items-center leading-5 text-base text-black hover:bg-black sm:hover:bg-transparent hover:text-white sm:text-white sm:hover:underline focus:outline sm:focus:text-white transition duration-150 ease-in-out w-full p-5 sm:w-auto sm:pl-3">
            Join Us
          </a>
        </Link>
      </div>
      <div>
        <Link href="/tech">
          <a className="sm:rounded-md inline-flex items-center leading-5 text-base text-black hover:bg-black sm:hover:bg-transparent hover:text-white sm:text-white sm:hover:underline focus:outline sm:focus:text-white transition duration-150 ease-in-out w-full p-5 sm:w-auto sm:pl-3">
            Tech
          </a>
        </Link>
      </div>
      <div className="block">
        <Link href="#contact">
          <button className="text-left bg-white sm:bg-black text-black sm:text-white focus:outline hover:bg-black sm:hover:bg-white hover:text-white sm:hover:text-black w-full p-5 sm:py-2 sm:px-5 sm:rounded-full">
            Contact
          </button>
        </Link>
      </div>
    </>
  );

  return (
    <>
      <div className="px-6 lg:px-20 absolute w-full z-30">
        <div className="grid grid-cols-2 sm:grid-cols-12 sm:gap-8">
          <div className="sm:col-span-3 flex items-center justify-between h-16">
            <div>
              <Link href="/" as="/">
                <a>
                  <span className="sr-only">Home</span>
                  <Logo />
                </a>
              </Link>
            </div>
          </div>
          <div className="sm:col-span-9 items-center flex justify-end flex-row">
            <button
              id="hamburgerbtn"
              onClick={mobileMenu}
              className={`sm:hidden focus:outline-none cursor-pointer flex self-start ${isExpanded ? 'open': 'close'}`}
            >
             {isExpanded ? <img src="/images/logos/close_button.svg"/> : <img src="/images/logos/hamburger_white.svg" className="mt-6"/>}
            </button>
            {isExpanded ? (
              <div className="bg-white sm:bg-transparent flex-col sm:flex-row flex justify-start flex-1 sm:relative sm:justify-end sm:items-center w-64">{menuItems}</div>
            ) : (
              <div className="hidden sm:flex justify-between sm:justify-end items-center flex-1">{menuItems}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
