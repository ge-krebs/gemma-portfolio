import text from '../data/text.json'
// import { useState, useEffect } from 'react'

// function typewriter (text, speed) {
//     useEffect(() => {

//     })
// }

function Landing () {

    return (
        <>
        <div className="flex flex-col md:flex-row p-5 md:p-5">
            {/* col left */}
            <div className="md:w-1/2 items-center">
                <img className="w-full" src="memoji-laptop.png" />
            </div>
            {/* col right */}
            <div className="md:w-1/2 justify-end pt-5">
                <div className="flex flex-col justify-end h-full">
                    <h1 className="text-white text-7xl">
                        {text.landing.title}
                    </h1>
                    <p className="text-sm pt-4">
                        <span className="text-pale-blue text-3xl">{text.landing.name}</span>
                        {text.landing.body}
                    </p>
                    <p className="pt-2 text-sm">
                        {text.landing.subBody}
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Landing