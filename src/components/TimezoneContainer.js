import React, { Component } from 'react';
import Timezones from '../datas/timezones';
import TimezoneItem from "./TimezoneItem";

class TimezoneContainer extends Component {

    state = {
        timeZones: Timezones
    };

    componentDidMount() {
        setInterval(
            () => this.setState({ timezone: this.state.timeZones }),
            1000
        );
    }

    render() {

        const timezoneItems = this.state.timeZones.map((item, idx) => {
            return <TimezoneItem key={idx} item={item} className=""></TimezoneItem>
        });

        let newTimeZoneItems = [];
        while (timezoneItems.length > 0) {
            newTimeZoneItems = [...newTimeZoneItems, timezoneItems.splice(0,3)];
        }

        // const timezoneItems = this.state.timeZones.map((item, idx) => item.utc[0] && <TimezoneItem key={item.value + item.text} item={item}/> );
        return (
            newTimeZoneItems.map((items, idx) => {
                return (
                    <div key={idx} className="row">
                        {items.map((item, i) => {
                            return(
                                <div key={i} className='card col-3 col-md-3 m-3'>
                                    {item}
                                </div>)
                        })}
                    </div>
                )
            })
        )
    }

}

export default TimezoneContainer;
