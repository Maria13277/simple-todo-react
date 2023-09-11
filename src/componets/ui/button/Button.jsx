import React from 'react'

import './../button/button.css'

export default function Button({onClickHandler}) {
    return (
        <div className="button" onClick={onClickHandler}>
            <p className='button-symbol'>+</p>
        </div>
       
    );
}