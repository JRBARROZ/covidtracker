import React from 'react'

function Global() {
    return (
        <section className="flex flex-wrap w-full mt-5 border border-solid border-subtitleGreen rounded-lg border-opacity-50">
            <div className="global-item">
                <p className=" mb-4 title-medium font-montserrat">
                    UPDATED : 
                    <span className="text-subtitleGreen"> 27/02 - 16:27</span>
                </p>
                <h1 className="title text-2xl">168.040.850</h1>
                <p className="subtitle mt-2 font-medium">CONFIRMED CASES</p>
                <h1 className="title text-2xl mt-7" >168.040.850</h1>
                <p className="subtitle mt-2 font-medium">CASES OF DEATH</p>
            </div>
            <div className="global-item lg:mx-0 flex flex-col gap-2">
                <h1 className="title text-xl font-medium">5743</h1>
                <p className="subtitle title-medium">NEW DEATHS</p>
                <h1 className="title text-xl font-medium">5743</h1>
                <p className="subtitle title-medium">NEW CONFIRMEDS</p>
                <h1 className="title text-xl font-medium">5743</h1>
                <p className="subtitle title-medium">NEW RECOVEREDS</p>
                <h1 className="title text-xl font-medium">5743</h1>
                <p className="subtitle title-medium">TOTAL RECOVEREDS</p>
            </div>
        </section>
    )
}

export default Global
