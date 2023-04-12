import React from 'react'
import PageSection from './PageSection'
import ContactForm from './ContactForm'

export const ContactUs = () => {
  return (
    <PageSection
    name="contact"
    title="Contact Us"
    subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie tristique feugiat. Curabitur tincidunt ex sed velit tempus, rhoncus porta lacus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet turpis id augue aliquet iaculis at sit amet dui. Aenean sollicitudin diam lobortis, pharetra urna at, ultricies turpis. Phasellus vitae aliquam lorem, et congue quam. Vestibulum bibendum justo odio, id placerat dolor euismod at. Etiam ultricies ipsum vitae tellus tincidunt, eget posuere enim ultricies. Nam ultricies nisi ultricies urna luctus sodales. Pellentesque ornare iaculis varius. Nulla sit amet ante turpis. Vestibulum vel lorem at arcu eleifend vestibulum a vel odio. Proin quis luctus ante. Fusce a luctus mi.`}
    >
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
            {/* left */}
            {/* <div className='w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center'>
                <h1 className='text-2xl'>Join Our Team</h1>
                <p>Use the contact form or write us an email at 23dwej23@sdfq3.com</p>
            </div> */}

            {/* right */}
            {/* <div className='w-full lg:w-1/2 h-full rounded-xl p-4'>
                <ContactForm />
            </div> */}
        </div>
    </PageSection>
  )
}
