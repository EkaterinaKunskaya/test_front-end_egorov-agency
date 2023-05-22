import { useState, useEffect } from 'react';
import axios from 'axios';

import { Modal } from './Modal';

import './Footer.scss';


export const Footer = () => {
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState();
    const [emailError, setEmailError] = useState(null);
    const [inputValid, setInputValid] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState();

    useEffect(() => {
        (emailError) ? setInputValid(false) : setInputValid(true);
    }, [emailError]);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        (!validateEmail(e.target.value)) ? setEmailError('Invalid email') : setEmailError(null);
    }

    const ButtonClickHandler = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                email: email,
            },
        )
            .then((response) => {
                console.log(response);
                setShowModal(true);
                setSuccess(true);
            })
            .catch((err) => {
                console.log(err);
                setShowModal(true);
                setSuccess(false);
            });
    }

    return (
        <footer className="footer">
            <div className="footer__conteiner-email">
                <div className="footer__email">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email and get notified"
                        value={email}
                        onChange={emailHandler}
                        onBlur={() => setEmailDirty(true)}
                    />
                    <button type="submit" disabled={!inputValid} onClick={ButtonClickHandler} />
                </div>
                {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
            </div>
            <a href="#id" className='button-other-events'>Other Events</a>
            {showModal &&
                <Modal
                    isOpened={showModal}
                    onModalClose={(e) => {
                        if (e.target === e.currentTarget) setShowModal(false)
                    }}
                    success={success}
                />
            }
        </footer>
    );
}