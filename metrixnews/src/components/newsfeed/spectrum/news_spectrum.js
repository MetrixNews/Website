import React, { Component }  from 'react';
import Modal from '../article/modal'
import './spectrum.scss'

function Spectrum(props) {
    return(
        <div className="app">
            <div className="full hide-scroll">
                <ul className="hs">
                    <Modal />
                    <Modal />
                    <Modal />
                    <Modal />
                    <Modal />
                </ul>
            </div>
        </div>
    )
}

export default Spectrum;