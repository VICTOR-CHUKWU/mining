import React from 'react'
import Link from 'next/link'
import S from '@/styles/pages/home.module.scss'

const Header = () => {
    return (
        <div className={`pt-20 ${S.header}`}>
            <div className="container">
                <h1 className=' text-center font-bold text-2xl md:text-5xl lg:text-6xl mb-3 text-white w-full lg:w-2/3 mx-auto'>
                    Pioneering Excellence in Responsible Resource Extraction
                </h1>
                <p className=' text-white w-full lg:w-2/3 mx-auto text-center'>At Albarika Mining, we take pride in leading sustainable resource extraction. Our commitment lies in responsibly supplying essential commodities that serve as the building blocks of life.</p>
                <div className='flex-center mt-5'>
                    <Link href='/contact' className=' button text-xl'>
                        <span className='button-inner text-xl font-semibold'>Proceed</span>
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header