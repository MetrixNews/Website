import React, { Component }  from 'react';
import Card from '../article/modal'
import './spectrum.scss'

function Spectrum(props) {
    return(
        <div className="app">
            <div className="full hide-scroll">
                <ul className="hs">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
        </div>
    )
}

export default Spectrum;