import React, { useState } from 'react'

import PageSection from './PageSection';

import rafael from '../assets/team/rafael-min.jpg';
import rebekka from '../assets/team/rebekka-min.jpg';
import sikander from '../assets/team/sikander-min.jpg';
import konrad from '../assets/team/konrad-min.jpg';
import michael from '../assets/team/michael-min.jpg';
import Modal from './Modal';

const Founders = () => {

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
    name="founders"
    title="Founders"
    subtitle={``}
    >
        {/* <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border-4  h-full px-4 py-4 flex">
                <div className="w-1/3">
                    <img className="h-72 rounded-xl" src={rafael} alt="" />
                </div>
                <div className="px-4 w-2/3">
                    <h1 className="font-extrabold">Dr. Rafael Kramann</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet turpis id augue aliquet iaculis at sit amet dui. Aenean sollicitudin diam lobortis, pharetra urna at, ultricies turpis. Phasellus vitae aliquam lorem, et congue quam.</p>
                </div>
            </div>

            <div className="rounded-xl border-4  h-full px-4 py-4 flex">
                <div className="w-1/3">
                    <img className="h-72 rounded-xl" src={rebekka} alt="" />
                </div>
                <div className="px-4 w-2/3">
                    <h1 className="font-extrabold">Dr. Rebekka Schneider-Kramann</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet turpis id augue aliquet iaculis at sit amet dui. Aenean sollicitudin diam lobortis, pharetra urna at, ultricies turpis. Phasellus vitae aliquam lorem, et congue quam.</p>
                </div>
            </div>
        </div> */}

        <div class="flex flex-wrap gap-0">
            <div 
            onClick={() => handleOnOpen(
                rafael, 
                "Rafael Kramann", 
                "Prof.", 
                "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={rafael} alt="Rafael Kramann" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Rafael Kramann, Prof.</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(
                rebekka,
                "Rebekka Schneider",
                "Prof.",
                "Prof. Rebekka Schneider is a Founder of Sequantrix. She is a hematopathologist with strong background in clinical hematopathology and basic research. Rebekka is (i) Full Professor (W3) and Director of the Institute for Cell and Tumor Biology at the University Hospital RWTH Aachen, Germany, (ii) Associate Professor of Medicine at the Erasmus University Medical Center, Netherlands and (iii) PI at the Oncode Institute, Netherlands. She is an international opinion leader and inventor in the field of myelofibrosis and awardee of 2 ERC grants and multiple awards and prices. Her publication record is very strong: h = 41, >100 publications, citation percentile 90",
                "https://www.linkedin.com/in/rebekka-k-schneider-md-phd-78748193")}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={rebekka} alt="Rebekka Kramann-Schneider" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Rebekka Schneider, Prof.</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(
                sikander,
                "Sikander Hayat",
                "Ph.D.",
                "Dr. Sikander Hayat is a Co-Founder of Sequantrix. He is a translational data scientist with strong background in single-cell, spatial transcriptomics, multi-omics data analyses and machine learning to reveal novel insights into disease biology and discover drug targets. Sikander is a Group Leader, Translational Data Science, at the Institute of Experimental Medicine and Systems Biology at University Hospital RWTH Aachen. Sikander held previously various positions at Bayer (Science Fellow, Senior Computational Biologist at Bayer-Broad Institute Joint Precision Cardiology Lab, Research Scientist), was Visiting Scientist at the Broad Institute of MIT and Harvard and Senior Post-Doc at Harvard Medical School. Sikander advises Sequantrix on translational data science.",
                "https://www.linkedin.com/in/shayat")}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={sikander} alt="Sikander Hayat" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Sikander Hayat, Ph.D.</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(
                konrad,
                "Konrad Hoeft",
                "M.D.",
                "Dr. Konrad Hoeft is a Co-Founder of Sequantrix. He is a nephrologist in training and Resident Physician at the Clinic for Renal and Hypertensive Diseases, Rheumatologic and Immunologic Diseases, Klinik II, University Hospital RWTH Aachen. He is also a Post-Doctoral Research Fellow at the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, He was previously Medical Research Fellow at Harvard Mecical School. Konrad advises Sequantrix on target science.",
                "")}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={konrad} alt="Konrad Hoeft" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Konrad Hoeft, M.D.</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(
                michael,
                "Michael Rheinnecker",
                "Ph.D.",
                "Dr. Michael Rheinnecker is a Co-Founder of Sequantrix. He is an experienced biotech entrepreneur and has over 30 years of experience in research (MorphoSys), licensing (Grünenthal) and management (Spintec, PNO, CYSAL). He is also a successful seed and early-stage investor (TechnoStart) with a net fund multiple of >2.3 (vintage 2001) and was founding investor of Graffinity (exit as Santhera, SWX:SANN) and Complex Biosystems (exit as Ascendis Pharma, NASDAQ:ASND).",
                "https://www.linkedin.com/in/michael-rheinnecker/")}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={michael} alt="Michael Rheinnecker" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Michael Rheinnecker, Ph.D. </h5>
                </div>
            </div>
        </div>
        <Modal onClose={handleOnClose} visible={showModal} imgUrl={urlString} name={personName} designation={personDesignation} description={personDescription} linkedinUrl={personLinkedInUrl}/>


    </PageSection>
  )
}

export default Founders