import React from 'react'

import PageSection from './PageSection';

import rafael from '../assets/team/rafael.jpg';

import placeholder from '../assets/team/placeholder.jpg';

const Board = () => {
  return (
    <PageSection 
    name="board"
    title="Board, SAB"
    subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet turpis id augue aliquet iaculis at sit amet dui. Aenean sollicitudin diam lobortis, pharetra urna at, ultricies turpis. Phasellus vitae aliquam lorem, et congue quam. Vestibulum bibendum justo odio, id placerat dolor euismod at. Etiam ultricies ipsum vitae tellus tincidunt, eget posuere enim ultricies. Nam ultricies nisi ultricies urna luctus sodales. Pellentesque ornare iaculis varius. Nulla sit amet ante turpis. Vestibulum vel lorem at arcu eleifend vestibulum a vel odio. Proin quis luctus ante. Fusce a luctus mi.`}
    >
        <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl border-4 border-black h-full px-4 py-4 flex">
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
            </div>
        </div>
    </PageSection>
  )
}

export default Board