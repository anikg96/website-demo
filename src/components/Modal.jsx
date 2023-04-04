import React from "react";

export default function Modal({visible, onClose}) {

    if (!visible) return null;

    return (
        <div onClick={() => onClose()} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="w-[600px]">
                <div className="bg-white p-2 rounded">
                    Details Page. Needs work.
                </div>
            </div>
        </div>
    );
}