import React from 'react'
import { Header, About, Expertise, HowWeWork, OurWork, Testimonial } from '@/components/home'

const HomePage = () => {
    return (
        <div>
            <Header />
            <About />
            <Expertise />
            <HowWeWork />
            <OurWork />
            <Testimonial />
        </div>
    )
}

export default HomePage