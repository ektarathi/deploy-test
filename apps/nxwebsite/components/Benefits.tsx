import React from 'react';
import ListItem from './shared/ListItem';

const Benefits = () => {
  return (
    <section className="bg-white body-font">
      <div className="sm:container w-full px-20 sm:mx-auto xl:inline">
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-4 xl:w-9/12 xl:m-auto py-24">
          <div className="... col-span-2 sm:col-span-1">
            <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl mt-2 text-red-600">
              Say hello to total data control
            </h3>
            <p className="mt-4 text-xl leading-7 text-gray-700 pr-15 max-w-xs sm:max-w-md xl:max-w-2xl">
              We believe everyone has the right to control their own data,
              people and businesses. The ability to protect sensitive
              information during processing opens the door to endless commercial
              data opportunities, without compromising individual privacy.
            </p>
          </div>
          <div className="...">
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-5 text-gray-700 max-w-screen-lg mx-auto text-lg">
              <ListItem number="01" initial_snippet="Lets users keep" bold_snippet="control" last_snippet="of their data"/>
              <ListItem number="02" initial_snippet="Enables secure" bold_snippet="collaboration" last_snippet=""/>
              <ListItem number="03" initial_snippet="" bold_snippet="Secures" last_snippet="commercial data"/>
              <ListItem number="04" initial_snippet="" bold_snippet="Powers secure" last_snippet="monetisation"/>
              <ListItem number="05" initial_snippet="" bold_snippet="Protects" last_snippet="anonymity"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
