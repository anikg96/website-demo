import React, {Fragment, useRef} from 'react'
import PageSection from './PageSection'



import michael from '../assets/team/michael-min.jpg';

import rafael from '../assets/team/rafael-min.jpg';

import sikander from '../assets/team/sikander-min.jpg';
import jitske from '../assets/team/jitske-min.jpg';
import konrad from '../assets/team/konrad-min.jpg';
import felix from '../assets/team/felix-min.jpg';
import niclas from '../assets/team/niclas-min.jpg';
import hyojin from '../assets/team/hyojin-min.jpg';
import maurice from '../assets/team/maurice-min.jpg';
import susanne from '../assets/team/susanne-min.jpg';
import ursula from '../assets/team/ursula-min.jpg';

import Modal from './Modal';
import { useState } from 'react';

const OurTeam = () => {

    const [showModal, setShowModal] = useState(false);
    const [urlString, setUrlString] = useState('');
    const [clicked, setClicked] = useState(false);

    // Individual Details
    const [personName, setPersonName] = useState('');
    const [personDescription, setPersonDescription] = useState('');
    const [personDesignation, setPersonDesignation] = useState('');
    const [personLinkedInUrl, setPersonLinkedInUrl] = useState('');

    const handleOnOpen = (urlString, iName, iDesignation, iDescription, iLUrl) => {
        setClicked(true)
        setShowModal(true)
        setUrlString(urlString)
        setPersonName(iName)
        setPersonDesignation(iDesignation)
        setPersonDescription(iDescription)
        setPersonLinkedInUrl(iLUrl)
    }

    const handleOnClose = () => {
        setShowModal(false)
        setClicked(false)
    }
    
  return (
    <PageSection 
    name="team"
    title="Team"
    subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet turpis id augue aliquet iaculis at sit amet dui. Aenean sollicitudin diam lobortis, pharetra urna at, ultricies turpis. Phasellus vitae aliquam lorem, et congue quam. Vestibulum bibendum justo odio, id placerat dolor euismod at. Etiam ultricies ipsum vitae tellus tincidunt, eget posuere enim ultricies. Nam ultricies nisi ultricies urna luctus sodales. Pellentesque ornare iaculis varius. Nulla sit amet ante turpis. Vestibulum vel lorem at arcu eleifend vestibulum a vel odio. Proin quis luctus ante. Fusce a luctus mi.`}
    >
        
            {/* <div className="grid lg:grid-cols-4 gap-12 text-black">
                {
                    team.map(({id, img, title, subtitle}) => (
                        <div key={id} class="flex justify-center">
                            <div class="rounded-lg max-w-sm">
                                <img class="rounded-lg" src={img} alt=""/>
                                <div class="p-6 justify-center items-center text-center">
                                    <h5 class="text-white text-xl font-medium mb-2">{title}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> */}
            <br></br>
            <div class="flex flex-wrap gap-0">
                <div 
                onClick={() => handleOnOpen(
                    michael,
                "Michael Rheinnecker",
                "Ph.D.",
                "Dr. Michael Rheinnecker is a Co-Founder of Sequantrix. He is an experienced biotech entrepreneur and has over 30 years of experience in research (MorphoSys), licensing (Grünenthal) and management (Spintec, PNO, CYSAL). He is also a successful seed and early-stage investor (TechnoStart) with a net fund multiple of >2.3 (vintage 2001) and was founding investor of Graffinity (exit as Santhera, SWX:SANN) and Complex Biosystems (exit as Ascendis Pharma, NASDAQ:ASND).",
                "https://www.linkedin.com/in/michael-rheinnecker/")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={michael} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Michael</h5>
                        <h5>CEO</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                sikander,
                "Sikander Hayat",
                "Ph.D.",
                "Dr. Sikander Hayat is a Co-Founder of Sequantrix. He is a translational data scientist with strong background in single-cell, spatial transcriptomics, multi-omics data analyses and machine learning to reveal novel insights into disease biology and discover drug targets. Sikander is a Group Leader, Translational Data Science, at the Institute of Experimental Medicine and Systems Biology at University Hospital RWTH Aachen. Sikander held previously various positions at Bayer (Science Fellow, Senior Computational Biologist at Bayer-Broad Institute Joint Precision Cardiology Lab, Research Scientist), was Visiting Scientist at the Broad Institute of MIT and Harvard and Senior Post-Doc at Harvard Medical School. Sikander advises Sequantrix on translational data science.",
                "https://www.linkedin.com/in/shayat")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={sikander} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Sikander, Translational</h5>
                        <h5>Data Science</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                    jitske, 
                    "Jitske Jansen",
                    "Ph.D.", 
                    "Dr. Jitske Jansen is Group Leader Target Validation at Sequantrix. She is the awardee of the TOPX Female to Follow, Rising Star in Science Award 2022. Jitske has been instrumental in developing complex organoid model system for testing of drug candidate molecules. Collaborations: She has close collaborations with academic centres such as the Radboud UMC (Nijmegen – previously as Asst. Professor), KU Leuven (Belgium), Erasmus MC (Rotterdam), UMC Utrecht, UMC Groningen, TU Eindhoven.",
                    "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={jitske} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Jitske, Group Leader</h5>
                        <h5>Target Validation</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                    hyojin, 
                    "Hyojin Kim", 
                    "Ph.D.", 
                    "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                    "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={hyojin} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Hyojin, Computational</h5>
                        <h5>Biologist</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                    rafael, 
                    "Rafael Kramann", 
                    "Prof.", 
                    "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                    "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={felix} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Felix, Medical</h5>
                        <h5>Bioinformatician</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                    rafael, 
                    "Rafael Kramann", 
                    "Prof.", 
                    "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                    "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={felix} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5 className="text-md">Suchandra, Knowledge</h5>
                        <h5>Representation</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                    rafael, 
                    "Rafael Kramann", 
                    "Prof.", 
                    "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                    "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={maurice} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-white">
                        <h5>Maurice, Scientist</h5>
                        <h5>Target Validation</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                    rafael, 
                    "Rafael Kramann", 
                    "Prof.", 
                    "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                    "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={niclas} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-white">
                        <h5>Niclas, Scientist</h5>
                        <h5>Target Validation</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                    rafael, 
                    "Rafael Kramann", 
                    "Prof.", 
                    "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                    "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={susanne} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-white">
                        <h5>Susanne</h5>
                        <h5>MTA</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                    rafael, 
                    "Rafael Kramann", 
                    "Prof.", 
                    "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                    "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={ursula} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-white">
                        <h5>Ursula</h5>
                        <h5>MTA</h5>
                    </div>
                </div>
                <div 
                onClick={() => handleOnOpen(
                    rafael, 
                    "Rafael Kramann", 
                    "Prof.", 
                    "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                    "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
                className={`relative w-full md:w-1/6 lg:w-1/6 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                    <img src={konrad} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-white">
                        <h5>Konrad, Advisor</h5>
                        <h5>Target Science</h5>
                    </div>
                </div>
            </div>

            {/* <div class="grid grid-cols-6">
                <div 
                    class="relative hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out"
                    onClick={() => setShowModal(true)}>
                    <img src={michael} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Michael Rheinnecker, CEO</h5>
                    </div>
                </div>
                <div class="relative hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={rafael} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Rafael Kramann</h5>
                    </div>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={rebekka} alt=""/>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={sikander} alt=""/>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={jitske} alt=""/>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={konrad} alt=""/>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={felix} alt=""/>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={maurice} alt=""/>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={niclas} alt=""/>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={hyojin} alt=""/>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={susanne} alt=""/>
                </div>
                <div class="bg-gray-200 text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={ursula} alt=""/>
                </div> */}
                
            {/* </div> */}
            <Modal onClose={handleOnClose} visible={showModal} imgUrl={urlString} name={personName} designation={personDesignation} description={personDescription} linkedinUrl={personLinkedInUrl}/>
    </PageSection>
    
  )
}

export default OurTeam