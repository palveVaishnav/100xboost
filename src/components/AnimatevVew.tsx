"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export const AnimateView = ({
    children,
    opacity,
    customduration,
    delay,
    yaxis,
    scale,
    zRotate,
    xRotate,
    yRotate,
}: {
    children: JSX.Element,
    opacity?: number,
    customduration?: number,
    delay?: number,
    scale?: number,
    yaxis?: number,
    xRotate?: number,
    yRotate?: number,
    zRotate?: number,
}) => {
    const ref = useRef(null);
    return (
        <motion.div
            ref={ref}
            whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1,
            }}
            initial={{
                opacity: opacity || 0,
                y: yaxis || 0,
                scale: scale || 1,
                rotateX: xRotate || 0,
                rotateY: yRotate || 0,
                rotateZ: zRotate || 0,
            }}
            transition={{
                duration: customduration || 1,
                ease: 'easeInOut',
                delay: delay || 0,
            }}
        >
            {children}
        </motion.div>
    );
};

