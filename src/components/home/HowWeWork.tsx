import React, { useCallback } from "react";
import S from "@/styles/pages/home.module.scss";
import { SERVICES, proccess } from "@/data";
import { IService } from "@/types";
import { SVGIcon } from "../shared";

const HowWeWork = () => {
    const renderProcess = useCallback((item: { text: string }, i: number) => {
        return (
            <p key={i} className={` ${S.processText} text-sm md:text-base`}>
                <span>
                    <SVGIcon name="check" />
                </span> {item.text}
            </p>
        );
    }, []);

    const renderService = useCallback((item: IService, i: number) => {
        return (
            <div key={i} className=" flex flex-col items-center lg:items-start py-8 px-6 bg-white lg:bg-transparent hover:bg-white hover:shadow-lg rounded-md transition-all duration-300">
                <SVGIcon name={item.icon} size="large" />
                <h4 className=" text-black text-lg mb-1 mt-2">{item.name}</h4>
                <p className=" text-sm text-center lg:text-left">{item.description}</p>
            </div>
        );
    }, []);
    return (
        <div className=" mt-8 py-10 bg-slate-50">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map(renderService)}
                </div>

                <div>
                    <h5 className=" text-black font-light mb-1 md:mb-3 text-lg md:text-2xl">How we work</h5>
                    <h2 className=" text-black text-xl md:text-3xl mb-2 md:mb-4 font-semibold">Our working process</h2>
                    <p className=" mb-2 text-sm md:text-base text-left">
                        Lorem ipsum dolor sit amet consectetur. Ac purus id euismod accumsan
                        et sit varius maecenas pellentesque. Ac in ultricies convallis
                        platea a in bibendum sagittis risus. Placerat nunc est ante nunc.
                    </p>
                    <div className=" flex flex-col gap-5 mt-5">
                        {proccess.map(renderProcess)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;
