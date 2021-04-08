import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import TechHarbour from '../components/TechHarbour';
import Button from '../components/shared/Button';
import RequestInfo from '../components/RequestInfo';

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
              <div className="pt-48 w-full px-20 sm:mx-auto sm:container sm:px-4 sm:mt-20 relative pb-60">
                <div className="... w-9/12 sm:w-auto">
                  <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl text-white sm:max-w-sm xl:max-w-xl sm:pr-15 xl:pr-64">
                    How does Secretarium secure cloud work?
                  </h3>
                  <p className="text-xl mx-auto leading-tight tracking-tight text-white sm:max-w-sm xl:max-w-xl sm:pr-15 mt-10 xl:pr-64">
                    Secretarium leverages cryptography and trusted execution environments 
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-tech-image bg-cover bg-no-repeat ..."></div>
          </div>
        </div>
        <TechHarbour />
        <RequestInfo />
        <Footer />
      </div>
    </>
  );
}

export default Index;
