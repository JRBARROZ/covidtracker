import React from "react";
import useFormatDate from "../Hooks/useFormatDate";
import {VictoryPie} from 'victory';
import CountUp from 'react-countup';
function Global({ globalData }) {
  const { formatedDate } = useFormatDate(globalData.Date);
  const graph = [
    {x : "CASOS", y: globalData.TotalConfirmed},
    {x : "MORTES", y: globalData.TotalDeaths},
    {x : "RECUPERADOS", y: globalData.TotalRecovered},
  ]
  return (
    <section className="flex flex-wrap w-full mt-5 border border-solid border-subtitleGreen rounded-lg border-opacity-50">
      <div className="global-item">
        <p className=" mb-4 title-medium font-montserrat uppercase">
          atualizado em :<span className="text-subtitleGreen"> {formatedDate}</span>
        </p>
        <h1 className="title text-2xl" data-number>
          <CountUp end={globalData.TotalConfirmed} />
        </h1>
        <p className="subtitle mt-2 font-medium">casos confirmados</p>
        <h1 className="title text-2xl mt-7" data-number>
          <CountUp end={globalData.TotalDeaths} />
        </h1>
        <p className="subtitle mt-2 font-medium">casos de morte</p>
      </div>
      <div className="global-item lg:mx-0 flex flex-col gap-2">
        <h1 className="title text-xl font-medium" data-number>
          <CountUp end={globalData.NewDeaths} />
        </h1>
        <p className="subtitle title-medium">novas mortes</p>
        <h1 className="title text-xl font-medium" data-number>
          <CountUp end={globalData.NewConfirmed} />
        </h1>
        <p className="subtitle title-medium">novos confirmados</p>
        <h1 className="title text-xl font-medium" data-number>
          <CountUp end={globalData.NewRecovered} />
        </h1>
        <p className="subtitle title-medium">novos recuperados</p>
        <h1 className="title text-xl font-medium" data-number>
          <CountUp end={globalData.TotalRecovered} />
        </h1>
        <p className="subtitle title-medium">Total de recuperados</p>
      </div>
      <div className="border-0 mx-auto">
        <VictoryPie 
          innerRadius={50} 
          colorScale={["#34D399", "#6EE7B7", "#A7F3D0"]}
          data={graph} height={300} 
          style={{labels: {fontFamily:"Montserrat", fontSize: 11, fontWeight: 500}}} 
        />
      </div>
    </section>
  );
}

export default Global;
