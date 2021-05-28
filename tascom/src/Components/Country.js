import React from 'react'
import useFormatDate from '../Hooks/useFormatDate'

function Country({Country, CountryCode, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date}) {
    const {formatedDate} = useFormatDate(Date);
    return (
        <div className="flex flex-1 flex-wrap flex-col items-center border border-solid border-subtitleGreen rounded-lg border-opacity-50 py-3 px-2">
            <div className="flex flex-col items-center gap-2 mx-14 mb-2 flex-1">
                <p className="title-medium font-montserrat">UPDATED : <span className="text-subtitleGreen">{formatedDate}</span></p>
                <h1 className="title text-2xl w-40 text-center">{CountryCode} - {Country}</h1>
                <p className="title text-lg font-medium">{TotalConfirmed}</p>
                <p className="subtitle font-medium">CONFIRMED CASES</p>
                <p className="title text-lg font-medium">{TotalDeaths}</p>
                <p className="subtitle font-medium">CASES OF DEATH</p>
            </div>
            <div className="w-full h-1 border-b border-solid border-subtitleGreen border-opacity-50"></div>
            <div className="flex justify-between w-full gap-1">
                <div className="flex flex-col gap-1 pt-2 mr-3 text-center">
                    <h1 className="title text-lg font-medium">{NewDeaths}</h1>
                    <p className="subtitle text-xs font-medium">NEW DEATHS</p>
                    <h1 className="title text-lg font-medium">{NewConfirmed}</h1>
                    <p className="subtitle text-xs font-medium">NEW CONFIRMED</p>
                </div>
                <div className="flex flex-col gap-1 pt-2 text-center gap-1">
                    <h1 className="title text-lg font-medium">{NewRecovered}</h1>
                    <p className="subtitle text-xs font-medium">NEW RECOVERED</p>
                    <h1 className="title text-lg font-medium">{TotalRecovered}</h1>
                    <p className="subtitle text-xs font-medium">TOTAL RECOVERED</p>
                </div>
            </div>
        </div>
    )
}

export default Country
