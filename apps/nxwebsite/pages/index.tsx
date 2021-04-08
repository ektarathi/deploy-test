import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Innovation from '../components/Innovation';
import Summary from '../components/Summary';
import Footer from '../components/Footer';
import Benefits from '../components/Benefits';
import Technology from '../components/Technology';
import Button from '../components/shared/Button';
import Carousel from '../components/Carousel';
import BottomContent from '../components/shared/BottomContent';

export function Index() {
  return (
    <>
      <Head>
        <title>Secretarium website, cryptography, without the tears</title>
      </Head>
      <div className="bg-white h-full min-h-full">
        <div className="relative overflow-hidden bg-landing-image bg-cover bg-no-repeat bg-top">
          <Nav />
          <div className="container sm:mx-auto xl:inline px-4 relative ">
            <div className="sm:grid sm:grid-cols-12 gap-8 mx-auto py-48 mt-8 w-5/6 sm:w-full xl:w-3/4">
              <div className="col-span-6 ">
                <div className="text-left">
                  <h1 className="text-3xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl xl:text-5xl">
                    At the heart
                    <br/>
                    <span>of confidential</span>
                    <br/>
                    <span>computing</span>
                  </h1>
                  <p className="my-10 text-base text-white sm:mt-5 sm:text-lg xl:text-xl sm:max-w-md xl:max-w-xl">
                    Award-winning technology, changing the face of data privacy one app at a time. 
                  </p>
                  <Button bgColor="white" textColor="black" text="Read more" link="tech"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Innovation />
        <Summary />
        <Benefits />
        <Carousel />
        <Technology text="Technology"/>
        <BottomContent heading="Building secure apps since 2018" description="We're working with the innovative new privacy technology to redefine how data is secured during processing." text="Our Story" link="about"/>
        <Footer />
      </div>
    </>
  );
}

export default Index;
