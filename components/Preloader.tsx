'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect, useState } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1280); // xl breakpoint for desktop only
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useGSAP(
        () => {
            if (!isMounted || !isDesktop) return;

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to('.preloader-item', {
                delay: 1,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.5')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<1',
                );
        },
        { scope: preloaderRef, dependencies: [isMounted, isDesktop] },
    );

    if (!isMounted || !isDesktop) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[6] flex" ref={preloaderRef}>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>

            <p className="name-text flex text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
                <span className="inline-block translate-y-full">D</span>
                <span className="inline-block translate-y-full">H</span>
                <span className="inline-block translate-y-full">A</span>
                <span className="inline-block translate-y-full">M</span>
                <span className="inline-block translate-y-full">O</span>
                <span className="inline-block translate-y-full">D</span>
                <span className="inline-block translate-y-full">H</span>
                <span className="inline-block translate-y-full">A</span>
                <span className="inline-block translate-y-full">R</span>
                <span className="inline-block translate-y-full">A</span>
                <span className="inline-block translate-y-full">N</span>
            </p>
        </div>
    );
};

export default Preloader;
