import React, { useState } from 'react';
// components=====================
import PasswordInput from '../paswordInput';
// css=================================
import './style.css';
import logo from './RozetkaCircle.svg'
function MyForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // const [myState, setMyState] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const passwordValue = new PasswordInput;
        const data = {
            name: name,
            pass: passwordValue.handlePasswordChange()
        }


        // console.log(data);
        // fetch(`http://localhost:3000/pasword/login`, {
        //     method: 'POST',
        //     body: { data }
        // })

    };

    return (
        <form className='myForm' onSubmit={handleSubmit}>
            <div className='myForm__content'>
                <div className='input_wrap'>
                    <div className='wrap__rozetka'>
                        <div className='rozetka__img'>
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className='input_wrap'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="User Name" />
                </div>
                {/* state={myState} setMyState={setMyState} */}

                <PasswordInput type={showPassword} setSHow={setShowPassword} value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='input_wrap'> <button type="submit" className='form__button'>Login</button></div>

            </div>

        </form>
    );
}

export default MyForm;
