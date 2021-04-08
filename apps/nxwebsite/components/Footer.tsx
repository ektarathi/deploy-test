import * as React from 'react';
import { Formik } from 'formik';
import Copyright from './Copyright';
import FooterSection from './shared/FooterSection';

const Footer = () => {
  const initialValues = {
    email: '',
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid Email';
    }

    return errors;
  };

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <div className="bg-black" id="contact">
      <div className="pt-12 text-center sm:text-left pb-5">
        <div className="grid grid-cols-3 sm:grid-cols-4 sm:gap-8 pb-4 xl:w-9/12 xl:m-auto sm:container w-full px-20 sm:mx-auto">
          <div className="my-12 ... flex justify-center flex-col">
            <img
              src="/images/logos/secretarium_icon.svg"
              className="mb-3 sm:w-1/3 w-24"
            />
            <p className="text-white text-3xl text-left">
              The secure <br /> cloud.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 col-span-2 sm:col-span-3">
            <div className="flex flex-row order-2 sm:order-1">
              <FooterSection
                link1="/"
                link2="/about"
                link3="/tech"
                linkText1="Home"
                linkText2="About Us"
                linkText3="Tech"
              />
              <FooterSection
                link1="/"
                link2="/about"
                link3="/tech"
                linkText1="Contact Us"
                linkText2="Terms &amp; Conditions"
                linkText3="Privacy Policy"
              />
            </div>
            <div className="my-8 col-span-2 sm:col-span-1 order-1 sm:order-2">
              <p className="mt-4 text-base leading-6 text-gray-300 text-left">
                <strong className="text-white">Say hello! </strong>
                <span className="font-light">
                  Sign up to our newsletter for company updates, technical tips,
                  benefits and offers.
                </span>
              </p>
              <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
              >
                {(formik) => {
                  const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty,
                  } = formik;
                  return (
                    <form
                      onSubmit={handleSubmit}
                      className="mt-4 sm:flex mx-auto sm:w-full relative flex-col sm:mx-px"
                      method="post"
                    >
                      <div className="form-row sm:flex mx-auto sm:w-full relative flex-initial sm:mx-px">
                        <div className="appearance-none w-full px-4 py-3 border text-base leading-6 text-white bg-black placeholder-gray-300 border-white hover:border-red-600 cursor-pointer flex flex-row">
                          <input type="hidden" name="_email" value="" />
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Email Address"
                            className={
                              errors.email && touched.email
                                ? 'input-error w-11/12 bg-black placeholder-gray-300 focus:outline-none'
                                : 'w-11/12 bg-black placeholder-gray-300 focus:outline-none'
                            }
                          />

                          <button
                            type="submit"
                            className="text-red-600 hover:text-white focus:outline-none flex justify-end w-10 items-center"
                          >
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 492 492"
                            >
                              <path
                                d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
                                  c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
                                  v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
                                  c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
                                  l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      {errors.email && touched.email && (
                        <p className="error">{errors.email}</p>
                      )}
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
