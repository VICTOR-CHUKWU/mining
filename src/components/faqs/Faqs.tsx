import React, { useCallback } from "react";
import { SVGIcon } from "../shared";
import { FAQS } from "@/data";

const Faqs = () => {
    const renderFaqs = useCallback(
        (item: { title: string, text: string }, i: number) => {
            return (
                <div key={i} className=" flex gap-3">
                    <SVGIcon name="faq" />
                    <div className=" flex flex-col gap-2">
                        <h4 className=" text-base font-semibold text-black">{item.title}</h4>
                        <p className=" text-sm">{item.text}</p>
                    </div>
                </div>
            )
        },
        [],
    )

    return (
        <div className="pt-32">
            <div className="container">
                <div className=" w-full md:w-1/2 flex flex-col gap-3">
                    <h5 className=" text-black font-light mb-1 md:mb-3 text-lg md:text-2xl">
                        FAQ
                    </h5>
                    <h2 className=" text-black text-xl md:text-3xl mb-2 md:mb-4 font-semibold">
                        Frequently Asked Questions
                    </h2>
                    <p className=" mb-2 text-sm md:text-base text-left">
                        Lorem ipsum dolor sit amet consectetur. Ac purus id euismod accumsan
                        et sit varius maecenas pellentesque. Ac in ultricies convallis
                        platea a in bibendum sagittis risus. Placerat nunc est ante nunc.
                    </p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 mb-12">
                    {FAQS.map(renderFaqs)}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
