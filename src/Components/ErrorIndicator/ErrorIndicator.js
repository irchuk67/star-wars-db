import React from "react";
import './ErrorIndicator.css'
import icon from './error-48255.jpg'

const ErrorIndicator = () => {
    return(
        <div className={'error-indicator'}>
            <img src={icon} alt={'error icon'}/>
            <span className="boom">BOOM!</span>
            <span>something went wrong</span>
            <span>(but we try to fix it)</span>
        </div>
    )
};

export default ErrorIndicator;