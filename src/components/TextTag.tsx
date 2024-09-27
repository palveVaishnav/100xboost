import { CircleIcon } from "@radix-ui/react-icons";
import { AnimateView } from "./AnimatevVew";
export default function TextTag({ text }: { text: string }) {
    return (
        <AnimateView opacity={0} customduration={2}>
            <div className="flex justify-center">
                <span className="bg-[#313230] rounded-md px-2 py-0 flex items-center gap-3 font-mono text-[#ffffff80]">
                    <CircleIcon className="bg-green-400 rounded-full w-1 h-1" />
                    {text.toUpperCase()}
                </span>
            </div>
        </AnimateView>
    )
}