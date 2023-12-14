import { ABOUTSERVICE } from "@/data";
import React, { useCallback } from "react";

const Mission = () => {
    const renderService = useCallback(
        (item: { name: string; text: string }, i: number) => {
            return (
                <div key={i} className=" flex flex-col items-center lg:items-start  ">
                    <h4 className=" text-yellow text-lg mb-1 mt-2">{item.name}</h4>
                    <p className=" text-sm text-center lg:text-left">{item.text}</p>
                </div>
            );
        },
        []
    );
    return (
        <section className=" bg-yellow py-20">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-md w-full px-8 py-14">
                    {ABOUTSERVICE.map(renderService)}
                </div>

                <div>
                    <h5 className=" text-white font-light mb-1 md:mb-3 text-lg md:text-2xl">
                        Our Mission
                    </h5>
                    <h2 className=" text-white text-xl md:text-3xl mb-2 md:mb-4 font-semibold">
                        Get to Know Us
                    </h2>
                    <p className=" mb-2 text-sm md:text-base text-white text-left">
                        Our mission is to responsibly unlock the Earth&apos;s mineral wealth,
                        fueling progress while prioritizing environmental sustainability and
                        community well-being. We are committed to leveraging advanced
                        technology and industry expertise to extract valuable resources,
                        always adhering to the highest ethical and regulatory standards.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
