import React from 'react';


function HeroHome() {



  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Lego Blocks for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Automation</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Build powerful applications with your own business logic in a few clicks</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-teal-911 hover:bg-teal-400 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Book a Demo</a>
                </div>

              </div>
              <div className="pt-2 pl-14">
                <img className="justify-items-center" src={require('../images/Frame_1.png').default} width="700" alt="sphere" />
                </div>
            </div>


          </div>
          </div>


        </div>

      
    </section>
  );
}

export default HeroHome;