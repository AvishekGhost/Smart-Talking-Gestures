import React from 'react';

const Home = (props) => {

  return (
    <div style={{ backgroundColor: "lightcyan" }}>
      <section className="text-500 bg-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text mb-4">Welcome to <strong>Smart Talking Gestures!</strong></h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">We take your <strong>GESTURES</strong> and convert those into <strong>VOICE</strong> and vise-versa...you can also create your <strong>OWN</strong> gestures!!!</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-2 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div className="p-4 border-2 border-gray-600 rounded-md">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="title-font text-xl font-medium text-gray-900 mb-3">Voice to Sign</h2>
                  <p className="leading-relaxed text-base">Convert your voice to ASL/ISL language with us</p>
                  <a className="mt-3 text-blue-500 inline-flex items-center">Click Here to see
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div className="p-4 border-2 border-gray-600 rounded-md">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="title-font text-xl font-medium text-gray-900 mb-3">Voice to Sign</h2>
                  <p className="leading-relaxed text-base">Convert your voice to ASL/ISL language with us</p>
                  <a className="mt-3 text-blue-500 inline-flex items-center">Click Here to see
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
              <div className="p-4 border-2 border-gray-600 rounded-md">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="title-font text-xl font-medium text-gray-900 mb-3">Voice to Sign</h2>
                  <p className="leading-relaxed text-base">Convert your voice to ASL/ISL language with us</p>
                  <a className="mt-3 text-blue-500 inline-flex items-center">Click Here to see
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;