import * as React from 'react';
const Innovation = () => {
  return (
    <div className="text-lg bg-white">
      <div className="py-24 relative">
        <div className="sm:container w-full px-20 sm:mx-auto xl:inline">
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-8 xl:w-9/12 xl:m-auto">
            <div className="... col-span-2 sm:col-span-1">
              <img
                src="/images/A_team_logo.svg"
                alt="Team Logo"
                className="m-auto pb-14 sm:pb-0 sm:m-px"
              />
            </div>
            <div className="flex ... col-span-2">
              <div className="flex-1 ... mt-6 lg:mt-10">
                <div className="flex">
                  <div className="flex-auto ...">
                    <div className="... float-left w-15 mr-3">
                      <img src="/images/logos/award.svg" alt="Award" />
                    </div>
                    <div className="... w-8/12 float-left">
                      Most innovative financial data security solution
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 ... mt-6 lg:mt-10">
                <div className="flex">
                  <div className="flex-auto ...">
                    <div className="... float-left w-15 mr-3">
                      <img src="/images/logos/award.svg" alt="Award" />
                    </div>
                    <div className="... w-8/12 float-left">
                      Most innovative use of distributed ledger
                      technology/blockchain.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
