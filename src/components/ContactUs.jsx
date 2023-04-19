import React from 'react'
import PageSection from './PageSection'
import email from '../assets/team/email.JPG';

export const ContactUs = () => {
  return (
    <PageSection
    name="contact"
    title="Contact Us"
    subtitle={``}
    >
        <h1>Please write us an email at:</h1>
        <img className="h-[25px] items-start" src={email}/>
    </PageSection>
  )
}
