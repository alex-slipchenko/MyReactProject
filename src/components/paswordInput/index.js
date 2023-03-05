// import React, { Component } from 'react';
// import React, { useState } from 'react';
// import React from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import './style.css';

function PasswordInput(props) {

    // myprops============
    // console.log(props.type);
    // console.log(props.setSHow);
    // console.log(props.value);

    const handleTogglePassword = () => {
        if (props.type) {
            return props.setSHow(false);
        }
        return props.setSHow(true)

    }

    return (
        <div className='input_wrap'>
            <input type={(props.type) ? 'text' : 'password'}
                value={props.value}
                onChange={props.onChange} placeholder="Password" />
            <i onClick={handleTogglePassword}>
                {props.type ? <BsFillEyeFill className='eye' /> : <BsFillEyeSlashFill className='eye' />}

            </i>
        </div>


    );
}


export default PasswordInput;