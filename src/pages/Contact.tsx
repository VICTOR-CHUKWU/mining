import React from "react";
import {
    HomeIcon,
    EnvelopeIcon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/20/solid";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
    return (
        <div className="pt-32 mb-10">
            <div className="container">
                <div className=" w-full md:w-1/2 flex flex-col gap-3">
                    <h5 className=" text-black font-light mb-1 md:mb-3 text-lg md:text-2xl">
                        Support
                    </h5>
                    <h2 className=" text-black text-xl  md:text-4xl mb-2 md:mb-4 font-semibold">
                        Contact us
                    </h2>
                    {/* <p className=" mb-2 text-sm md:text-base text-left">
                    Lorem ipsum dolor sit amet consectetur. Ac purus id euismod accumsan
                    et sit varius maecenas pellentesque. Ac in ultricies convallis
                    platea a in bibendum sagittis risus. Placerat nunc est ante nunc.
                </p> */}
                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-3">
                    <div>
                        <div className=" mt-7 bg-yellow py-14 px-5 rounded-l-xl">
                            <div className=" flex items-center gap-8 mb-7">
                                <HomeIcon className="pointer-events-none text-white w-7 h-7" />

                                <p className=" text-sm md:text-xl text-white">
                                    4a Maman Nasir Street, Asokoro, Abuja-Nigeria
                                </p>
                            </div>

                            <div className=" flex items-center gap-8 mb-7">
                                <DevicePhoneMobileIcon className="pointer-events-none text-white w-5 h-5" />

                                <p className="text-sm md:text-xl text-white">Telephone: +234 (0) 8030796358</p>
                            </div>

                            <div className=" flex items-center gap-8">
                                <EnvelopeIcon className="pointer-events-none text-white w-5 h-5" />

                                <p className="text-sm md:text-xl text-white">
                                    Email: info@albarikamining.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-1 lg:col-span-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
