import React from 'react';
import Common from './common';

import homeImg from "../img/homefinal.png";
import "./css/common.css";

const home = () => {
    return (
        <>
        <Common
            name="Start Your Business With"
            imgsrc={homeImg}
            visit="/project"
            button_name="Get Strated"
        />
        </>
    )
}

export default home
