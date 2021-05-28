import React from "react";
import {ReactComponent as Virus} from '../../Assets/Images/Virus.svg'
function Loading() {
  return (
        <div className="flex flex-col justify-center items-center justify-center w-screen h-screen bg-white">
            <div className="flex flex-col items-center justify-center animate-emerge">
                <div className="flex items-center justify-center w-36 h-36 bg-transparent border-left border-2 border-solid border-subtitleGreen rounded-full animate-spin">
                    <Virus/>
                </div>
                <p className="title text-xl mt-10 tracking-widest font-normal uppercase">Carregando...</p>
            </div>
        </div>
    )
}

export default Loading;
