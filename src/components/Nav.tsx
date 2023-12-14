'use client'
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PhoneIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { navMenuItems } from "@/data";

const Nav = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [scrolledDown, setScrolledDown] = useState(false);
    const [scrolledUp, setScrolledUp] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const closeSideBar = (url: string) => {
        router.push(`${url}`);
        setSidebarOpen(false);
    };

    const renderNavItems = useCallback((el: string) => {
        const [name, url] = el.split("|");
        return (
            <Link
                key={url}
                href={url}
                className={`nav-menu-item pb-1 text-lg ${pathname === url || (pathname === '/' && url === '/')
                    ? "active"
                    : ""
                    }`}
            >
                {name}
            </Link>
        );
    }, [pathname]);

    const renderSideNavItems = useCallback((el: string) => {
        const [name, url] = el.split("|");
        return (
            <span
                key={url}
                onClick={() => closeSideBar(url)}
                className={`nav-menu-item ${pathname === url || (pathname === '/' && url === '/')
                    ? "active"
                    : ""
                    }`}
            >
                {name}
            </span>
        );
    }, [pathname]);
    let lastScrollY = 0;

    const handleScroll: EventListener = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY == 0) {
            setScrolledDown(false)
            setScrolledUp(false)
        } else if (currentScrollY > lastScrollY) {
            // Scrolling down
            setScrolledDown(true)
            setScrolledUp(false)
        } else {
            // Scrolling up
            setScrolledDown(false)
            setScrolledUp(true)
        }

        lastScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section className={` fixed w-full py-1 md:py-3 z-40 Nav ${scrolledDown ? " hide" : scrolledUp ? 'bg-theme-teal-opac-8 text-white' : "bg-white"}`}>
                <nav
                    className={`container flex items-center justify-between relative `}
                >
                    <Link href='/' className=" relative">
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={60}
                            height={0}
                        />
                    </Link>
                    <span className="hidden md:flex items-center gap-14">
                        {navMenuItems.map(renderNavItems)}
                    </span>
                    {/* <span className="hidden md:flex items-center">
                        <a href="tel:+234 80 3619 0155" className=" button font-semibold">
                            <PhoneIcon className="pointer-events-none text-white w-5 h-5  mr-1" />
                            Contact us</a>
                    </span> */}
                    <span onClick={() => setSidebarOpen(!sidebarOpen)} className=" flex items-center justify-center w-9 h-9 rounded-full bg-slate-50 md:hidden">
                        <Bars3Icon className="pointer-events-none text-slate-700 w-5 h-5  mr-1" />
                    </span>
                </nav>
            </section>
            <div
                className={`side-bar text-white block md:hidden ${sidebarOpen && "show-side-bar"}`}
            >
                <div className=" flex items-end justify-end">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className=" rounded-full w-8 h-8 bg-red-500 flex items-center justify-center outline-none border-0 cursor-pointer"
                    >
                        <span className="text-white font-bold text-lg">x</span>
                    </button>
                </div>
                <div className=" w-full h-full flex mt-8 flex-col gap-5">
                    {navMenuItems.map(renderSideNavItems)}
                    {/* <span className="flex flex-col gap-10">
                        <Container as="span" className="flex md:hidden items-center">
                            <a href="tel:+234 80 3619 0155" className=" button font-semibold">
                                <PhoneIcon className="pointer-events-none text-white w-5 h-5  mr-1" />
                                Contact us</a>
                        </Container>
                    </span> */}
                </div>
            </div>
        </>
    );
};

export default Nav;
