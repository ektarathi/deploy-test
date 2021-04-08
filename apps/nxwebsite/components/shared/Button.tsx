import React from 'react';
import Link from 'next/link';
import { ExternalLink } from '../ExternalLink';
export interface ListItemProps {
  bgColor: string;
  textColor: string;
  text: string;
  link: string;
}

const Button = ({ bgColor, textColor, text, link }) => {
  const [pathName, setPathName] = React.useState('');

  React.useEffect(
    function () {
      const pathname = window.location.pathname;
      setPathName(pathname);
    },
    [pathName]
  );

  return (
    <>
      {pathName === '/join' ? (
        <ExternalLink
          href={link}
          className={`bg-${bgColor} hover:bg-${textColor} text-${textColor} hover:text-${bgColor} py-5 sm:py-3 px-10 sm:px-5 rounded-full font-bold sm:font-normal text-xl sm:text-lg`}
        >
          {text}
        </ExternalLink>
      ) : (
        <Link href={`/${link}`}>
          <a
            className={`bg-${bgColor} hover:bg-${textColor} text-${textColor} hover:text-${bgColor} py-5 sm:py-3 px-10 sm:px-5 rounded-full font-bold sm:font-normal text-xl sm:text-lg`}
          >
            {text}
          </a>
        </Link>
      )}
    </>
  );
};

export default Button;
