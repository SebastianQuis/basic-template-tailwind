import React from 'react'

import notificacion from '../../assets/notificacion.png'

export const Cards = () => {
  return (
    <div>
        <div className="flex bg-white rounded-xl mx-auto items-center shadow-lg p-5 space-x-4 max-w-sm mb-4">
          <div className='shrink-0'>
            <img className='size-12' src={notificacion} alt="notificacion img" />
          </div>
          <div className='ml-5'>
            <div>Chichat</div>
            <p>You have a new message!</p>
          </div>
        </div>
    </div>
  )
}




{/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-9">
    <div className="shrink-0">
        <img className="size-12" src={notificacion} alt="ChitChat Logo"/>
    </div>
    <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
    </div>
</div> */}