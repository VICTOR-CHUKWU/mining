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
                        Albarika Mining Ltd is a pioneering force in the extraction and
                        exploration of Earth&apos;s valuable mineral resources. Established with
                        a commitment to sustainable and responsible mining practices, we
                        specialize in uncovering treasures that fuel progress and
                        innovation.
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
