import React from 'react';
import AwardItems from './shared/AwardItems';

const Summary = () => {
  return (
    <div className="relative border-t border-gray-200 shadow-inner">
      <div className="text-sm">
        <div className="py-24">
          <div className="sm:container w-full px-20 sm:mx-auto xl:inline">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:w-9/12 xl:m-auto">
              <div className="sm:px-0 xl:pr-24 ... flex flex-col justify-center">
                <h3 className="text-3xl leading-8 font-extrabold tracking-tight sm:leading-10 mt-2 text-red-600 sm:text-4xl max-w-sm sm:max-w-md xl:max-w-2xl text-center sm:text-left m-auto sm:m-0 pb-7 sm:pb-0">
                  Proven confidential app hosting in the cloud
                </h3>
                <p className="my-4 text-base xl:text-lg sm:leading-normal leading-6 text-gray-600 sm:max-w-md xl:max-w-xl text-center sm:text-left m-auto sm:m-0 sm:pt-5 pb-10 sm:pb-0">
                  Secretarium secure cloud technology is powering a new wave of
                  privacy-respecting products. Empowering individuals and
                  businesses by guaranteeing data privacy.
                </p>
              </div>
              <div className="...">
                <img src="/images/Work.jpg" className="rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="static">
        <div className="relative py-24 border-t section-data-processing">
          <div className="sm:container w-full px-20 sm:mx-auto xl:inline">
            <h3 className="text-3xl leading-8 font-extrabold tracking-tight sm:leading-10 mt-2 text-white sm:text-center xl:w-9/12 xl:m-auto pb-7">
              Truly secure data processing
            </h3>
            <p className="my-4 text-xl leading-7 text-white sm:text-center xl:w-9/12 xl:m-auto">
              Secretarium secure cloud technology uses a combination of secure
              hardware and cryptography to ensure total data privacy. It’s the
              only technology that can guarantee data encryption during
              processing.
            </p>
            <AwardItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
