import React from "react";
import useFormatDate from "../Hooks/useFormatDate";
function Country({ Country, CountryCode, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date,}) {
  const scrollTo = React.useRef();
  React.useEffect(() => {
    //Numbers formatting
    const numbers = document.querySelectorAll("[data-number");
    setTimeout(() =>{
      numbers.forEach((number) => {
        number.innerText = number.innerText.replace(/\B(?=(\d{3})+(?!\d))/g,",");
      });
    }, 2100)
  }, []);
  const { formatedDate } = useFormatDate(Date);
  return (
    <div ref={scrollTo} className="flex flex-1 flex-wrap flex-col items-center border border-solid border-subtitleGreen rounded-lg border-opacity-50 py-3 md:px-2">
      <div className="flex flex-col items-center gap-2 mx-14 mb-2 flex-1">
        <p className="title-medium font-montserrat uppercase">
          atualizado em : <span className="text-subtitleGreen">{formatedDate}</span>
        </p>
        <h1 className="title text-2xl w-40 text-center">
          {CountryCode} - {Country}
        </h1>
        <p className="title text-lg font-medium" data-number>
          {TotalConfirmed}
        </p>
        <p className="subtitle font-medium">casos confirmados</p>
        <p className="title text-lg font-medium" data-number>
          {TotalDeaths}
        </p>
        <p className="subtitle font-medium">casos de morte</p>
      </div>
      <div className="w-full h-1 border-b border-solid border-subtitleGreen border-opacity-50"></div>
      <div className="flex justify-between w-full gap-1">
        <div className="flex flex-col gap-1 pt-2 mr-3 text-center">
          <h1 className="title text-lg font-medium" data-number>
            {NewDeaths}
          </h1>
          <p className="subtitle text-xs font-medium">novas mortes</p>
          <h1 className="title text-lg font-medium" data-number>
            {NewConfirmed}
          </h1>
          <p className="subtitle text-xs font-medium">novos confirmados</p>
        </div>
        <div className="flex flex-col gap-1 pt-2 text-center gap-1">
          <h1 className="title text-lg font-medium" data-number>
            {NewRecovered}
          </h1>
          <p className="subtitle text-xs font-medium">novos recuperados</p>
          <h1 className="title text-lg font-medium" data-number>
            {TotalRecovered}
          </h1>
          <p className="subtitle text-xs font-medium">total de recuperados</p>
        </div>
      </div>
    </div>
  );
}

export default Country;
