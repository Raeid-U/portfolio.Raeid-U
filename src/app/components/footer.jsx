import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {
    const handleDiscordClick = () => {
        const discordTag = "ignlance";
        navigator.clipboard.writeText(discordTag);
        window.alert(`Discord tag "${discordTag}" copied to clipboard!`);
    };

    const handlePhoneClick = () => {
        const phoneNumber = "+1 (647) 451-4036";
        navigator.clipboard.writeText(phoneNumber);
        window.alert(`Phone number "${phoneNumber}" copied to clipboard!`);
    };

    const handleEmailClick = () => {
        const email = "raeidus15@gmail.com";
        navigator.clipboard.writeText(email);
        window.alert(`Email "${email}" copied to clipboard!`);
    };

    const [leftRef, leftInView] = useInView();
    const [rightRef, rightInView] = useInView();

    return (
        <div id="contact" className="bg-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                <h1 className="text-blue-600 text-2xl sm:text-3xl font-bold text-center mb-8">Get in Touch with Me!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
                    <div className="p-4 sm:p-6 bg-gray-200 rounded-md shadow-md" ref={leftRef}>
                        <motion.div
                            className="bg-white rounded-md"
                            initial={{ x: -100, opacity: 0 }}
                            animate={leftInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                            transition={{ type: "spring", duration: 1 }}
                        >
                            <div className="p-4 sm:p-6">
                                <h2 className="text-xl sm:text-2xl text-blue-900 font-bold mb-2 sm:mb-4">Got any questions?</h2>
                                <p className="text-base sm:text-lg text-blue-600">Feel free to reach out.</p>
                                <p className="text-base sm:text-lg text-blue-600 mb-4 sm:mb-6">Here are some of My Socials:</p>
                                <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                                    <a href="https://github.com/Raeid-U">
                                        <DiGithubBadge className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-blue-600 hover:text-blue-900 transition-colors duration-300" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/raeid-usmanali/">
                                        <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-blue-600 hover:text-blue-900 transition-colors duration-300" />
                                    </a>
                                    <button onClick={handleDiscordClick}>
                                        <RxDiscordLogo className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-blue-600 hover:text-blue-900 transition-colors duration-300 cursor-pointer" />
                                    </button>
                                    <a href="https://www.instagram.com/raeid2006/">
                                        <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-blue-600 hover:text-blue-900 transition-colors duration-300" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="p-4 sm:p-6 bg-gray-200 rounded-md shadow-md" ref={rightRef}>
                        <motion.div
                            className="bg-white rounded-md"
                            initial={{ x: 100, opacity: 0 }}
                            animate={rightInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                            transition={{ type: "spring", duration: 1 }}
                        >
                            <div className="p-4 sm:p-6">
                                <div className="flex flex-col space-y-3 sm:space-y-4">
                                    <button
                                        onClick={handlePhoneClick}
                                        className="text-lg md:text-md sm:text-xl text-blue-600 bg-gray-100 rounded-full p-2 sm:p-3 flex items-center justify-start hover:bg-gray-300 transition duration-300"
                                    >
                                        <FaPhoneAlt className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gray-200 rounded-full mr-3 sm:mr-4 p-1 sm:p-2" />
                                        <span className="truncate">+1 (647) 451-4036</span>
                                    </button>
                                    <button
                                        onClick={handleEmailClick}
                                        className="text-lg md:text-md sm:text-xl text-blue-600 bg-gray-100 rounded-full p-2 sm:p-3 flex items-center justify-start hover:bg-gray-300 transition duration-300"
                                    >
                                        <MdAlternateEmail className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gray-200 rounded-full mr-3 sm:mr-4 p-1 sm:p-2" />
                                        <span className="truncate">raeidus15@gmail.com</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
