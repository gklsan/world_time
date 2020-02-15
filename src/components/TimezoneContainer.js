import React, { useEffect, useState } from 'react';
import TimezoneItem from "./TimezoneItem";
import CountriesTimeZones from "countries-and-timezones";
import { Button, Card, Modal } from 'react-bootstrap'

const TimezoneContainer = () => {
  const [countries, setCountries] = useState([])

  useEffect(_ => {
    setCountries(CountriesTimeZones.getAllCountries())
  }, [])

  const countriesList = _ => {
    return Object.keys(countries).map((key, idx) => {
      return <Card className="col-md-3 m-3" key={idx}>
        <TimezoneItem item={countries[key]}></TimezoneItem>
      </Card>
    })
  }

  return(
    <div className="row m-auto">
      {countriesList()}
    </div>
  )
}

export default TimezoneContainer;
