import React, { Component }  from 'react';
import './page_structure.scss'

function PageHeader() {
    return (
        <div className="pageDescription">
            <h1>Newsfeed</h1>
            {/* <p>Freely explore political topics from many perspectives and check the data behind the arguments</p> */}
        </div>
    )
}

// const page_header = {
//     title: 'NEWS EXPLORATION',
//     desc: 'Browse todays hottest political topics from trusted news sources. Select any topic to analyze it more in depth. Click here to suggest a new topic or source. Visit the About page to learn how we label articles.'
// };

export default PageHeader;