import React , { useState } from 'react'
import Countries from './data/countries.json'
import CountryBox from './components/CountryBox'
import NavBar from './components/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const [isDark, setIsDark] = useState(true);

  const DarkStyles = {
    backgroundColor: 'Black'
  };

  const LightStyles = {
    backgroundColor: 'white'
  };

  const myStyles = isDark ? DarkStyles : LightStyles;

  const handleClick = () => {
    setIsDark(!isDark);
  };

  const [sortCountries, setCoutries] = useState(Countries)
  
  const sortedPopulation  = () => [...sortCountries].sort((a, b) => parseInt(a.population) - parseInt(b.population))
  
  const sortPopulation = () => {
    setCoutries(sortedPopulation);
  }

  const sortedName = () => {
    return (
      [...sortCountries].sort((a, b) => {
        if (a.countryName < b.countryName) {
          return -1;
        }
        if (a.countryName > b.countryName) {
          return 1;
        }
        return 0;
      })
    )
  }

  const sortName = () => {
    setCoutries(sortedName);
  }
  return (

    <div>
      <NavBar click={handleClick} dark={isDark} population={sortPopulation} name={sortName} />
      <div className='countries-container' style={myStyles}>
        {
          sortCountries.map(Country => {
            return (
              <CountryBox name={Country.countryName} population={Country.population} capital={Country.capital} con={Country.continentName} code={Country.countryCode} dark={isDark} />
            )
          })
        }  
      </div>
    </div>
  )
}

export default App
