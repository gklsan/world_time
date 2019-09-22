import React, { Component } from 'react'
import MomentTimezone from 'moment-timezone';

const TimezoneItem = (props) => {
    const {utc, value, abbr, text} = props.item;
    return (
        <div className='mt-3'>
            { utc[0] && <p className='c-datetime'>{MomentTimezone().tz(utc[0]).format('DD-MM-YYYY hh:mm:ss A')} ({abbr})</p> }
            <p>{ text }</p>
            <p>{ utc.join(", ") }</p>
        </div>
    )
}

export default TimezoneItem
