import React from 'react'
import S from '@/styles/pages/home.module.scss'

const Header = () => {
    return (
        <div className={`pt-20 ${S.header}`}>
            <div className="container">
                <h1 className=' text-center font-bold text-2xl md:text-5xl lg:text-6xl mb-3 text-white w-full lg:w-2/3 mx-auto'>
                    Pioneering Excellence in Responsible Resource Extraction
                </h1>
                <p className=' text-white w-full lg:w-2/3 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur. Ac purus id euismod accumsan et sit varius maecenas pellentesque. Ac in ultricies convallis platea a in bibendum sagittis risus. Placerat nunc est ante nunc.</p>
                <div className='flex-center mt-5'>
                    <button className=' button text-2xl'>
                        <span className='button-inner text-2xl font-semibold'>Proceed</span>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header