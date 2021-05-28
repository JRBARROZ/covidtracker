import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Global from './Components/Global'
import Country from './Components/Country'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex flex-col gap-10 relative w-full mt-10 max-w-5xl  mx-auto flex-1">
          <section className="data-section text-center sm:text-left">
            <p className="subtitle">#WASHYOURHANDS</p>
            <h1 className="title">GLOBAL SITUATION</h1>
            <Global />
          </section>
          <section className="data-section mb-10 text-center sm:text-left">
            <p className="subtitle">#USEMASKS</p>
            <h1 className="title">SITUATION BY COUNTRY</h1>
            <section className="flex flex-wrap w-full mt-5 gap-4 justify-center md:justify-start">
              <Country />
              <Country />
              <Country />
            </section>
          </section>
        </main>
      <Footer />
    </div>
  );
}

export default App;
