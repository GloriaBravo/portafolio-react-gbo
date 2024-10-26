
import React from 'react';
import logo from '../../../assets/images/logo.mp4';
import { ImgComponent } from '../../UI/LogoComponent/LogoComponent';

export const IntroProfile = ({ src, alt }) => {
    return (
        <div className='container-img'>
            <ImgComponent src={logo} alt='logo' />
            
        </div>
    );
};
