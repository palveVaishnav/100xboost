"use client";
import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

export default function FAQs() {
    const [answer, showAnswer] = useState(0);

    return (
        <div className="grid place-content-center w-full p-20">
            <span className="text-[4em] text-[#ffffff20]">FAQ</span>

            {faqs.map((qa, index) => (
                <div className="p-4 w-full" key={index}>
                    <div
                        className={`p-2 flex gap-2 items-center cursor-pointer ${answer === index ? 'text-[#ffffff30]' : ''}`}
                        onClick={() => showAnswer(answer === index ? 0 : index)} // Toggle logic
                    >
                        {answer === index ? <Cross2Icon /> : <PlusIcon />}
                        <span>{qa.question}</span>
                    </div>
                    <AnimatePresence>
                        {answer === index && (
                            <motion.div
                                className="ml-10 p-2 w-full"
                                initial={{ height: 0, opacity: 0 }} // Initial state for animation
                                animate={{ height: 'auto', opacity: 1 }} // Animate to auto height and full opacity
                                exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }} // Animate out
                                transition={{ duration: 0.2 }} // Transition duration
                            >
                                <span>{qa.answer}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}

        </div>
    );
}

const faqs = [
    {
        question: "What is 100xBoost?",
        answer: "100xBoost is a cloud optimization platform that connects to your AWS account and helps you reduce costs through real-time insights, resource optimization, and group buying power."
    },
    {
        question: "How does 100xBoost reduce cloud costs?",
        answer: "100xBoost analyzes your AWS usage to identify underutilized resources, suggests optimizations, and connects you with cost-saving groups to leverage discounted pricing."
    },
    {
        question: "What cloud services does 100xBoost support?",
        answer: "Currently, 100xBoost focuses on AWS services and provides detailed insights into billing, usage, and resource allocation for various AWS services."
    },
    {
        question: "Is my AWS account data secure with 100xBoost?",
        answer: "Yes, 100xBoost uses read-only access through secure IAM roles to retrieve data and implements best practices to ensure your account and data remain secure."
    },
    {
        question: "How do I connect my AWS account to 100xBoost?",
        answer: "Simply click the 'Connect AWS' button, and 100xBoost will create a read-only IAM role in your account to pull billing and usage data automatically."
    },
    {
        question: "What level of access does 100xBoost need to my AWS account?",
        answer: "100xBoost requires read-only access to your AWS billing, usage, and resource data. It uses a secure IAM role with policies that restrict it from making any changes to your resources."
    },
    {
        question: "Can I track my cloud spending over time?",
        answer: "Yes, 100xBoost provides detailed spending reports, including historical and real-time data, allowing you to compare past and current expenditures."
    },
    {
        question: "Do I need to be part of a group to benefit from 100xBoost?",
        answer: "While joining a group can maximize savings through group buying power, you can still benefit from individual cost optimizations without being part of a group."
    },
    {
        question: "How much does it cost to use 100xBoost?",
        answer: "100xBoost offers flexible pricing with no long-term contracts. You only pay for the value you receive, with immediate cost savings starting from day one."
    },
    {
        question: "Can I cancel at any time?",
        answer: "Yes, there are no long-term commitments with 100xBoost. You can disconnect your AWS account or stop using the platform whenever you like."
    },
    {
        question: "How does group buying work on 100xBoost?",
        answer: "Group buying enables companies to combine their purchasing power to get bulk discounts on AWS services. 100xBoost automatically matches you with groups based on your cloud usage and needs."
    },
    {
        question: "What kind of savings can I expect with 100xBoost?",
        answer: "Savings vary depending on your current cloud usage, but 100xBoost typically helps users reduce costs by optimizing resource allocation and providing access to discounted group pricing."
    }
];