import React from 'react'
import S from '@/styles/pages/about.module.scss'

const JoinUs = () => {
    return (
        <div className={`${S.header}`}>
            <div className="container">
                <h3 className=' text-center font-bold text-2xl md:text-5xl mb-3 text-white w-full lg:w-2/3 mx-auto'>
                    Join us in shaping the future of mining
                </h3>
                <div className='flex-center mt-5'>
                    <button className=' button text-2xl'>
                        <span className='button-inner text-2xl font-semibold'>Proceed</span>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JoinUs