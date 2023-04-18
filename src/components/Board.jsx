import React, {useState} from 'react'

import PageSection from './PageSection';
import Modal from './Modal';

import david from '../assets/team/david-min.jpg';
import rafael from '../assets/team/rafael-min.jpg';
import mark from '../assets/team/mark.jpg';


const Board = () => {

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

        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const handleOnClose = () => {
        setShowModal(false)
        setClicked(false)
        document.body.style.overflow = 'unset';
    }



  return (
    <PageSection 
    name="board"
    title="Board"
    subtitle={``}
    >
        <div className="grid grid-cols-4 gap-32">
            
            {/* <div className="rounded-xl border-4 border-black h-full px-4 py-4 flex">
                <div className="w-1/3">
                    <img className="h-48 rounded-xl" src={placeholder} alt="" />
                </div>
                <div className="px-4 w-2/3">
                    <h1 className="font-extrabold">Chairman</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. </p>
                </div>
            </div>

            <div className="rounded-xl border-4 border-black h-full px-4 py-4 flex">
                <div className="w-1/3">
                    <img className="h-48 rounded-xl" src={rafael} alt="" />
                </div>
                <div className="px-4 w-2/3">
                    <h1 className="font-extrabold">Dr. Rafael Kramann</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. </p>
                </div>
            </div>

            <div className="rounded-xl border-4 border-black h-full px-4 py-4 flex">
                <div className="w-1/3">
                    <img className="h-48 rounded-xl" src={placeholder} alt="" />
                </div>
                <div className="px-4 w-2/3">
                    <h1 className="font-extrabold">Dr. Mark Wolters</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. </p>
                </div>
            </div> */}
        </div>
        <div class="flex flex-wrap p-8 gap-8 items-center justify-center">
            <div 
            onClick={() => handleOnOpen(
                david, 
                "David Schilansky", 
                "Chairman", 
                "David Schilansky is the Chairman of the Sequantrix Board. David has more than 20 years of professional experience, mainly in the pharma and biotech industry. From 2011 to 2020, he co-headed DBV Technologies, transforming the company from a French research start-up to a unicorn about to launch a treatment of primary importance in the US. During this period, he led two IPOs on Euronext and Nasdaq, raising more than one billion US dollars in total. David began his career as an investment banker in M&A at Warburg Dillon Read. He also worked at Ipsen, from 2005 to 2011, where he held various roles in finance, including that of Group Chief Financial Officer, before moving to DBVT. David graduated from Paris Dauphine and Imperial College (London).",
                "https://www.linkedin.com/in/david-schilansky-01755a3")}
            className={`relative w-full md:w-1/4 lg:w-1/4 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={david} alt="David Schilansky" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>David Schilansky</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(
                rafael, 
                "Rafael Kramann", 
                "Prof.", 
                "Prof. Raphael Kramann is a Founder of Sequantrix. He is a nephrologist dedicated to develop novel targeted therapies for fibrotic diseases. Rafael is (i) Professor of Medicine and Associate Senior Attending Renal Physician at the Department of Nephrology and Clinical Immunology at the University Hospital RWTH Aachen, Germany, (ii) Chairman and Founding Director of the Institute of Experimental Medicine and Systems Biology at RWTH Aachen University, (iii) Director of the Laboratory of Translational Kidney and Cardiovascular Research at the Erasmus Medical Center Rotterdam, NL and (iv) Honorary Professor and PI at the British Heart Foundation Center of Excellence at the University of Edinburgh, UK. He is an international opinion leader and inventor in the field of fibrosis and awardee of 2 ERC grants and multiple awards and prices. His publication record is outstanding: h = 51, > 140 publications, citation percentile 92.",
                "https://www.linkedin.com/in/rafael-kramann-md-phd-00988456")}
            className={`relative w-full md:w-1/4 lg:w-1/4 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={rafael} alt="Rafael Kramann" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Rafael Kramann, Prof.</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(
                mark, 
                "Mark Wolters", 
                "Ph.D.", 
                "Mark Wolters is an independent Member of the Sequantrix Board. He has more than 25 years of pharmaceutical industry experience. Previously he was Vice President of Business Development & Licensing and Head of Early Licensing, and Vice President of the Bayer Life Science Center at Bayer, where he led a team of early-stage licensing and transaction professionals across an innovation ecosystem including biotech startups, academia, and the life sciences venture capital community. Mark has negotiated and closed hundreds of transaction of different types at Bayer and in his previous role as the Executive Director and Head of the Office of Technology at Schering AG, including the development of Bayer's joint ventures Casebia Therapeutics (with CRISPR Therapeutics), BlueRock Therapeutics (with Versant Ventures), and Joyn Bio (with Gingko Bioworks). He also serves on the Advisory Board of the Fraunhofer Institute for Cell Therapy and Immunology IZI in Leipzig, Germany. Mark received his Ph.D. in Molecular Biology from the Freie Universität Berlin and did his post-doctoral training in structural biology in the laboratory of Professor Alexander Rich at the Massachusetts Institute of Technology.",
                "https://www.linkedin.com/in/mark-wolters-0061722")}
            className={`relative w-full md:w-1/4 lg:w-1/4 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={mark} alt="Mark Wolters" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Mark Wolters, Ph.D.</h5>
                </div>
            </div>
        </div>
        <Modal onClose={handleOnClose} visible={showModal} imgUrl={urlString} name={personName} designation={personDesignation} description={personDescription} linkedinUrl={personLinkedInUrl}/>
    </PageSection>
  )
}

export default Board