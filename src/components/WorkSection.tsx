import Text4 from "./Text4";
import TextTag from "./TextTag";

export default function WorkSection() {
    return (
        <div className="grid place-content-center h-screen text-center">
            <TextTag text="working" />
            <Text4 text="How 100xBoost Saves You Money" />
            <span className="text-xl text-[#ffffff30] px-80">
                {"At 100xBoost, we combine cutting-edge technology with smart strategies to make cloud services more affordable without sacrificing performance."}
            </span>
            <div className="grid place-content-center grid-cols-2">
                <div className="grid row-span-2">

                </div>

            </div>
        </div>
    )
}