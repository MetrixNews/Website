import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './news_spectrum';
import App from './App';
import * as serviceWorker from './serviceWorker';






  ReactDOM.render(
    <ArticleContent
        sectionTitle={articleContent.sectionTitle}
        text={articleContent.text}
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