import GetStarted from "./GetStarted";
import Image from "next/image";
import TextTag from "./TextTag";
import { AnimateView } from './AnimatevVew';

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

            <div className="bg-transparent p-10"
                style={{
                    perspective: 1200,
                }}
            >
                <AnimateView xRotate={20} customduration={2} delay={1}>
                    <Image
                        alt="DashBoard"
                        src={'https://framerusercontent.com/images/YfpxEw5tHPFWqQRWN3grTFME.jpg?scale-down-to=2048'}
                        width={100}
                        height={100}
                        className="h-full w-full rounded-3xl"
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    />
                </AnimateView>
            </div>

        </div >
    )
}