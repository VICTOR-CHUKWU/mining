import { IExpertProject, IService } from "@/types"

export const navMenuItems = [
    'Home|/',
    'About Us|/about',
    'Products|/products',
    'FAQ|/faqs',
    'Contact Us|/contact',
]

export const EXPERTISE: IExpertProject[] = [
    {
        img: '/img/home/expert1.png',
        name: 'EXPLORATION SERVICES',
        description: `we offer comprehensive exploration services tailored to support your mining project. Our team excels in reviewing, assessing, designing, and implementing exploration programs, providing a full range of geological, mining engineering, and environmental services.`
    },

    {
        img: '/img/home/gallery/drilling.jpg',
        name: 'DRILLING and BLASTING',
        description: `Good drilling and blasting are like the foundation of a strong building—they improve the quality of the holes we make and how we blast, which, in turn, makes loading, hauling, and crushing rocks much better. At Albarika Mining, we're experts in drilling and blasting.
        `
    },

    {
        img: '/img/home/gallery/mining-excavator-night.jpg',
        name: 'EXCAVATION',
        description: `At Albarika Mining, we provide comprehensive excavation services for construction and landscaping projects. Using a range of equipment, from small skid steers to large excavators and bulldozers, we shape the land to your exact specifications.
        `
    },
]

export const proccess = [
    {
        text: 'Collaborative Planning: Before breaking ground, our geologists and engineers work collaboratively.'
    },
    {
        text: 'Virtual Mine Planning Systems: We use advanced virtual systems for mine planning.'
    },
    {
        text: 'Optimal Design: Our approach ensures the design of optimal mine plans.'
    },
    {
        text: 'Environmental Excellence: Our plans are designed to be environmentally sound.'
    },
]

export const SERVICES: IService[] = [
    {
        icon: 'research',
        name: 'Research and Mining',
        description: 'our geologists uncover new mineral sources, leveraging over a century of mining expertise for responsible and sustainable extraction.'
    },
    {
        icon: 'design',
        name: 'Design and Planning',
        description: `Beyond mining's life cycle, we meticulously design with the future in mind.`
    },
    {
        icon: 'production',
        name: 'Rise and Production',
        description: 'raw materials undergo processing, conversion, and refining.'
    },
    {
        icon: 'closure',
        name: 'Closure and Reform',
        description: 'transforms mining sites into sustainable legacies for future generations.'
    },
]

export const MININGEXCELENCE = ['/img/home/gallery/blasting.jpg', '/img/home/gallery/drilling.jpg', '/img/home/gallery/equipment.jpg', '/img/home/gallery/extraction.jpg', '/img/home/gallery/iro-ore-mining.jpg', '/img/home/gallery/mining-site.jpg', '/img/home/gallery/on-site.jpg', '/img/home/gallery/Upclose-Excavator.jpg']
