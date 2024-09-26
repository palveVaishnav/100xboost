import Logo from "./Logo";
import GetStarted from "./GetStarted";

export default function Navigation() {
    return (
        <div className="w-full flex justify-between overflow-hidden items-center h-full p-4 bg-black z-50">
            <div>
                <Logo />
            </div>
            <div className="flex gap-4">
                <a>Customers</a>
                <a>Learn More</a>
                <a>Why Us</a>
                <a>Pricing</a>
            </div>
            <GetStarted varient="arrow" text="Get Started" />
        </div>
    );
}
