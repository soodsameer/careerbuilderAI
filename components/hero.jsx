"use client";

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'

const HeroSection = () => {

   const imageRef = useRef(null);

   useEffect(()=> {

        const imageElement = imageRef.current;

        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;

        if(scrollPosition>scrollThreshold)
        {
            imageElement.classList.add("scrolled");
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
    }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
        <div className="space-y-6 text-center">
            <div className="space-y-6 mx-auto">
                <h1 className=" text-5xl font-bold md:text-6xl lg:text-7xl gradient-title xl:text-8xl">Your AI Career Coach for <br />
                Proffesional Success
                </h1>
                <p className="max-auto text-muted-foreground md:text-x1">
                    Advance your career with personalized guidance, <br /> interview prep, and 
                    AI-powered tools for job success.
                </p>
            </div>

            <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        Dashboard
                    </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/soodsa/">
                    <Button size="lg" className="px-8" variant="outline">
                        About Developer
                    </Button>
                </Link>
            </div>

            <div className="hero-image-wrapper mt-5 md:mt-0">
                <div ref={imageRef}>
                    <Image 
                    src={"/banner.jpeg"} 
                    width={1280}
                    height={720}
                    alt="Banner Preview"
                    className="rounded-lg shado border mx-auto"
                    priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection