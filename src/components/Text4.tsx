import { AnimateView } from "./AnimatevVew";

export default function Text4({ text }: { text: string }) {
    return (
        <AnimateView customduration={1.3}>
            <span className="text-[4em] font-bold grid place-content-center" >{text}</span>
        </AnimateView>
    )
}