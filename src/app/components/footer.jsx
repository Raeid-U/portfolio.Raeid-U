import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
    const handleDiscordClick = () => {
        const discordTag = "ignlance";
        navigator.clipboard.writeText(discordTag);
        window.alert(`Discord tag "${discordTag}" copied to clipboard!`);
    };

    return (
        <div id="contact" className="bg-gray-200 py-12">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-20">
                <h1 className="text-blue-600 text-3xl font-bold text-center mb-8">Get in Touch with Me!</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="p-6 bg-white rounded-md shadow-md">
                        <h2 className="text-2xl text-blue-900 font-bold mb-4">Got any questions?</h2>
                        <p className="text-lg text-blue-600 mb-6">Feel free to reach out. Here are some of My Socials:</p>
                        <div className="flex items-center space-x-6">
                            <a href="https://github.com/Raeid-U"><DiGithubBadge className="w-12 h-12 text-blue-600" /></a>
                            <a href="https://www.linkedin.com/in/raeid-usmanali/"><FaLinkedin className="w-12 h-12 text-blue-600" /></a>
                            <button onClick={handleDiscordClick}><RxDiscordLogo className="w-12 h-12 text-blue-600 cursor-pointer" /></button>
                            <a href="https://www.instagram.com/raeid2006/"><FaInstagram className="w-12 h-12 text-blue-600" /></a>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-md shadow-md">
                        <div className="flex flex-col space-y-4">
                            <button className="text-xl text-blue-600 bg-grey-200 rounded-full p-3 flex items-center justify-start hover:bg-gray-300 transition duration-300">
                                <FaPhoneAlt className="w-10 h-10 bg-gray-200 rounded-full mr-4 p-2" />
                                <span className="truncate">+1 (647)-572-4036</span>
                            </button>
                            <button className="text-xl text-blue-600 bg-grey-200 rounded-full p-3 flex items-center justify-start hover:bg-gray-300 transition duration-300">
                                <MdAlternateEmail className="w-10 h-10 bg-gray-200 rounded-full mr-4 p-2" />
                                <span className="truncate">raeidus15@gmail.com</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
