import React, {Fragment, useRef} from 'react'
import PageSection from './PageSection'

import kramann from '../assets/team/Kramann.jpg';
import hayat from '../assets/team/Hayat.jpg';
import sidrah from '../assets/team/Sidrah.jpg';
import rito from '../assets/team/Rito.JPG';

import michael from '../assets/team/michael.jpg';
import rafael from '../assets/team/rafael.jpg';
import rebekka from '../assets/team/rebekka.jpg';
import sikander from '../assets/team/sikander.jpg';
import jitske from '../assets/team/jitske.jpg';
import konrad from '../assets/team/konrad.jpg';
import felix from '../assets/team/felix.jpg';
import niclas from '../assets/team/niclas.jpg';
import hyojin from '../assets/team/hyojin.jpg';
import maurice from '../assets/team/maurice.jpg';
import susanne from '../assets/team/susanne.jpg';
import ursula from '../assets/team/ursula.jpg';

import Modal from './Modal';
import { useState } from 'react';

const OurTeam = () => {

    const myInputRef = useRef(null);
    const [showModal, setShowModal] = useState(false)
    const handleOnOpen = () => {
        setShowModal(true);
    }
    const handleOnClose = () => setShowModal(false)
    const team = [
        {
            id:1,
            img: kramann,
            title: 'Rafael Kramann, MD, PHD, FASN',
            subtitle: 'Director'
        },
        {
            id:2,
            img: hayat,
            title: 'Sikander Hayat, PhD',
            subtitle: 'Director'
        },
        {
            id:3,
            img: sidrah,
            title: 'Sidrah Maryam, M. Sc.',
            subtitle: 'Director'
        },
    ]
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
            <h1 className="text-3xl">Computational</h1>
            <br></br>
            <div class="grid grid-cols-5 gap-4">
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={michael} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Michael Rheinnecker, CEO</h5>
                    </div>
                </div>
                <div></div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={sikander} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Sikander Hayat</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={hyojin} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Hyojin Kim</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={felix} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Felix Schreibing</h5>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h1 className="text-3xl">Target Validation</h1>
            <br></br>
            <div class="grid grid-cols-6 gap-4">
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={jitske} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Jitske Jansen</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={maurice} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Maurice Halder</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={niclas} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Niclas Flosdorf</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={susanne} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Susanne Schmitz</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={ursula} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Ursula Förster</h5>
                    </div>
                </div>
                <div class="relative text-center hover:transform hover:scale-125 hover:rounded transition hover:z-50 hover:cursor-pointer duration-50 ease-in-out">
                    <img src={konrad} alt=""/>
                    <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 bg-opacity-50 text-amber-400">
                        <h5>Dr. Konrad Hoeft</h5>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-6">
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
                </div>
                
            </div>
            <Modal visible={showModal} onClose={handleOnClose} />
    </PageSection>
    
  )
}

export default OurTeam