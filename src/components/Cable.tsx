import React from "react";
import global from '../assets/cable.jpg';

const Cable = () => {
    return (
        <>
            <section
                className="relative overflow-hidden bg-cover bg-top bg-no-repeat"
                style={{
                    backgroundImage: `url(${global})`,
                    height: '450px', // Adjust the height for smaller devices
                    width: '100%',   // Set the width to 100% to fit the screen
                }}
            >
                {/* Image overlay */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-20"
                ></div>

                <div className="bg-black/25 p-4 md:p-12 lg:px-16 lg:py-24 relative">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                            Fibre Packages
                        </h2>

                        <p
                            className="hidden max-w-lg text-orange-500/90 md:mt-6 md:block md:text-lg md:leading-relaxed font-bold"
                        >
                            At Pamoja Home Fiber Company, we strive to provide you with the best-in-class fiber optic internet services for your home. Experience the power of seamless connectivity and explore a world of endless possibilities
                        </p>

                        <div className="mt-4 sm:mt-8">
                            <a
                                className="group relative inline-block overflow-hidden border border-orange-500 px-4 py-2 sm:px-6 sm:py-3 focus:outline-none focus:ring"
                                href="/"
                            >
                                <span
                                    className="absolute inset-y-0 left-0 w-[2px] bg-orange-500 transition-all group-hover:w-full group-active:bg-orange-500"
                                ></span>
                                <span
                                    className="relative text-sm font-medium text-white transition-colors group-hover:text-black"
                                >
                                    Get Connected Today
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cable;

