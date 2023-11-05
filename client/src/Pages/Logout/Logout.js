import React, { useState, useEffect } from 'react';
import './Logout.css'
//Components
import companyLogo from '../../Images/Logo_Transparent.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
//Functions
import CheckLogin from '../../Functions/VerificationCheck/checkLogin';
//Repositories
import Axios from 'axios';

const Logout = () => {
    const userLoggedIn = CheckLogin();
    const [statusMessage, setStatusMessage] = useState('');

    const logout = async () => {
        const url = process.env.REACT_APP_Backend_URL + '/user/logout';

        await Axios.post(url)
        .then((response) => {
            setStatusMessage(response.data.message);
        });
    }


    if (userLoggedIn) {
        logout();
    }
    else if (sessionStorage.getItem('catchingSoulsGuestLoggedin')) {
        sessionStorage.removeItem('catchingSoulsGuestLoggedin');
        sessionStorage.removeItem('catchingSoulsGuestUsername');
        sessionStorage.removeItem('catchingSoulsGuestPoints');
    }

    return (
        <>
            <Header/>
            <div className='logoutPage_container'>
                <div className='logout_form'>
                    <img src={companyLogo} alt ="Catching Souls Logo" />
                    <h1>{statusMessage}</h1>
                    <p>Select <strong>login</strong> to sign back in!</p>
                    <a href='/login'><button className='logoutButton'>Login</button></a>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Logout;