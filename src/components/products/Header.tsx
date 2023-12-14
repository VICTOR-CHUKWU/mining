import React from 'react'

const Header = () => {
    return (
        <div className="pt-32">
            <div className="container">
                <div className=" w-full md:w-1/2 flex flex-col gap-3">
                    <h5 className=" text-black font-light mb-1 md:mb-3 text-lg md:text-2xl">
                        Products
                    </h5>
                    <h2 className=" text-black text-xl md:text-3xl mb-2 md:mb-4 font-semibold">
                        Mineral resources
                    </h2>
                    <p className=" mb-2 text-sm md:text-base text-left">
                        Lorem ipsum dolor sit amet consectetur. Ac purus id euismod accumsan
                        et sit varius maecenas pellentesque. Ac in ultricies convallis
                        platea a in bibendum sagittis risus. Placerat nunc est ante nunc.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header