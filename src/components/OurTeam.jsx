import React from 'react'
import PageSection from './PageSection'

import kramann from '../assets/team/Kramann.jpg';
import hayat from '../assets/team/Hayat.jpg';
import sidrah from '../assets/team/Sidrah.jpg';
import rito from '../assets/team/Rito.JPG';

const OurTeam = () => {

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
        {
            id:4,
            img: rito,
            title: 'Ritabrata Sanyal, Rito',
            subtitle: 'Director'
        },
    ]
  return (
    <PageSection 
    name="team"
    title="Our Team"
    subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet turpis id augue aliquet iaculis at sit amet dui. Aenean sollicitudin diam lobortis, pharetra urna at, ultricies turpis. Phasellus vitae aliquam lorem, et congue quam. Vestibulum bibendum justo odio, id placerat dolor euismod at. Etiam ultricies ipsum vitae tellus tincidunt, eget posuere enim ultricies. Nam ultricies nisi ultricies urna luctus sodales. Pellentesque ornare iaculis varius. Nulla sit amet ante turpis. Vestibulum vel lorem at arcu eleifend vestibulum a vel odio. Proin quis luctus ante. Fusce a luctus mi.`}
    >
        <div className="grid lg:grid-cols-4 gap-12 text-black">
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
        </div>
    </PageSection>
  )
}

export default OurTeam