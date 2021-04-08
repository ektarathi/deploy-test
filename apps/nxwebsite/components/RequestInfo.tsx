import React from 'react';
import Checkbox from './shared/Checkbox';
import Button from './shared/Button';

const RequestInfo = () => {
  return (
    <section className="bg-white body-font">
      <div className="sm:container w-full px-20 sm:mx-auto xl:inline">
        <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl mt-2 text-red-600 pb-10 xl:w-9/12 xl:m-auto">
          Download more info
        </h3>

        <form
          action="https://api.formik.com/submit/palmerhq/formik-newsletter"
          method="post"
          className="mt-4 flex mx-auto w-full relative flex-initial sm:mx-px"
        >
          <div className="grid grid-cols-1 w-full sm:grid-cols-3 gap-6 xl:w-9/12 xl:m-auto pb-24">
            <div className="...">
              <Checkbox label="checkbox1" text="Presentation (15pg)"/>
              <Checkbox label="checkbox2" text="Short PDF (2pg)"/>
              <Checkbox label="checkbox3" text="Short Technical PDF (2pg)"/>
              <Checkbox label="checkbox4" text="White Paper (49pg)"/>
              <Checkbox label="checkbox5" text="Secure Connection Protocol (15pg) "/>
            </div>
            <div className="sm:col-span-2 ...">
                <div className="row sm:flex">
                    <div className="col w-full mb-6">
                        <div className="flex flex-col bg-white shadow-2xl rounded-lg">
                            <textarea placeholder="Let us know who you are and a summary of your interest" className="flex-1 m-1 bg-transparent p-10 sm:px-3 sm:py-10" name="textarea"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex-grow">
                        <input type="hidden" name="_email" value="" />
                        <input
                            aria-label="Email address"
                            type="email"
                            name="email"
                            required={true}
                            className="appearance-none border text-base leading-6 focus:outline-none placeholder-gray-500 px-3 focus:border-red-600 transition duration-150 ease-in-out border-white shadow-2xl rounded-lg mr-10 w-full p-6 sm:p-3"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="sm:ml-5 sm:mt-0 mt-13">
                        <Button bgColor="red-600" textColor="white" text="Request Paper" link="about"/>
                    </div>
                </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestInfo;
