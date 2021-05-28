import React from 'react'

function Country() {
    return (
        <div className="flex flex-wrap flex-col items-center border border-solid border-subtitleGreen rounded-lg border-opacity-50 py-3 px-2">
            <div className="flex flex-col items-center gap-2 mx-14 mb-2">
                <p className="title-medium font-montserrat">UPDATED : <span className="text-subtitleGreen">27/04</span></p>
                <h1 className="title text-2xl">BR - Brazil</h1>
                <p className="title text-lg font-medium">168.040.850</p>
                <p className="subtitle font-medium">CONFIRMED CASES</p>
                <p className="title text-lg font-medium">168.040.850</p>
                <p className="subtitle font-medium">CASES OF DEATH</p>
            </div>
            <div className="w-full h-1 border-b border-solid border-subtitleGreen border-opacity-50"></div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-1 pt-2 mr-3 text-center">
                    <h1 className="title text-lg font-medium">5743</h1>
                    <p className="subtitle text-xs font-medium">NEW DEATHS</p>
                    <h1 className="title text-lg font-medium">5743</h1>
                    <p className="subtitle text-xs font-medium">NEW CONFIRMEDS</p>
                </div>
                <div className="flex flex-col gap-1 pt-2 text-center">
                    <h1 className="title text-lg font-medium">5743</h1>
                    <p className="subtitle text-xs font-medium">NEW RECOVEREDS</p>
                    <h1 className="title text-lg font-medium">5743</h1>
                    <p className="subtitle text-xs font-medium">TOTAL RECOVEREDS</p>
                </div>
            </div>
        </div>
    )
}

export default Country