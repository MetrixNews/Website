import React, { Component }  from 'react';


function ArticleSummary(props) {
    return (
        <section>
            <h4>{articleSummary.sectionTitle}</h4>
            <p className = "article_content">
                {articleSummary.text}            
            </p>
      </section>
    )
}

const articleSummary = {
    sectionTitle: 'Summary',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};