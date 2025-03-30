import React from 'react'

const Cta = () => {
    return (
        <div>
            <section className="bg-white dark:bg-blue-900 py-9">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img className="w-full hidden md:block " src=" assets/img/one.svg" alt="dashboard image" />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Brain Pay is a next-generation payment gateway designed to help businesses accept payments seamlessly, whether you're a startup, freelancer, e-commerce store, or enterprise. Our mission is to provide fast, secure, and affordable payment solutions that empower businesses to grow.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-900 border border-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-gray-100 dark:text-white  dark:focus:ring-gray-800">
                            Get started
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                {/* this section */}
            </section>
            <section className=" bg-blue-850 py-4">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fast & Secure Transactions .</h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">peed matters in payments. We ensure lightning-fast transaction processing with advanced encryption and fraud detection to keep your money safe..</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-900 border border-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-gray-100 dark:text-white  dark:focus:ring-gray-800">
                            Get started
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    <img className="w-full hidden md:block" src="assets/img/two.svg" alt="dashboard image" />

                </div>
            </section>
        </div>
    )
}
 export default Cta