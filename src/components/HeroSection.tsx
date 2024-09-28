"use client"
import GetStarted from "./GetStarted";
import Image from "next/image";
import TextTag from "./TextTag";
import { AnimateView } from './AnimatevVew';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className="grid place-content-center relative pt-52 bg-gradient-to-tr from-[#000] to-[#262724] px-24">
            <AnimateView yaxis={50} customduration={1.2}>
                <TextTag text="AWS on Steroids" />
            </AnimateView>
            <AnimateView yaxis={50}>
                <div className="text-[3.5em] font-mono grid place-content-center font-semibold">
                    <span className="grid place-content-center">
                        {"Why pay more?"}
                    </span>
                    <span className="grid place-content-center">
                        {"The cloud just got way cheaper!"}
                    </span>
                </div>
            </AnimateView>
            <AnimateView yaxis={50} customduration={1.2}>
                <div className="text-[#858584] font-semibold">
                    <span className="grid place-content-center">
                        Spend less, do more.
                    </span>
                    <span className="grid place-content-center">
                        Unlock hidden savings in your cloud, effortlessly.
                    </span>
                </div>
            </AnimateView>

            <AnimateView yaxis={50} customduration={1.2}>
                <div className="flex justify-center gap-4 p-10">
                    <GetStarted varient="" text="View Demo" />
                    <GetStarted varient="arrow" text="Get Started" />
                </div>
            </AnimateView>

            <div className="bg-transparent p-10">
                <motion.div
                    initial={{ opacity: .5, y: 0, rotateX: 30, rotateY: 0, rotateZ: 0, offset: 0, }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0, offset: 30 }}
                    transition={{
                        type: 'spring',    // Use spring transition for the effect
                        duration: 2,
                    }}
                >
                    <Image
                        alt="DashBoard"
                        src={'/Dashboard.png'}
                        width={100}
                        height={100}
                        className="h-full w-full rounded-3xl"
                    />
                </motion.div>
            </div>

        </div >
    )
}