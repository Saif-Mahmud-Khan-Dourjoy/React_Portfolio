import React from 'react'
import Common from './common'
import aboutImg from "../img/homefinal2.png";

const about = () => {
    return (
        <>
            <Common
            name="Grow Your Business With"
            imgsrc={aboutImg}
            visit="/contact"
            button_name="Contact Us"
            />
        </>
    )
}

export default about
