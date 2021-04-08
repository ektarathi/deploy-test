import React from 'react';
import { ExternalLink } from './ExternalLink';

const Copyright = () => {
  return (
    <div className="border-t border-gray-200 pt-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:gap-8 xl:w-9/12 xl:m-auto sm:container w-full px-20 sm:mx-auto">
        <div className="mt-0 ...">
          <div className="text-white text-sm py-2">
            <div className="flex justify-between sm:justify-start items-center flex-1">
              <ExternalLink
                href="#"
                className="rounded-md mr-2 inline-flex items-center leading-5 font-medium text-red-600 betterhover:hover:text-white focus:outline-none transition duration-150 ease-in-out"
              >
                <span className="sr-only">Linkedin</span>
                <img src="/images/logos/linkedin.svg" alt="Linkedin"/>
              </ExternalLink>
            </div>
          </div>
        </div>
        <div className="mt-0 ... col-span-1 sm:col-span-2">
          <div className="text-white text-sm py-2 text-center">
            <span className="text-red-600">&copy; 2020 Secretarium. All
            rights reserved.</span>
          </div>
        </div>
        <div className="mt-0 ...">
          <div className="flex relative w-46 float-right">
            <label className="flex-initial capilalize tracking-wide text-gray-300 text-xs font-bold mb-2 mr-2 my-3">
              Language
            </label>
            <div className="relative flex-initial">
              <select className="block appearance-none w-full bg-black border border-white hover:border-red-600 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline text-white cursor-pointer">
                <option>English</option>
                <option>French</option>
                <option>Italian</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-red-600">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
