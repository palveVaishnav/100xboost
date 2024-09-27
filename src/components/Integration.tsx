import { AnimateView } from "./AnimatevVew";
import GetStarted from "./GetStarted";
import TextTag from "./TextTag";
import { Cpu, Database, Globe, Globe as Lambda, Server, HardDrive } from "lucide-react"

export default function Integration() {
    return (
        <div>
            <div
                className={"flex w-full p-20 gap-8"}
            >
                <div className="grid place-content-center gap-2 flex-1 ">
                    <div className="flex justify-start">
                        <TextTag text={"integration"} />
                    </div>
                    <AnimateView>
                        <div className="text-[4em] font-bold text-left">
                            {"Empowering Your Cloud Experience with AWS"}
                        </div>
                    </AnimateView>
                    <AnimateView>
                        <span className="text-left text-[#ffffff30]">
                            {"At 100xBoost, we support a range of Amazon Web Services (AWS) to deliver scalable, efficient, and cost-effective cloud solutions tailored to your needs. Discover the key AWS services we utilize to enhance your business operations."}
                        </span>
                    </AnimateView>
                    <AnimateView delay={0.5}>
                        <GetStarted text={'Get Started'} varient="" />
                    </AnimateView>
                </div>

                <div className="grid place-content-center relative flex-1">
                    <AWSServicesGrid />
                </div>
            </div>
        </div>
    )
}

const services = [
    {
        name: "EC2 (Elastic Compute Cloud)",
        description: "Scalable virtual servers for flexible computing capacity.",
        icon: <Cpu className="h-8 w-8 text-orange-500" />,
    },
    {
        name: "S3 (Simple Storage Service)",
        description: "Secure and scalable object storage for data management.",
        icon: <HardDrive className="h-8 w-8 text-green-500" />,
    },
    {
        name: "DynamoDB",
        description: "Fully managed NoSQL database with fast and predictable performance.",
        icon: <Database className="h-8 w-8 text-purple-500" />,
    },
    {
        name: "RDS (Relational Database Service)",
        description: "Managed relational databases for seamless data handling.",
        icon: <Server className="h-8 w-8 text-pink-500" />,
    },
    {
        name: "CloudFront",
        description: "Fast content delivery network for optimal performance.",
        icon: <Globe className="h-8 w-8 text-indigo-500" />,
    },
    {
        name: "Lambda",
        description: "Serverless computing for executing code in response to events.",
        icon: <Lambda className="h-8 w-8 text-orange-500" />,
    },
]

function ServiceCard({ service }: {
    service: {
        name: string
        description: string,
        icon: JSX.Element,
    }
}) {
    return (
        <div className="bg-[#151516] rounded-2xl p-4 h-full w-full">
            <div>
                <div className="mb-2">{service.icon}</div>
                <div className="text-white text-lg">{service.name}</div>
            </div>
            <div>
                <p className="text-[#ffffff40] text-sm">{service.description}</p>
            </div>
        </div>
    )
}

function AWSServicesGrid() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <AnimateView key={index} delay={index * 0.3} yaxis={20}>
                        <ServiceCard service={service} />
                    </AnimateView>
                ))}
            </div>
        </div>
    )
}