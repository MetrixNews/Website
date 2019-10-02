import React, { Component }  from 'react';

function Modal() {
    return (
        <a href="#openModal">
            <p>Hello World</p>
            <div id="openModal" className="modalDialog">
                <div>
                    <a href="#close" title="Close" className="close">X</a>

                    <article>
                        <div className="row articlebox">

                        </div>
                    </article>
                </div>
             </div>
        </a>
    )   
}