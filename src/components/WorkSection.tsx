import Image from "next/image";
import Text4 from "./Text4";
import TextTag from "./TextTag";
import GetStarted from "./GetStarted";

export default function WorkSection() {
    return (
        <div className="grid place-content-center text-center p-32">
            <TextTag text="working" />
            <Text4 text="How 100xBoost Saves You Money" />
            <span className="text-xl text-[#ffffff30] px-80">
                {"At 100xBoost, we combine cutting-edge technology with smart strategies to make cloud services more affordable without sacrificing performance."}
            </span>
            <div className="grid place-content-center p-8">
                <GetStarted text="Learn More" varient="" />
            </div>


            <div className="grid place-content-center grid-cols-2  p-32 gap-10">

                <div className="grid place-content-start row-span-2 border relative p-4 gap-4 rounded-2xl h-[65vh]"
                    style={{
                        boxShadow: "inset 2px 2px 20px 10px #191919"
                    }}
                >
                    <span className="text-xl font-bold">
                        {"Group Saving Model"}
                    </span>
                    <span className="text-[#ffffff30]">
                        {"We leverage the power of collective bargaining by pooling multiple customers together. This allows us to negotiate better pricing from cloud providers like AWS, passing the savings directly to you. By using this group savings model, you pay significantly less for the same cloud resources that large enterprises benefit from."}
                    </span>
                    <Image
                        src={"/groupsavings.png"}
                        alt="Group Buying"
                        layout="fill"
                        objectFit="cover"
                        className="absolute bottom-0"
                    />
                </div>

                <div className="grid row-span-1 border p-4 gap-4 rounded-2xl"
                    style={{
                        boxShadow: "inset 2px 2px 20px 20px #ffffff10"
                    }}
                >
                    <span className="text-xl font-bold">
                        {"Group Saving Model"}
                    </span>
                    <span className="text-[#ffffff30]">
                        {"We leverage the power of collective bargaining by pooling multiple customers together. This allows us to negotiate better pricing from cloud providers like AWS, passing the savings directly to you. By using this group savings model, you pay significantly less for the same cloud resources that large enterprises benefit from."}
                    </span>
                </div>


                <div className="grid row-span-1 border p-4 gap-4 rounded-2xl"
                    style={{
                        boxShadow: "inset 2px 2px 20px 10px #ffffff10"
                    }}
                >
                    <span className="text-xl font-bold">
                        {"Group Saving Model"}
                    </span>
                    <span className="text-[#ffffff30]">
                        {"We leverage the power of collective bargaining by pooling multiple customers together. This allows us to negotiate better pricing from cloud providers like AWS, passing the savings directly to you. By using this group savings model, you pay significantly less for the same cloud resources that large enterprises benefit from."}
                    </span>
                </div>
            </div>
        </div >
    )
}