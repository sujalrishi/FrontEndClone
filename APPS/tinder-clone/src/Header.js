import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" classname="header_icon" />
            </IconButton>

            <img className="header_logo" src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder-logo" />
            <IconButton>
                <ForumIcon fontSize="large" classname="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header
