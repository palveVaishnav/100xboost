"use client"
import { motion } from "framer-motion";

export default function Framer() {
    return (
        <div className="grid place-content-center h-screen">
            {/* Container */}
            <motion.div
                className="relative w-[40em] h-[60vh] border-dotted p-2"
                style={{
                    perspective: 1000,
                }}
            >
                {/* Inner Box */}
                <motion.div
                    className="absolute w-full h-full bg-transparent border-dashed p-2"
                    initial={{ rotateX: 20 }} // Start rotation
                    whileInView={{ rotateX: 0 }} // End rotation
                    transition={{ duration: 2, delay: 0.1 }} // Transition effects
                    style={{
                        transformStyle: "preserve-3d",
                        backgroundImage: `url("/Dashboard.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Image */}
                    {/* <motion.div
                        className="absolute w-full h-full border"
                        style={{
                            backgroundImage: `url("/Dashboard.png")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></motion.div> */}
                </motion.div>
            </motion.div>
        </div>
    );
}