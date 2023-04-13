import React from 'react'
import PageSection from './PageSection'
import ContactForm from './ContactForm'

export const ContactUs = () => {
  return (
    <PageSection
    name="contact"
    title="Contact Us"
    subtitle={``}
    >
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
            {/* left */}
            <div className='w-full lg:w-1/2 h-full flex items-center flex-col justify-center'>
                {/* <h1 className='text-2xl'>Join Our Team</h1> */}
                <p>Please write us an email at info@sequantrix.bio</p>
            </div>

            {/* right */}
            {/* <div className='w-full lg:w-1/2 h-full rounded-xl p-4'>
                <ContactForm />
            </div> */}
        </div>
    </PageSection>
  )
}
