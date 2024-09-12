import React, { useState } from 'react'

{/* <div className='
    flex bg-gray-300 rounded-xl mx-auto items-center 
    shadow-lg p-5 space-x-4 max-w-sm mb-4 
    hover:bg-lochmara-600
    focus:ring
    hover:transform hover:translate-x-2'
> */}

export const CustomButtons = () => {
    
    const init = () => {
        return localStorage.getItem('lightMode').toString() || false;
    }
    
    const [darkMode, setDarkMode] = useState(false, init)
    
    const handleDarkMode = () => {
        // AGREGANDO AL HTML, EN LO MÁS ALTO DEL INDEX.HTML, LA CLASS DARK
        document.documentElement.classList.toggle('dark');
        setDarkMode(!darkMode);
        localStorage.setItem('lightMode', darkMode);
    }

    const textButtonDark = `${darkMode ? 'Toggle light' : 'Toogle dark'}`

    return (
        <>
            <div 
            onClick={handleDarkMode}
            className='
                bg-gradient-to-r from-lochmara-600 to-lochmara-300
                flex rounded-xl mx-auto items-center shadow-lg p-5 space-x-4 max-w-sm mb-4 
                focus:ring
                hover:transform hover:translate-x-2'
            >
                <div className='shrink-0'>
                    <i className="fas fa-wrench w-4"></i>
                </div>
                <div className="h-8 w-px bg-gray-600 mx-4"></div>
                <div>
                    {/* <h1>Ingresar</h1> */}
                    <h1>{textButtonDark}</h1>
                </div>
            </div>
        </>
    )
}
