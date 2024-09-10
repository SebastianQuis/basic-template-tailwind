import React from 'react'

import notificacion from './assets/notificacion.png'

export const TailwindApp = () => {
  return (
    <>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="size-12" src={notificacion} alt="ChitChat Logo"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>

    </>
  )
}
