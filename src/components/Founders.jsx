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
    name="founders"
    title="Founders"
    subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet turpis id augue aliquet iaculis at sit amet dui. Aenean sollicitudin diam lobortis, pharetra urna at, ultricies turpis. Phasellus vitae aliquam lorem, et congue quam. Vestibulum bibendum justo odio, id placerat dolor euismod at. Etiam ultricies ipsum vitae tellus tincidunt, eget posuere enim ultricies. Nam ultricies nisi ultricies urna luctus sodales. Pellentesque ornare iaculis varius. Nulla sit amet ante turpis. Vestibulum vel lorem at arcu eleifend vestibulum a vel odio. Proin quis luctus ante. Fusce a luctus mi.`}
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
            onClick={() => handleOnOpen(rafael)}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={rafael} alt="Rafael Kramann" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Rafael Kramann</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(rebekka)}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={rebekka} alt="Rebekka Kramann-Schneider" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Rebekka Schneider-Kramann</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(sikander)}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={sikander} alt="Sikander Hayat" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Sikander Hayat</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(konrad)}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={konrad} alt="Konrad Hoeft" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Konrad Hoeft</h5>
                </div>
            </div>
            <div 
            onClick={() => handleOnOpen(michael)}
            className={`relative w-1/2 md:w-1/5 lg:w-1/5 text-center ${clicked ? '': 'hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out'}`}>
                <img src={michael} alt="Michael Rheinnecker" />
                <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-black bg-opacity-50 text-white">
                    <h5>Michael Rheinnecker, CEO</h5>
                </div>
            </div>
        </div>
        <Modal onClose={handleOnClose} visible={showModal} imgUrl={urlString}/>


    </PageSection>
  )
}

export default Founders