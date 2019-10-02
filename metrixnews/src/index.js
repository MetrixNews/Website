import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function Candidate(props) {
    return (
        <CardDeck>
            
        </CardDeck>
    )   
}


const candidate = {
    pic:  'https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg',
    name: 'Bernie Sanders',
    party: 'Democrat',
    title: 'U.S. Senator',
    state: 'Vermont',
    slogan: '"Not Me, Us"'
};



  ReactDOM.render(
    <Candidate
        pic={candidate.pic}
        name={candidate.name}
        party={candidate.party}
        title={candidate.title}
        state={candidate.state}
        slogan={candidate.slogan}
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