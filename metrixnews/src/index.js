import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


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

// const articleSummary = {
//     sectionTitle: 'Summary',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
// };



  ReactDOM.render(
    <Modal
    />,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// function PageHeader(props) {
//     return (
//         <div className="pageDescription">
//             <h1>{props.title}</h1>
//             <p>{props.desc}</p>
//         </div>
//     )
// }

// const page_header = {
//     title: 'NEWS EXPLORATION',
//     desc: 'Browse todays hottest political topics from trusted news sources. Select any topic to analyze it more in depth. Click here to suggest a new topic or source. Visit the About page to learn how we label articles.'
// };