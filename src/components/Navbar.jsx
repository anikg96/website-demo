import React from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = ({isMenuOpen, setIsMenuOpen}) => {

    const links = [
        {
            id: 1,
            link: 'Research Areas'
        },
        {
            id: 2,
            link: 'Team'
        },
        {
            id: 3,
            link: 'Recent Work'
        },
        {
            id: 4,
            link: 'Support Our Research'
        },
    ]

    return (
        <>
        <div className="absolute w-full h-24 bg-black text-gray-400 z-20 opacity-70">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
                {/* Replace text to contain logo later on */}
                <div>
                    <img className="rounded-lg object-contain h-16 w-16" src={logo} />
                </div>
                {/* <div> */}
                    {/* Removed tracking widest from classes, because this caused letters to be spaced apart */}
                    {/* <h1 className="text-thGold text-3xl">Kramann Lab</h1> 
                </div> */}
                <div className="hidden lg:flex items-center">
                    <ul className="flex">
                        {
                            links.map(({id, link}) => (
                                <li key={id} className="p-4 duration-200 hover:text-white hover:underline underline-offset-8 cursor-pointer">
                                    {link}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block lg:hidden">
                    {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>
        </div>

        <div className={`w-full h-fit overflow-y-visible bg-black text-white absolute z-10 px-5 py-12 lg:hidden justify-start text-start text-2xl duration-200 ${
            isMenuOpen ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}>
            <ul>
                {
                    links.map(({id, link}) => (
                        <li key={id} className="p-4">
                            {link}
                        </li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}

export default Navbar;
