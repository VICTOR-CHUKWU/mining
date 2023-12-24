import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <section className=" pt-36 mb-10 ">
            <div className="container">
                <div className=" w-full md:w-1/2 flex flex-col gap-3">
                    <h5 className=" text-lg font-light text-slate-900">About us</h5>
                    <h2 className=" font-semibold text-xl md:text-3xl text-slate-900">
                        What we do
                    </h2>
                    <p className=" text-sm md:text-base">
                        Albarika Mining Ltd specializes in advancing mining exploration and extraction for Earth&apos;s essential resources. Focused on sustainable growth, we find, plan, build, mine, process, move, and market a diversified and high-quality range of products, spanning bulk commodities, and precious metals and minerals.
                    </p>
                </div>
                <div className=" mt-8 w-full relative h-[20rem]">
                    <Image
                        src="/img/home/about.png"
                        alt="about"
                        layout='fill'
                        objectFit='cover'
                        className="rounded-md"

                    />
                    <div className=" hidden md:block w-48 h-32 rounded-md absolute -top-20 right-6 z-[3]">
                        <Image
                            src="/img/home/expert2.png"
                            alt="about"
                            layout='fill'
                            objectFit='cover'
                            className="rounded-md"

                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
