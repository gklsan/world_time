import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

import TimezoneContainer from "./components/TimezoneContainer";

const App = () => {
    return(
        <div className="container">
            <h1 className="text-uppercase text-center">World Clock</h1>
            <div className="ml-5">
                <TimezoneContainer />
            </div>
        </div>
    )
};

render(<App />, document.getElementById('root'));
