import Image from "next/image";
import Text4 from "./Text4";
import TextTag from "./TextTag";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const serviceItems = [
    {
        image: "/awsService.png",
        title: "AWS Account Integration",
        description: "Easily connect your AWS account for seamless cost tracking and resource management.",
        pageLink: ""
    },
    {
        image: "/awsService.png",
        title: "Smart Cloud Insights",
        description: "Get instant visibility into your current cloud usage, costs, and resource allocation.",
        pageLink: ""
    },
    {
        image: "/awsService.png",
        title: "Group Buying Optimization",
        description: "Join cost-saving groups to leverage collective purchasing power for discounted pricing.",
        pageLink: ""
    },
    {
        image: "/awsService.png",
        title: "Detailed Cost Explorer",
        description: "Track and analyze your AWS expenditures over time with intuitive and easy-to-read charts.",
        pageLink: ""
    },
    {
        image: "/awsService.png",
        title: "Automated Resource Optimization",
        description: "Automatically identify underutilized resources and optimize them for better efficiency.",
        pageLink: ""
    },
    {
        image: "/awsService.png",
        title: "Custom Alerts & Notifications",
        description: "Set alerts for spending thresholds and receive notifications on potential savings opportunities.",
        pageLink: ""
    },
    {
        image: "/awsService.png",
        title: "No Long-Term Commitment",
        description: "Start optimizing your cloud with no contracts or upfront costs—just instant savings.",
        pageLink: ""
    }
];


export default function FeatureSection() {
    return (
        <div className="grid place-content-center text-center bg-gradient-to-tl from-[#000] to-[#262724] px-24 pt-20">
            <TextTag text="FEATURES" />
            <div className="px-32">
                <Text4 text="Discover the Power of 100xBoost: Features Built for Cloud Optimization" />
                <div className="text-[#ffffff40] px-32 text-xl flex justify-center">
                    100xBoost offers powerful tools to optimize your cloud usage and reduce costs.
                    With seamless AWS integration, real-time insights, automated resource optimization,
                    and group buying power, it simplifies cloud management while maximizing savings.
                    Take control of your cloud infrastructure effortlessly and boost your efficiency 100x!
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
                {serviceItems.map((item) => (
                    <div className="grid text-left p-4 gap-4 hover:shadow-md hover:shadow-[#ffffff10] rounded-xl cursor-pointer transition-all ease-in-out duration-500" key={item.title}>
                        <>
                            <Image
                                src={item.image}
                                alt="Feature image"
                                width={100}
                                height={100}
                                className="w-20 h-12 rounded-md overflow-hidden"
                            />
                            <span className="text-xl font-bold">
                                {item.title}
                            </span>
                            <span className="text-[#ffffff40]">
                                {item.description}
                            </span>
                            <a className="flex items-center gap-2 hover:underline p-2" href={item.pageLink}>
                                Learn More
                                <ArrowUpIcon className="rotate-45" fontSize={16} />
                            </a>
                        </>
                    </div>
                ))}
            </div>
        </div>
    )
}
