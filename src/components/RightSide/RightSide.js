import React from 'react';
import './RightSide.css';
import logo from '../../assets/logo-login.svg';
import img from '../../assets/rightside-img.svg';
import s from '../../assets/S.svg';
import a from '../../assets/a.svg';

const RightSide = () => {
    return (
        <div className="h-100 right_container">
            <div className="logo_container">
                <img src={logo} alt="logo" className="logo"/>
                <a className="logo_link" href="https://www.google.com">ajuda</a>
            </div>
            <div className="img_container">
                <img src={img} alt="img" className="img"/>
            </div>
            <div className="footer">
            <p>UI/UX Design and Front-end by:</p>
            <p>© 2021, Projetolist</p>
            <div className="sa">
                <img src={s} alt="s" />
                <img src={a} alt="a" />
            </div>
            </div>
        </div>
    )
}

export default RightSide
