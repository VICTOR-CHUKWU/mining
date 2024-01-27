'use client'
import React, { useCallback, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IProduct } from '@/types';
import { ProductModal } from '../shared';

const RockSlider = ({ head, data, isRight = false }: { head: string, data: IProduct[], isRight?: boolean }) => {
    const [openModal, setOpenModal] = useState(false);
    const [singleData, setSingleData] = useState<IProduct | null>(null)
    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }
    const handleDivClick = (el: IProduct) => {
        setSingleData(el)
        setOpenModal(!openModal)
    }
    const renderRocks = useCallback((el: IProduct, i: number) => {
        return (
            <SwiperSlide key={i}>
                <div className='w-[17rem] cursor-pointer' onClick={() => handleDivClick(el)}>
                    <div className="w-full h-[17rem] rounded-md overflow-hidden relative">
                        <Image src={el.img} alt="about" layout="fill" objectFit="cover" />
                    </div>
                    <p className=' text-center text-black text-lg my-3'>{el.name}</p>
                </div>
            </SwiperSlide>
        );
    }, []);
    return (
        <>
            <div className=' py-10 pb-10 lg:pb-24'>
                <div className="container">
                    <h3 className=' mb-3 text-right font-semibold text-black text-xl'>{head}</h3>
                    <div>
                        <Swiper
                            slidesPerView={'auto'}
                            speed={600}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                                reverseDirection: isRight,
                            }}
                            spaceBetween={30}
                            navigation={{
                                nextEl: `.${head.replace(/\s+/g, '-')}-next`,
                                prevEl: `.${head.replace(/\s+/g, '-')}-prev`,
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            {data.map(renderRocks)}
                        </Swiper>
                        <div className=' relative h-4 mb-0'>
                            <button className={`outline-none bg-slate-100 bg-opacity-50 ${head.replace(/\s+/g, '-')}-prev text-4xl rounded-lg py-1 px-2 flex items-center justify-center absolute z-10 -bottom-8 left-[30%] lg:left-[45%]`}
                            >
                                <span className="material-icons text-purple-900">chevron_left</span>
                            </button>
                            <button className={`outline-none bg-slate-100 bg-opacity-50 ${head.replace(/\s+/g, '-')}-next text-4xl rounded-lg py-1 px-2 flex items-center justify-center absolute z-10 -bottom-8 right-[30%] lg:right-[45%]`}

                            >
                                <span className="material-icons text-purple-900">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal show={openModal} onHide={handleOpenModal} data={singleData as IProduct} />
        </>
    )
}

export default RockSlider