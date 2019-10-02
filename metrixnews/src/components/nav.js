import React, { Component }  from 'react';

function Nav(props) {
    return (
        <div className="nav">
            <div className="nav-links">
            <a href="index.html">
                <i className="fa fa-newspaper-o"></i>
                <span>News</span>
            </a>
            <a href="election.html">
                <i className="fas fa-balance-scale"></i>
                <span>Election</span>
            </a>
            <a href="about.html">
                <i className="fas fa-info"></i>
                <span>About</span>
            </a>
            <a href="signin.html">
                <i className="far fa-user"></i>
                <span>Profile</span>
            </a>
            </div>
            </div>
      );
}
