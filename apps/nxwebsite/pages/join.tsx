import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import People from '../components/People';
import BottomContent from '../components/shared/BottomContent';
import Button from '../components/shared/Button';

export function Index() {
  return (
    <>
      <Head>
        <title>Secretarium website, cryptography, blockchain</title>
      </Head>
      <div className="bg-white h-full min-h-full">
        <div className="relative overflow-hidden">
          <Nav />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            <div className="bg-gradient-to-b from-orange-700 to-red-700 ...">
              <div className="pt-24 w-full px-20 sm:mx-auto sm:container sm:px-4 sm:mt-20 relative pb-48">
                <div className="...  w-9/12 sm:w-auto">
                  <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl text-white sm:max-w-sm xl:max-w-xl sm:pr-15">
                    Help us build the next generation of secure apps
                  </h3>
                  <p className="text-xl mx-auto leading-tight tracking-tight text-white sm:max-w-sm xl:max-w-xl sm:pr-15 mt-10">
                    We’re a fast-growing, deep-tech start up looking for
                    positive-thinking, innovative creators who aren’t afraid to
                    get stuck in. If that sounds like you, we’d love to hear
                    from you.
                    <br /> <br />
                    We value diversity and know there is no cookie-cutter for
                    great talent. Whatever your past experience or
                    circumstances, you are always welcome to get in touch.
                  </p>
                  <div className="mx-auto leading-tight tracking-tight text-white sm:max-w-sm xl:max-w-xl sm:pr-15 mt-10">
                    <Link href="#contact">
                      <a
                        className={`bg-white hover:bg-black text-black hover:text-white py-5 sm:py-3 px-10 sm:px-5 rounded-full font-bold sm:font-normal text-xl sm:text-lg`}
                      >
                        Say Hello
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block bg-team-image bg-cover bg-no-repeat ..."></div>
          </div>
        </div>
        <People />
        <BottomContent
          heading="Open oppurtunities"
          description="Ready to get involved? Our current openings are listed below."
          text="Open Positions"
          link="https://www.linkedin.com/company/secretarium/jobs/"
        />
        <Footer />
      </div>
    </>
  );
}

export default Index;
