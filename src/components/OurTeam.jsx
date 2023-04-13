import React, {Fragment, useRef} from 'react'
import PageSection from './PageSection'



import michael from '../assets/team/michael-min.jpg';

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

    const myInputRef = useRef(null);
    const [showModal, setShowModal] = useState(false)
    const handleOnOpen = () => {
        setShowModal(true);
    }
    const handleOnClose = () => setShowModal(false)
    
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
            <div class="grid grid-cols-6 gap-0">
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={michael} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Michael</h5>
                        <h5>CEO</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={sikander} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Sikander, Translational</h5>
                        <h5>Data Science</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={jitske} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Jitske, Group Leader</h5>
                        <h5>Target Validation</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={hyojin} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Hyojin, Computational</h5>
                        <h5>Biologist</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={felix} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5>Felix, Medical</h5>
                        <h5>Bioinformatician</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={felix} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-70 text-white">
                        <h5 className="text-md">Suchandra, Knowledge</h5>
                        <h5>Representation</h5>
                    </div>
                </div>
            </div>

            {/* <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br> */}
            <div class="grid grid-cols-6">
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={maurice} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-white">
                        <h5>Maurice, Scientist</h5>
                        <h5>Target Validation</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={niclas} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-white">
                        <h5>Niclas, Scientist</h5>
                        <h5>Target Validation</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={susanne} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-white">
                        <h5>Susanne</h5>
                        <h5>MTA</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={ursula} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-white">
                        <h5>Ursula</h5>
                        <h5>MTA</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
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
            <Modal visible={showModal} onClose={handleOnClose} />
    </PageSection>
    
  )
}

export default OurTeam