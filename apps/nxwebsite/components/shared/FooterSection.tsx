import React from 'react';
import Link from 'next/link';

export interface FooterSectionProps {
    link1: string;
    link2: string;
    link3: string;
    linkText1: string;
    linkText2: string;
    linkText3: string;
  }

const FooterSection = ({link1, link2, link3, linkText1, linkText2, linkText3 }) => {
  return (
    <div className="sm:mt-28 text-left w-1/2">
      <ul className="mt-4">
        <li>
          <Link href={`${link1}`}>
            <a className="text-base leading-6 text-gray-300 hover:text-white hover:underline">
              {linkText1}
            </a>
          </Link>
        </li>
        <li className="mt-4">
          <Link href={`${link2}`}>
            <a className="text-base leading-6 text-gray-300 hover:text-white hover:underline">
              {linkText2}
            </a>
          </Link>
        </li>
        <li className="mt-4">
          <Link href={`${link3}`}>
            <a className="text-base leading-6 text-gray-300 hover:text-white hover:underline">
              {linkText3}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSection;
