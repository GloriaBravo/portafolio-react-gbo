import logoreact from 'https://res.cloudinary.com/dgptubcdt/image/upload/v1729915685/react-logo_3x_tdhfxw.svg';
import React from 'react';
import logo from '../../../assets/images/logo.mp4'; // Corregido: falta de comillas al final
import { ImgComponent } from '../../UI/LogoComponent/LogoComponent';

export const IntroProfile = ({ src, alt }) => {
    return (
        <div className='container-img'>
            <ImgComponent src={logo} alt='logo' />
            <ImgComponent src={logoreact} alt={logoreact} /> {/* Corregido: uso de comillas en el alt */}
        </div>
    );
};
