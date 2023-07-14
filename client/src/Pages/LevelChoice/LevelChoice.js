import React, { useState, useEffect } from 'react';
import './LevelChoice.css';
//Components
import companyLogo from '../../Images/Logo_Transparent.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
//Functions
import CheckLogin from '../../Functions/VerificationCheck/checkLogin';
//Repositories
import { useNavigate, useLocation, Link } from 'react-router-dom';

const LevelChoice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userLoggedIn = CheckLogin();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        setIsLoading(true);
        if (userLoggedIn){
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
            navigate('/Login', {
                state: {
                    previousUrl: location.pathname,
                }
            });
        }
    }, [userLoggedIn]);

    return (
        <>
            <Header/>
            <div className='levelChoicePage_container'>
                <div className='levelChoice_form'>
                    <img src={companyLogo} alt ="Catching Souls Logo" />
                    <h1>Trivia Levels</h1>
                    <a href='/LevelChoice/Beginner'><button className='levelChoiceButton'>Beginner</button></a>
                    <a href='/LevelChoice/Intermediate'><button className='levelChoiceButton'>Intermediate</button></a>
                    <a href='/LevelChoice/Advance'><button className='levelChoiceButton'>Advance</button></a>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LevelChoice;
