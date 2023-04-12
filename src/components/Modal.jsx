import React from "react";

export default function Modal({visible, onClose, imgUrl}) {


    const handleOnClose = (e) => {
        if(e.target.id === "modal-body") onClose()
    }

    if (!visible) return null;

    return (
        <div 
        id = "modal-body"
        onClick={handleOnClose} 
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="w-[600px]">
                <div className="bg-white p-2 rounded">
                    <img className="w-48 h-96" src={imgUrl} alt={imgUrl}/>
                </div>
            </div>
        </div>
    );
}