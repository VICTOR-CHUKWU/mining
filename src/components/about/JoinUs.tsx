import React from 'react'
import Link from 'next/link'
import S from '@/styles/pages/about.module.scss'

const JoinUs = () => {
    return (
        <div className={`${S.header}`}>
            <div className="container">
                <h3 className=' text-center font-bold text-2xl md:text-5xl  mb-3 text-white w-full lg:w-[75%] mx-auto'>
                    Join us on a journey where expertise meets innovation: Unearthing Tomorrow&apos;s Treasures Today.
                </h3>
                <div className='flex-center mt-5'>
                    <Link href='/contact' className=' button text-xl'>
                        <span className='button-inner text-xl font-semibold'>Proceed</span>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JoinUs