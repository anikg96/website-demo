import React from 'react'
import PageSection from './PageSection'

import fibrosis from '../assets/research/fibrosis.jpg'

const ResearchAreas = () => {

    const research = [
        {
            id: 1,
            img: fibrosis,
            title: 'Fibrosis',
            subtitle: 'Fibrosis has been estimated to be involved in almost 50% of all deaths in the developed world. We are studying fibrosis of heart, kidney, lung, vasculature and bone-marrow with the goal to develop novel targeted therapeutics.'
        },
        {
            id: 2,
            img: fibrosis,
            title: 'Fibrosis',
            subtitle: 'Fibrosis has been estimated to be involved in almost 50% of all deaths in the developed world. We are studying fibrosis of heart, kidney, lung, vasculature and bone-marrow with the goal to develop novel targeted therapeutics.'
        },
        {
            id: 3,
            img: fibrosis,
            title: 'Fibrosis',
            subtitle: 'Fibrosis has been estimated to be involved in almost 50% of all deaths in the developed world. We are studying fibrosis of heart, kidney, lung, vasculature and bone-marrow with the goal to develop novel targeted therapeutics.'
        },
        {
            id: 4,
            img: fibrosis,
            title: 'Fibrosis',
            subtitle: 'Fibrosis has been estimated to be involved in almost 50% of all deaths in the developed world. We are studying fibrosis of heart, kidney, lung, vasculature and bone-marrow with the goal to develop novel targeted therapeutics.'
        },
        {
            id: 4,
            img: fibrosis,
            title: 'Fibrosis',
            subtitle: 'Fibrosis has been estimated to be involved in almost 50% of all deaths in the developed world. We are studying fibrosis of heart, kidney, lung, vasculature and bone-marrow with the goal to develop novel targeted therapeutics.'
        },
        {
            id: 4,
            img: fibrosis,
            title: 'Fibrosis',
            subtitle: 'Fibrosis has been estimated to be involved in almost 50% of all deaths in the developed world. We are studying fibrosis of heart, kidney, lung, vasculature and bone-marrow with the goal to develop novel targeted therapeutics.'
        },
        {
            id: 4,
            img: fibrosis,
            title: 'Fibrosis',
            subtitle: 'Fibrosis has been estimated to be involved in almost 50% of all deaths in the developed world. We are studying fibrosis of heart, kidney, lung, vasculature and bone-marrow with the goal to develop novel targeted therapeutics.'
        },
        {
            id: 4,
            img: fibrosis,
            title: 'Fibrosis',
            subtitle: 'Fibrosis has been estimated to be involved in almost 50% of all deaths in the developed world. We are studying fibrosis of heart, kidney, lung, vasculature and bone-marrow with the goal to develop novel targeted therapeutics.'
        },
        {
            id: 4,
            img: fibrosis,
            title: 'Fibrosis',
            subtitle: 'Fibrosis has been estimated to be involved in almost 50% of all deaths in the developed world. We are studying fibrosis of heart, kidney, lung, vasculature and bone-marrow with the goal to develop novel targeted therapeutics.'
        },
    ];

  return (
    <PageSection 
    name="research" 
    title="Research Areas"
    subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet turpis id augue aliquet iaculis at sit amet dui. Aenean sollicitudin diam lobortis, pharetra urna at, ultricies turpis. Phasellus vitae aliquam lorem, et congue quam. Vestibulum bibendum justo odio, id placerat dolor euismod at. Etiam ultricies ipsum vitae tellus tincidunt, eget posuere enim ultricies. Nam ultricies nisi ultricies urna luctus sodales. Pellentesque ornare iaculis varius. Nulla sit amet ante turpis. Vestibulum vel lorem at arcu eleifend vestibulum a vel odio. Proin quis luctus ante. Fusce a luctus mi.`}
    >
        <div className="grid lg:grid-cols-6 gap-12 text-black">
            {
                research.map(({id, img, title, subtitle}) => (
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

export default ResearchAreas