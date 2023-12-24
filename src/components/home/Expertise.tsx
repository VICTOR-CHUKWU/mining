'use client'
import React, { useCallback } from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { IExpertProject } from '@/types';
import { EXPERTISE } from '@/data';

const Expertise = () => {
    const renderExpert = useCallback(
        (el: IExpertProject, i: number) => {
            return (
                <SwiperSlide key={i} >
                    <div className=' w-full flex items-center pr-10'>
                        <div className=' w-[55%] pr-4 shrink-0 flex flex-col gap-7'>
                            <h4 className=' font-medium text-xl text-slate-900'>{el.name}</h4>
                            <p className=' text-xs'>{el.description}</p>
                        </div>
                        <div className='w-[45%] shrink-0 h-[17rem] rounded-md overflow-hidden relative'>
                            <Image
                                src={el.img}
                                alt="about"
                                layout='fill'
                                objectFit='cover'

                            />
                        </div>
                    </div>
                </SwiperSlide>
            )
        },
        [],
    )

    return (
        <div className=' pb-0 pt-20 md:pb-20'>
            <div className="container">
                <div className=' w-full md:w-1/2 flex flex-col gap-3'>
                    <h5 className=' text-lg font-light text-slate-900'>Expertise</h5>
                    <h2 className=' font-semibold text-xl md:text-3xl text-slate-900'>Extracting wealth</h2>
                    <p className=' text-sm md:text-base'>our expertise spans from strategic planning to sustainable extraction and marketing. We specialize in delivering diversified, high-quality products, ensuring that each step in the process contributes to building a resilient and prosperous future. </p>
                </div>
                <div className=' mt-10'>
                    <Swiper
                        slidesPerView={'auto'}
                        speed={600}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="expertSwiper"
                    >
                        {
                            EXPERTISE.map(renderExpert)
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Expertise