import React from "react";

function Header() {
  return (
    <div className="flex max-w-full w-full h-24 py-20 items-center content-center border-2 bg-header-background bg-cover bg-center">
      <div className="flex max-w-5xl border mx-auto flex-col items-center text-white gap-3">
        <p className=" font-montserrat text-md tracking-widest text-subtitleGreen">
          <span className="text-white">#</span>FIQUE
          <span className="text-white">EM</span>CASA
        </p>
        <h1 className="font-montserrat font-bold italic text-4xl">JRBARROZ</h1>
        <p className="font-montserrat text-2xl md:text-3xl">
          COVID <span className="text-subtitleGreen">RESUMO</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
