import React, { Component } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import './style.css';

class PasswordInput extends Component {
    state = {
        password: '',
        showPassword: false,

    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleTogglePassword = () => {
        this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
    };

    render() {
        const { password, showPassword, } = this.state;

        return (
            <div className='input_wrap'>
                <input type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={this.handlePasswordChange} placeholder="Password" />
                <i onClick={this.handleTogglePassword}>
                    {showPassword ? <BsFillEyeFill className='eye' /> : <BsFillEyeSlashFill className='eye' />}

                </i>
            </div>


        );
    }
}

export default PasswordInput;