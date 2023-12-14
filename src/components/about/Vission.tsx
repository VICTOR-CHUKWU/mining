import React from "react";
import Image from "next/image";

const Vission = () => {
    return (
        <section className=" py-20">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h5 className=" text-black font-light mb-1 md:mb-3 text-lg md:text-2xl">
                        Vision
                    </h5>
                    <h2 className=" text-black text-xl md:text-3xl mb-2 md:mb-4 font-semibold">
                        Our working process
                    </h2>
                    <p className=" mb-2 text-sm md:text-base text-left">
                        Albarika Mining envisions a future where responsible mining
                        contributes to global development without compromising the
                        environment. We strive to be a leader in the industry, setting new
                        benchmarks for ethical mining practices and corporate
                        responsibility.
                    </p>
                </div>
                <div className=" relative w-full h-[24rem]">
                    <Image
                        src="/img/home/about.png"
                        alt="about"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default Vission;
