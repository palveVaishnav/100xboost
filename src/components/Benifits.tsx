import Image from "next/image";
import GetStarted from "./GetStarted";
import Text4 from "./Text4";
import TextTag from "./TextTag";

export default function Benifits() {
    return (
        <div className="grid place-items-center p-4 px-20 text-center">
            <TextTag text="benifits" />
            <Text4 text="Instant Cost Savings" />
            <span className="textSecondary">
                {"By analyzing your current cloud usage, 100xBoost identifies areas where you’re overpaying and suggests optimizations to save you money without compromising on performance."}
            </span>
            <div className="grid w-full p-20 gap-10">
                {featureItems.map((feature, index) => (
                    <div
                        className={`
                                flex w-full p-20 rounded-2xl gap-8
                                ${index % 2 !== 0 ? 'flex-row-reverse' : ''} 
                                bg-gradient-to-tl from-[#000] to-[#ffffff10]        
                        `}
                        key={index}
                    >
                        <div className="grid place-content-center gap-2 flex-1 ">
                            <div className="flex justify-start">
                                <TextTag text={feature.tag} />
                            </div>
                            <div className="text-[4em] font-bold text-left">
                                {feature.title}
                            </div>
                            <span className="text-left text-[#ffffff30]">
                                {feature.desc}
                            </span>
                            <GetStarted text={'Get Started'} varient="" />
                        </div>

                        <div className="grid place-content-center relative flex-1">
                            <Image
                                src={feature.image}
                                alt="Benifit Image"
                                width={500}
                                height={10}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const featureItems = [
    {
        tag: "Integration",
        title: "Seamless AWS Integration",
        desc: "With a simple connection to your AWS account, 100xBoost provides real-time insights into your cloud spending and resource allocation, making it easy to monitor and manage usage.",
        image: "https://framerusercontent.com/images/AkhwmIxpG19kDofdCqZOXNbBw.png"
    },
    {
        tag: "Scalability",
        title: "Scalable Solutions for Any Business",
        desc: "Whether you're a small startup or a large enterprise, 100xBoost scales to meet your needs, offering customized recommendations based on your unique cloud usage.",
        image: "https://framerusercontent.com/images/C035WTjq26WdHZwmR1zAssXUVk.png"
    },
    {
        tag: "Transparency",
        title: "Effortless Billing Management",
        desc: "Keep track of your cloud expenditures, with clear comparisons of your costs before and after joining the platform, ensuring total transparency in your cloud spend.",
        image: "https://framerusercontent.com/images/3XaL4TeAqkKr15EfDOmt4MbKlE.png"
    },
    {
        tag: "Collaboration",
        title: "Group Buying Power",
        desc: "Maximize savings through group buying opportunities, where you can join forces with other companies to leverage discounted pricing on cloud services.",
        image: "https://framerusercontent.com/images/AkhwmIxpG19kDofdCqZOXNbBw.png"
    },
    {
        tag: "Flexibility",
        title: "No Commitment",
        desc: "Get started with no upfront costs or long-term contracts. 100xBoost is designed to deliver value quickly, with immediate savings from the moment you connect your cloud account.",
        image: "https://framerusercontent.com/images/C035WTjq26WdHZwmR1zAssXUVk.png"
    }
];
