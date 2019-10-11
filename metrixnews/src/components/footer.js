import React, { Component }  from 'react';

// Needs social links
function Footer() {
    return (
        <footer>
        <div className="socialLinks">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
        </div>
            <i className="far fa-copyright"></i><span>2019 MetrixNews. All Rights Reserved</span>
        </footer>
    )
}

export default Footer;