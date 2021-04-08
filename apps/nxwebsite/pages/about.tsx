import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Technology from '../components/Technology';
import Team from '../components/Team';
import BottomContent from '../components/shared/BottomContent';

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
              <div className="pt-24 w-full px-20 sm:mx-auto sm:container sm:px-4 sm:mt-20 relative pb-40">
                <div className="... w-9/12 sm:w-auto">
                  <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl text-white sm:max-w-sm xl:max-w-xl sm:pr-15">
                    Born from <br /> Blockchain
                  </h3>
                  <p className="text-xl mx-auto leading-tight tracking-tight text-white sm:max-w-sm xl:max-w-xl sm:pr-15 mt-10">
                    Secretarium was created when the founders, Cedric and
                    Bertrand, volunteered to build a blockchain lab for a major
                    European bank.
                    <br /> <br />
                    They soon realised that blockchains and DLTs weren’t
                    sufficient for the level of data protection the bank needed
                    and started to experiment with Trusted Execution
                    Environments (TEEs) and cryptography to create a solution
                    that could guarantee total data protection.
                    <br /> <br />
                    Dozens of prototypes later, a new era of confidential
                    computing has begun…
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden sm:block bg-skyline-image bg-cover bg-no-repeat ..."></div>
          </div>
        </div>
        <Technology text="Game changing technology" />
        <Team/>
        <BottomContent heading="Interested in joining us?" description="There are 12 of us at the moment, but the team is growing quickly, and we are always interested to hear from talented people who share our passion for data privacy." text="Join Us" link="join"/>
        <Footer />
      </div>
    </>
  );
}

export default Index;
