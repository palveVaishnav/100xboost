import Image from "next/image";
import Text4 from "./Text4";
import TextTag from "./TextTag";
import GetStarted from "./GetStarted";
import { AnimateView } from "./AnimatevVew";

export default function WorkSection() {
    return (
        <div className="grid place-content-center text-center p-32">
            <TextTag text="working" />
            <Text4 text="How 100xBoost Saves You Money" />
            <span className="text-xl text-[#ffffff30] px-80">
                <AnimateView yaxis={20} customduration={1.5}>
                    <p>At 100xBoost, we combine cutting-edge technology with smart strategies to make cloud services more affordable without sacrificing performance.</p>
                </AnimateView>
            </span>
            <AnimateView yaxis={20} customduration={1.5}>
                <div className="grid place-content-center p-8">
                    <GetStarted text="Learn More" varient="" />
                </div>
            </AnimateView>


            <AnimateView yaxis={50} delay={0.5} opacity={1}>
                <div className="grid place-content-center grid-cols-2  px-32 gap-6">
                    <div className="grid place-content-start row-span-2  relative p-6 gap-4 rounded-2xl h-[80vh] overflow-hidden text-left"
                        style={{
                            boxShadow: "inset 2px 2px 20px 10px #191919"
                        }}
                    >
                        <span className="text-xl font-bold text-left">
                            {"Group Saving Model"}
                        </span>
                        <span className="text-[#ffffff30] mt-10">
                            {"We leverage the power of collective bargaining by pooling multiple customers together. This allows us to negotiate better pricing from cloud providers like AWS, passing the savings directly to you. By using this group savings model, you pay significantly less for the same cloud resources that large enterprises benefit from."}
                        </span>
                        <Image
                            src={"/groupsavings.png"}
                            alt="Group Buying"
                            layout="fill"
                            objectFit="cover"
                            className="absolute bottom-0 pt-2s0"
                        />
                    </div>

                    <div className="grid row-span-1  p-6 gap-4 rounded-2xl"
                        style={{
                            boxShadow: "inset 2px 2px 20px 20px #ffffff10"
                        }}
                    >
                        <span className="text-xl font-bold text-left">
                            {"Resource Sharing"}
                        </span>
                        <span className="text-[#ffffff30] text-left">
                            {"Our platform optimizes the usage of cloud resources by intelligently allocating capacity across users. By dynamically adjusting based on demand, we ensure that unused resources are efficiently shared among our clients, reducing costs while maintaining high performance. This resource-sharing strategy minimizes waste, so you only pay for what you actually need."}
                        </span>
                    </div>


                    <div className="grid row-span-1  p-6 gap-4 rounded-2xl"
                        style={{
                            boxShadow: "inset 2px 2px 20px 10px #ffffff10"
                        }}
                    >
                        <span className="text-xl font-bold text-left">
                            {"AI-Driven Optimization"}
                        </span>
                        <span className="text-[#ffffff30] text-left">
                            {"Our AI algorithms continuously monitor and optimize your cloud usage. We identify patterns in resource consumption and automatically adjust configurations to maximize efficiency, prevent over-provisioning, and further reduce costs. The AI also predicts future usage to help you scale seamlessly, ensuring your cloud setup is always running at peak efficiency."}
                        </span>
                    </div>
                </div>
            </AnimateView>
        </div >
    )
}