import React, { Component }  from 'react';

function ArticleContent(props) {
    return (
        <section>
            <h4>{articleContent.sectionTitle}</h4>
            <p className = "article_description">
                {articleContent.text}
            </p>
        </section>
    )
}

const articleContent = {
    sectionTitle: 'Content',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};