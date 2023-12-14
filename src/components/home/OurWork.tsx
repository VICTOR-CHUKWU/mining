"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MININGEXCELENCE } from "@/data";

const OurWork = () => {
    const renderExpert = useCallback((el: string, i: number) => {
        return (
            <SwiperSlide key={i}>
                <div className=" w-[20rem] h-[17rem] rounded-md overflow-hidden relative">
                    <Image src={el} alt="about" layout="fill" objectFit="cover" />
                </div>
            </SwiperSlide>
        );
    }, []);

    return (
        <div className=" py-10 md:py-20">
            <div className="container">
                <div className=" w-full md:w-1/2 flex flex-col gap-3">
                    <h5 className=" text-lg font-light text-slate-900">Our work</h5>
                    <h2 className=" font-semibold text-xl md:text-3xl text-slate-900">
                        Mining Excellence
                    </h2>
                    <p className=" text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur. Ac purus id euismod accumsan
                        et sit varius maecenas pellentesque. Ac in ultricies convallis
                        platea a in bibendum sagittis risus. Placerat nunc est ante nunc.
                    </p>
                </div>
                <div className=" mt-10">
                    <Swiper
                        slidesPerView={'auto'}
                        speed={600}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {MININGEXCELENCE.map(renderExpert)}
                    </Swiper>
                </div>
                <div className=" w-full md:w-2/3 mx-auto my-2 md:my-5 flex items-center gap-4 md:gap-10">
                    <div className=" flex flex-col gap-2 w-[30%] border-r-2 border-slate-300 shrink-0 items-center">
                        <h4 className=" font-bold text-xl md:text-3xl text-center text-black">24</h4>
                        <h5 className=" text-sm text-center md:text-xl text-slate-700">Years acquired</h5>
                    </div>
                    <div className=" flex flex-col gap-2 w-[30%] border-r-2 border-slate-300 shrink-0 items-center">
                        <h4 className=" font-bold text-xl md:text-3xl text-center text-black">199</h4>
                        <h5 className=" text-sm text-center md:text-xl text-slate-700">Projects completed</h5>
                    </div>
                    <div className=" flex flex-col gap-2 w-[30%] shrink-0 items-center">
                        <h4 className=" font-bold text-xl md:text-3xl text-center text-black">27</h4>
                        <h5 className=" text-sm text-center md:text-xl text-slate-700">Years of experience</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;
