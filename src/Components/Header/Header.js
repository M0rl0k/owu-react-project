import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import './header_module.css'

const Header = () => {
    return (
        <div className={'header'}>
            <div className="project_name">OWU TMBD TASK</div>
            <div className="switcher">Light/Dark</div>
            <UserInfo/>
        </div>
    );
};

export default Header;