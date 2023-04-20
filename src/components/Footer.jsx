import React, {useState} from 'react'

import ImpressumModal from './ImpressumModal'


const Footer = () => {

  const [showModal, setShowModal] = useState(false);
  
  const handleOnOpen = () => {
    setShowModal(true)
  }

  const handleOnClose = () => {
      setShowModal(false)
  }

  return (
    <>
    <div className="border-t border-white">
      <div className="my-32 max-w-screen-xl mx-auto flex flex-col items-center">
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-12">
          {menu.map(({ id, title, subMenu }) => (
            <div key={id}>
              <h1 className="text-lg font-bold">{title}</h1>
              <ul className="mt-1">
                {subMenu.map(({ id, title, link }) => (
                  <li key={id}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        <p className="my-12 text-center text-sm text-thBlue">
          © Copyright 2023 Sequantrix GmbH
        </p>
        {/* <h1 onClick={handleOnOpen}>Click me for modal</h1> */}
        <button onClick={handleOnOpen} class="w-[120px] bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
          Impressum
        </button>
      </div>
    </div>
    <ImpressumModal onClose={handleOnClose} visible={showModal} />
    </>
  )
}

export default Footer