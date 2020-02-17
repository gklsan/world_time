import React, { useEffect, useState } from 'react';
import TimezoneItem from "./TimezoneItem";
import CountriesTimeZones from "countries-and-timezones";
import SearchBar from './SearchBar'
import { Card } from 'react-bootstrap'

const TimezoneContainer = () => {
  const countriesListWithTimezones = CountriesTimeZones.getAllCountries()
  const [countries, setCountries] = useState([])

  const filterObject = (obj, text) =>
    Object.keys(obj).filter(key =>
      obj[key].name.toLowerCase().search(text) !== -1
    ).map(key => obj[key])


  const onChangeHandler = (event) => {
    const text = event.target.value
    const res = (!text || text === '') ? countriesListWithTimezones : filterObject(countriesListWithTimezones, text)
    setCountries(res);
  }

  useEffect(_ => {
    setCountries(CountriesTimeZones.getAllCountries())
  }, [])

  const countriesList = _ => {
    if(countries.length === 0) return <p> Result not found!!!</p>

    return Object.keys(countries).map((key, idx) => {
      return <Card className="col-md-3 m-3" key={idx}>
        <TimezoneItem item={countries[key]}></TimezoneItem>
      </Card>
    })
  }

  return(
    <div>
      <div className="row m-auto">
        <SearchBar onChangeHandler={onChangeHandler}/>
      </div>
      <div className="row m-auto">
        {countriesList()}
      </div>
    </div>
  )
}

export default TimezoneContainer;
