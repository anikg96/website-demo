import React, {useState} from "react";
import heroVideo from "../assets/heroVideo.mp4"
import sequantrix from "../assets/team/sequantrix2.jpg";
const HeroSection = () => {
    return (
        <div className="flex items-center  w-full h-screen text-center">
            <div className={`lg:p-24 p-5 flex flex-col items-start justify-center bg-white w-full h-full`}>
                <div className={`lg:p-2 p-5 mx-auto w-1/2 h-1/2`}>
                    <img src={sequantrix} alt="" />

                </div>
                <div class="absolute bottom-20 left-0 right-0 px-15 py-10 bg-white text-black">
                        <p className="text-xl w-full mx-auto justify-center">
                        Sequantrix was created by leading pioneers in fibrosis research, clinical care and computational science to address the largly unmet medical need for antifibrotic therapies.</p><br></br> <p className="text-xl w-full mx-auto justify-center"> We initially focus on the discovery and validation of novel, antifibrotic targets by leveraging one of the world’s largest human single-cell, multi-modal datasets in the field of fibrotic diseases. </p><br></br><p className="text-xl w-full mx-auto justify-center"> In the longer term, we aim to develop anti-fibrotic drug candidates up to clinical proof of concept. </p>
                </div>
                {/* <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white">Kramann Lab</h1>
                <h5>Translational research on solid organ fibrosis</h5>
                <h5>and cardiovascular disease in chronic kidney disease</h5> */}
            </div>
        </div>
    );
};

export default HeroSection;