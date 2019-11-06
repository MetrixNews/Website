import React, { Component } from 'react';
import Card from '../article/modal';
import './spectrum.scss';

function Spectrum() {
    return(
        <div className="app">
            <div className="full hide-scroll">
                <ul className="hs">        
                    <Card {...articles} />
                </ul>
            </div>
        </div>
    );
}

export default Spectrum;
        