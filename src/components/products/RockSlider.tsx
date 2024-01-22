'use client'
import React, { useCallback, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {data.map(renderRocks)}
                        </Swiper>
                    </div>
                </div>
            </div>
            <ProductModal show={openModal} onHide={handleOpenModal} data={singleData as IProduct} />
        </>
    )
}

export default RockSlider