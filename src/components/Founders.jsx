import React from 'react'

import PageSection from './PageSection';

import rafael from '../assets/team/rafael.jpg';
import rebekka from '../assets/team/rebekka.jpg';

const Founders = () => {
  return (
    <PageSection 
    name="founders"
    title="Founders"
    subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet turpis id augue aliquet iaculis at sit amet dui. Aenean sollicitudin diam lobortis, pharetra urna at, ultricies turpis. Phasellus vitae aliquam lorem, et congue quam. Vestibulum bibendum justo odio, id placerat dolor euismod at. Etiam ultricies ipsum vitae tellus tincidunt, eget posuere enim ultricies. Nam ultricies nisi ultricies urna luctus sodales. Pellentesque ornare iaculis varius. Nulla sit amet ante turpis. Vestibulum vel lorem at arcu eleifend vestibulum a vel odio. Proin quis luctus ante. Fusce a luctus mi.`}
    >
        <div className="grid grid-cols-2 gap-4">
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
        </div>
    </PageSection>
  )
}

export default Founders