import React from 'react'
import Countries from './data/countries.json'
import CountryBox from './components/CountryBox'
import './App.css'

function App() {

  return (
    <div className='countries-container'>
      
      {
        Countries.map(Country => {
          return (
            <CountryBox name={Country.countryName} population={Country.population} capital={Country.capital} con={Country.continentName} />
          )
        })
      }

    </div>
  )
}

export default App
