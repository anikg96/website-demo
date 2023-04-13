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

    const handleOnOpen = (urlString) => {
        setClicked(true)
        setShowModal(true)
        setUrlString(urlString)
    }

    const handleOnClose = () => {
        setShowModal(false)
        setClicked(false)
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
            onClick={() => handleOnOpen(david)}
            className={`relative w-full md:w-1/4 lg:w-1/4 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={david} alt="David Schilansky" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>David Schilansky</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(rafael)}
            className={`relative w-full md:w-1/4 lg:w-1/4 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={rafael} alt="Rafael Kramann" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Rafael Kramann, Prof.</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(mark)}
            className={`relative w-full md:w-1/4 lg:w-1/4 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={mark} alt="Mark Wolters" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Mark Wolters, Ph.D.</h5>
                </div>
            </div>
        </div>
        <Modal onClose={handleOnClose} visible={showModal} imgUrl={urlString}/>
    </PageSection>
  )
}

export default Board