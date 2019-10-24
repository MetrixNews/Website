import React, { Component }  from 'react';
import ShowModal from '../article/modal'
import './spectrum.scss'

function Spectrum(props) {
    return(
        <div className="app">
            <div className="full hide-scroll">
                <ul className="hs">
                    <ShowModal />
                    <ShowModal />
                    <ShowModal />
                    <ShowModal />
                    <ShowModal />
                </ul>
            </div>
        </div>
    )
}

export default Spectrum;