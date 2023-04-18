import React, {useState} from "react";
import rotgif from "../assets/rot.gif"
import sequantrix from "../assets/team/sequantrix2.jpg";
const HeroSection = () => {
    return (
        <div name="homepage" className="flex items-center  w-full h-screen text-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/rot.gif)`}}>
            <div className={`flex flex-col items-start justify-center bg-white`}>
                <div className={`lg:p-2 p-5 mx-auto`}>
                    <img src={sequantrix} alt="" />

                </div>
                <div class="bottom-20 left-0 right-0 px-12 py-10 bg-white text-black">
                        <p className="text-xl w-full mx-auto justify-center">
                        Sequantrix was created by leading pioneers in fibrosis research, clinical care and computational science to address the large, unmet medical need for antifibrotic therapies.
                        </p><br></br> 
                        <p className="text-xl w-full mx-auto justify-center"> 
                        Our approach starts with the discovery and validation of novel, antifibrotic targets by leveraging one of the world’s largest human single-cell, multi-modal datasets in the field of fibrotic diseases. 
                        </p><br></br>
                        <p className="text-xl w-full mx-auto justify-center"> 
                        Our aim is to develop anti-fibrotic drug candidates up to the clinical proof of concept. We have already identified several novel anti-fibrotic targets of high biological relevance and will swiftly move to drug candidate development. 
                        </p>
                </div>
                {/* <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white">Kramann Lab</h1>
                <h5>Translational research on solid organ fibrosis</h5>
                <h5>and cardiovascular disease in chronic kidney disease</h5> */}
            </div>
        </div>
    );
};

export default HeroSection;