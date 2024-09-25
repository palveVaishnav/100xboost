import { ArrowUpIcon } from "@radix-ui/react-icons";

export default function GetStarted({ varient, text }: { varient: "arrow" | "ghost" | "", text: string }) {
    return (
        <div>
            <a className={`
                p-3 px-6 rounded-md  font-semibold w-fit flex items-center gap-2
                ${varient === "arrow" ? "bg-[#45b31f] text-black" : "border border-slate-600"}
            `}>
                {text}
                {varient === "arrow" &&
                    <ArrowUpIcon className="rotate-45" />
                }
            </a>
        </div>
    )
}