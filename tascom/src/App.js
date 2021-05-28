import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Global from './Components/Global'
import Country from './Components/Country'
import { GET_SUMMARY } from './Api/api.js'
import useFetch from './Hooks/useFetch'
import Loading from './Components/Helpers/Loading'
import Error from './Components/Helpers/Error'
function App() {
  const {data, loading, error, request} = useFetch();
  // Doing request to summary API
  React.useEffect(() =>{
    const {url, options} = GET_SUMMARY();
    request(url, options);
  },[request])
  if(error) return <Error error={error}/>
  if(loading) return <Loading />
  if(data)
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
          <main className="flex flex-col gap-10 relative w-full mt-10 max-w-6xl  mx-auto flex-1">
            <section className="data-section text-center sm:text-left animate-slideLeft">
              <p className="subtitle">#WASHYOURHANDS</p>
              <h1 className="title">GLOBAL SITUATION</h1>
              <Global globalData={data.Global}/>
            </section>
            <section className="data-section mb-10 text-center sm:text-left animate-slideLeft">
              <p className="subtitle">#USEMASKS</p>
              <h1 className="title">SITUATION BY COUNTRY</h1>
              <section className="flex flex-wrap w-full mt-5 gap-4 justify-center md:justify-start ">
                { data.Countries && data.Countries.slice(23, 29).map((country)=>(
                  <Country key={country.Slug} {...country} />
                ))}
              </section>
            </section>
          </main>
        <Footer />
      </div>
    );
  else return null
}

export default App;
