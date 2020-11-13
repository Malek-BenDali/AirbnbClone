import React, { useState } from 'react'
import '../css/Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search'
import { useHistory } from 'react-router-dom';


function Banner() {
    const history = useHistory();
    const [showButton , setShowButton] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                
                <Button className="banner__searchButton" variant="outlined" onClick ={()=> setShowButton(!showButton)} >
                     {showButton ? "hide" : "Search Dates"}
                </Button>
                {showButton && <Search /> }
            </div>
            <div className="banner__info">
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    plan a different kinf of gateaway to uncover the hidden gems near you
                </h5>
                <Button
                onClick={()=> history.push("/search")}
                variant="outlined"> Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
