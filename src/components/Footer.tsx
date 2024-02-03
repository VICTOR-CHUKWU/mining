import React from 'react'
import Image from 'next/image'
import { SVGIcon } from './shared'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className='bg-teal py-8'>
            <div className=' container'>
                <div className=' flex justify-between flex-wrap gap-3 border-b-[1px] border-white pb-3'>
                    <div className=' w-[58%] md:w-[30%] text-white shrink-0 flex flex-col gap-5'>
                        <Link href='/' className=" relative">
                            <Image
                                src="/img/logo.png"
                                alt="logo"
                                width={60}
                                height={0}
                            />
                        </Link>
                        <p className=' text-sm '>Mining Today for a Sustainable Tomorrow: Crafting a Legacy Beneath the Surface.</p>
                        {/* <div className=' flex items-center gap-6'>
                            <Link href='/' className=" relative cursor-pointer" >
                                <SVGIcon name='face-book' size='tiny' className=' text-white' />
                            </Link>
                            <Link href='/' className=" relative cursor-pointer">
                                <SVGIcon name='instagram' size='tiny' className=' text-white' />
                            </Link>
                        </div> */}
                    </div>

                    <div className=' w-[38%] md:w-[20%] text-white shrink-0'>

                        <h4 className=' text-lg mb-5'>Links</h4>
                        <div className=' flex flex-col gap-3 '>
                            <Link href='/about' className=" relative text-sm">About Us</Link>
                            <Link href='/products' className=" relative text-sm">Products</Link>
                            <Link href='/contact' className=" relative text-sm">Contact Us</Link>
                        </div>
                    </div>

                    <div className=' w-[48%] md:w-[20%] text-white shrink-0'>

                        <h4 className=' text-lg mb-5'>Services</h4>
                        <div className=' flex flex-col gap-3 '>
                            <span className=" relative text-sm">Mining Ores</span>
                            <span className=" relative text-sm">Mining Minerals</span>
                            <span className=" relative text-sm">Selling Products</span>
                        </div>
                    </div>
                    <div className=' w-[48%] md:w-[20%] text-white shrink-0'>

                        <h4 className=' text-lg mb-5'>Contact</h4>
                        <div className=' flex flex-col gap-3 '>
                            <span className=" relative text-sm">call - +234 (0) 8030796358</span>
                            <span className=" relative text-sm">4a Maman Nasir Street, Asokoro, Abuja-Nigeria </span>
                        </div>
                    </div>

                </div>
                <div className="text-sm text-white text-center pt-6">
                    Copyright &copy; {new Date().getFullYear()} by <strong >Albarika</strong>. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer