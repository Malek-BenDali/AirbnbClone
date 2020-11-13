import React from 'react'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'> 
        <Link to="/">
            <img 
                className="header__icon"
                src="https://www.jouan-derham.ch/files/4415/7968/8559/Capture_decran_2020-01-22_a_11.22.11.png"
                alt=""
            />
        </Link>

            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>

            <di className="header__right">
                <p> Become a host </p>
                <LanguageIcon />
                < ExpandMoreIcon />
                <Avatar />
            </di>

        </div>
    )
}

export default Header
