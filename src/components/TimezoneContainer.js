import React from 'react';
import Timezones from '../datas/timezones';
import TimezoneItem from "./TimezoneItem";

const TimezoneContainer = () => {
    console.log(Timezones);
    // const state = {
    //     timeZones: Timezones
    // };
    const timezoneItems = Timezones.map((item) => <TimezoneItem key={item.value + item.text} item={item}/>);
    return(
        <div>
            {timezoneItems}
        </div>
    )

};

export default TimezoneContainer;
