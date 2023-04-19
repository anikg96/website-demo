import React from 'react'

const PageSection = ({name, title, subtitle, children}) => {
  return (
    <div name={name} className="max-w-screen-xl mx-auto">
        <div className="my-16 mx-8 text-center lg:text-left">
            <h1 className="text-5xl">{title}</h1>
            <p className="mt-8 mb-4">{subtitle}</p>
            {children}
        </div>
    </div>
  )
}

export default PageSection