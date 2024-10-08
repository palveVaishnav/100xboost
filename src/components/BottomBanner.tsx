import Image from "next/image";
import GetStarted from "./GetStarted";
import Text4 from "./Text4";
import { AnimateView } from "./AnimatevVew";

export default function BottomBanner() {
    return (
        <div className="p-20 bg-gradient-to-tr from-black to-[#ffffff10] pt-10 rounded-xl">
            <div className="h-full gap-2 bg-gradient-to-tr from-black to-[#ffffff20] pt-10 rounded-3xl mt-10">
                <Text4 text="Stop overpaying for the cloud" />
                <Text4 text="100x your savings today!" />
                <div className="flex p-4 justify-center">
                    <GetStarted text="Get Started" varient="arrow" />
                </div>
                <div className="px-24 mt-20"
                    style={{
                        perspective: 1200,
                    }}
                >
                    <AnimateView xRotate={30} delay={0.3} opacity={1}>
                        <Image
                            alt="DashBoard"
                            src={'https://framerusercontent.com/images/YfpxEw5tHPFWqQRWN3grTFME.jpg'}
                            width={100}
                            height={100}
                            className="h-full w-full overflow-hidden rounded-3xl"
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        />
                    </AnimateView>
                </div>
            </div>

        </div>
    )
}