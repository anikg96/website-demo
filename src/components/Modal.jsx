import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Modal({visible, onClose, imgUrl, name, designation, description, linkedinUrl}) {


    const handleOnClose = (e) => {
        if(e.target.id === "modal-body") onClose()
    }

    const handleIconClick = () => {
        window.open(linkedinUrl, '_blank');
    }

    if (!visible) return null;

    return (
        <div 
        id = "modal-body"
        onClick={handleOnClose} 
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="w-[1000px] z-100 gap-5 flex flex-wrap">
                <div className="bg-white p-2 rounded flex flex-wrap">
                    <div className="w-1/3 p-10">
                        <img className="h-96" src={imgUrl} alt={imgUrl}/>
                    </div>
                    
                    <div className="w-2/3 h-96 p-8">
                        <div className="flex flex-wrap">
                            <h1 className="text-3xl">{name}&nbsp;</h1> <FaLinkedin  className="hover:cursor-pointer" onClick={handleIconClick} size="2.5rem"/>
                        </div>
                        <h1 className="text-xl">{designation}</h1>
                        <br></br>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}