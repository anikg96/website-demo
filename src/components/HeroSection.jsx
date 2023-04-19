import React, {useState} from "react";
import sequantrix from "../assets/team/sequantrix2.jpg";
import hbio from "../assets/team/Logo_Home_Biosciences.jpg";
const HeroSection = () => {

    const handleOnClick = () => {
        window.open("https://homebiosciences.com/", '_blank');
    }

    return (
        <div name="homepage" className="flex items-center  w-full h-screen text-center">
            <div className={`flex flex-col items-start justify-center bg-white`}>
                <br></br>
                <br></br>
                <div className={`lg:p-2 p-5 mx-auto`}>
                    <img className={'h-1/2 w-1/2 mx-auto'} src={sequantrix} alt="" />

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
                        <br></br>
                        <br></br>
                        <hr className="w-2/3 mx-auto"></hr>
                        <br></br>
                        <div className="flex flex-col lg:flex-col md:flex-col justify-center text-center items-center">
                            <h1 className="m-0 w-1/3 text-sm">Supported by</h1>
                            <br></br>
                            <img className="items-left w-[130px] hover:cursor-pointer" src={hbio} alt={"Home Biosciences"} onClick={handleOnClick}/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;