import React, {useState} from "react";
import heroVideo from "../assets/heroVideo.mp4"
import sequantrix from "../assets/team/sequantrix2.jpg";
const HeroSection = () => {
    return (
        <div className="flex items-center  w-full h-screen text-center">
            <video src={heroVideo} loop muted autoPlay className="object-cover h-full w-full absolute -z-10"></video>
            <div className={`lg:p-24 p-5 flex flex-col items-start justify-center bg-black/60 w-full h-full`}>
                <div className={`lg:p-24 p-5 mx-auto w-1/2 h-1/2`}>
                    <img src={sequantrix} alt="" />
                </div>
                
                {/* <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white">Kramann Lab</h1>
                <h5>Translational research on solid organ fibrosis</h5>
                <h5>and cardiovascular disease in chronic kidney disease</h5> */}
            </div>
        </div>
    );
};

export default HeroSection;