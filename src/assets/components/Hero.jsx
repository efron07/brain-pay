import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className=" bg-blue-850 py-10">
                <div className="max-w-screen-xl px-4 py-8 mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col items-start text-center  lg:text-left lg:w-7/12">
                        <h1 className="text-4xl text-left font-extrabold tracking-tight leading-tight mb-4 md:text-5xl xl:text-6xl dark:text-white">
                            Seamless Payments. Smarter Transactions. Faster Growth.
                        </h1>
                        <p className="text-gray-500 font-light mb-6 md:text-lg lg:text-xl dark:text-gray-400 text-justify ">
                            Accept payments globally with Brain Pay, the next-gen payment gateway designed for businesses of all sizes
                    </p>
                    <div className="flex flex-row sm:flex-row  lg:items-center gap-4">
                        <a
                            href="#"
                                className="inline-flex bg-blue-800 items-center justify-center px-5 py-3 text-base font-medium text-blue-900 border border-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-gray-100 dark:text-white  "
                        >
                            Get started
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-900 border border-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-gray-100 dark:text-white  dark:focus:ring-gray-800"
                        >
                            Speak to Sales
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-8 lg:mt-0 lg:w-5/12 flex justify-center sm:hidden lg:block md:block">
                    <img
                        src="assets/img/three.svg"
                        alt="nice image "
                        className="w-full h-auto hidden lg:block md:block"
                    />
                </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;