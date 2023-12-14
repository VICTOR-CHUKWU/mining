import React from 'react'
import Image from "next/image";

const About = () => {
    return (
        <div className=' bg-yellow py-14'>
            <div className="container relative h-auto md:h-[18rem]">
                <div className=' w-full h-[18rem] md:h-full flex flex-col justify-center md:w-11/12 bg-white rounded-t-md md:rounded-md px-8 py-14 '>
                    <div className=' w-full md:w-1/2 flex flex-col gap-3'>
                        <h5 className=' text-lg font-light text-slate-900'>About us</h5>
                        <h2 className=' font-semibold text-3xl text-slate-900'>What we do</h2>
                        <p className=''>Lorem ipsum dolor sit amet consectetur. Ac purus id euismod accumsan et sit varius maecenas pellentesque. Ac in ultricies convallis platea a in bibendum sagittis risus. Placerat nunc est ante nunc.</p>
                    </div>

                </div>
                <div className='relative md:absolute right-0 md:top-1/2 md:-translate-y-1/2 rounded-b-lg md:rounded-lg overflow-hidden h-[17rem] md:h-[90%] w-full md:w-[50%] lg:w-[40%] bg-slate-400 z-2'>
                    <Image
                        src="/img/home/about.png"
                        alt="about"
                        layout='fill'
                        objectFit='cover'

                    />
                </div>
            </div>
        </div>
    )
}

export default About