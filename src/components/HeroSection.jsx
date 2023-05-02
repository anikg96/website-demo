import React, {useState} from "react";
import sequantrix from "../assets/team/sequantrix2.jpg";
import hbio from "../assets/team/Logo_Home_Biosciences.jpg";
const HeroSection = () => {

    const handleOnClick = () => {
        window.open("https://homebiosciences.com/", '_blank');
    }

    return (
        <div 
        name="homepage" 
        className="flex flex-col items-center w-full h-full text-center border border-solid border-black mt-[96px]">
        {/* Setting the top margin of this div to a fixed value of 96 pixels because of the navbar */}
            <div className="p-16">
                <img className={'h-full md:lg-1/2 lg:h-1/2 w-full md:w-1/2 lg:w-1/2 mx-auto'} src={sequantrix} alt="Sequantrix Main Logo" />
            </div>
            <div>
                {/* Introductory text in three paragraphs */}
                <p className="text-xl w-full mx-auto justify-center p-4">
                    Sequantrix was created by leading pioneers in fibrosis research, clinical care and computational science to address the large, unmet medical need for antifibrotic therapies.
                </p>
                <p className="text-xl w-full mx-auto justify-center p-4">
                    Our approach starts with the systematic discovery and validation of novel, antifibrotic targets by leveraging some of the world’s largest human multi-modal, single-cell datasets in the field of fibrotic diseases.
                </p>
                <p className="text-xl w-full mx-auto justify-center p-4">
                Our aim is to develop anti-fibrotic drug candidates up to the clinical proof of concept. We have identified several novel anti-fibrotic targets of high biological relevance and will swiftly move to drug candidate development.
                </p>
                <br></br>
                <br></br>
                {/* Introduced a gap of two lines between the description texts and "Home Biosciences" logo */}
                <div className="flex flex-col lg:flex-col md:flex-col justify-center text-center items-center mb-4">
                    <h1 className="m-0 w-1/3 text-sm">Institutional founder</h1>
                    <img className="mt-3 items-left w-[130px] hover:cursor-pointer" src={hbio} alt={"Home Biosciences"} onClick={handleOnClick}/>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;