import React, { useCallback } from "react";
import S from "@/styles/pages/home.module.scss";
import { SERVICES, proccess } from "@/data";
import { IService } from "@/types";
import { SVGIcon } from "../shared";

const Testimonial = () => {

    return (
        <div className=" mt-8 py-20 bg-slate-50">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className=" py-8 px-6 bg-white h-48 w-full hover:shadow-lg rounded-md flex items-center transition-all duration-300">
                    <div className="flex gap-5">
                        <SVGIcon name='quote' />
                        <div className=" flex flex-col gap-5">
                            <p className=" text-sm">Join us on our mission to empower the youth  and build a brighter, more prosperous future for young people.
                            </p>
                            <h4 className=" text-black text-lg mb-1 mt-2">Mr.Alabi daniels</h4>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className=" text-black font-light mb-8 text-2xl">Testimonials</h5>
                    <h2 className=" text-black text-3xl mb-7 font-semibold">Mining Industry Testimonials</h2>
                    <p className=" mb-9 text-left">
                        Our collaboration with Albarika has not only met but exceeded our expectations. A reliable partner in progress, they&apos;ve truly mined the path to success for our endeavors
                    </p>
                    <div className=" flex flex-col gap-1 w-[30%]">
                        <h4 className=" font-bold text-3xl text-black">200 +</h4>
                        <h5 className=" text-xl text-slate-700">Testimonials</h5>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;
