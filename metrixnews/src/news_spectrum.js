import React from 'react';

const News_Spectrum = () => {
  return (
    <div className="app">
    <div className="newsTopic">
    <a href="topic.html">
        <h2>Climate Change</h2>
    </a>
    </div>

    <div className="full hide-scroll">

        <ul className="hs">

        <li className="item">
            <a href="#openModal">
            <div className="row articlebox">

                <div className="publish_info">
                <div className="logo_div">
                    <img src="images\source_logos\new_york_times.png" className="source_logo"  alt=""/>
                </div>

                <div className="publish_text">
                    <span className="source_name">The New York Times</span><br/>
                    <span className="author">Marcus Cymerman</span>
                    <span>   -   </span>
                    <span className="time">15m</span>
                </div>
                </div>

                <div>
                <img className="articlephoto" src="images\test.jpg" alt=""/>
                </div>

                <div className="row">
                    <p className="headline">The findings of a new study that looked at the heart of a swimmer vs. the heart of a runner underscored how sensitive our bodies are to different types of exercise</p>
                </div>

                <div className="article_link">
                <i className="fas fa-link"></i>
                <a href="https://www.nytimes.com/" className="article_link" target="_blank">https://www.nytimes.com/</a>
                <span></span>
                </div>
            </div>
        </a>

            <div className="metricRow">
                <img src="images\emojis\left.png" className="metric" alt="bias"/>
                <img  src="images\emojis\joy.png" className="metric" alt="emotion"/>
                <img  src="images\emojis\sentiment-score-positive.png" className="metric" alt="sentiment"/>
            </div>


            <div id="openModal" className="modalDialog">
                <div>
                    <a href="#close" title="Close" className="close">X</a>

                <article>
                    <div className="row articlebox">

                    <section>
                        <div className="publish_info">
                        <div className="logo_div">
                            <img src="images\source_logos\new_york_times.png" className="source_logo"  alt=""/>
                        </div>

                        <div className="publish_text">
                            <span className="source_name">The New York Times</span><br/>
                            <span className="author">Marcus Cymerman</span>
                            <span>   -   </span>
                            <span className="time">15m</span>
                        </div>
                        </div>
                    </section>

                    <section>
                        <img className="articlephoto" src="images\test2.jpg" alt=""/>
                    </section>

                    <section>
                        <h4>Summary</h4>
                        <p className = "article_description">
                        Lorem ipsum dolor sit amet, vim aliquam inimicus reformidans in, eu altera eirmod propriae mel. Sit fabulas facilisis no, consul invenire ius no, sea quodsi audire torquatos et. Pro eruditi expetenda ut. Usu te diam magna erroribus, omittam pertinacia est ei. Nec at clita vivendum, ei iuvaret detraxit vim. Te habeo timeam neglegentur duo, erat probo ei vel, corpora abhorreant sit at.
                        </p>
                    </section>

                    <section>
                        <h4>Content</h4>
                        <p className = "article_content">
                        Lorem ipsum dolor sit amet, vim aliquam inimicus reformidans in, eu altera eirmod propriae mel. Sit fabulas facilisis no, consul invenire ius no, sea quodsi audire torquatos et. Pro eruditi expetenda ut. Usu te diam magna erroribus, omittam pertinacia est ei. Nec at clita vivendum, ei iuvaret detraxit vim. Te habeo timeam neglegentur duo, erat probo ei vel, corpora abhorreant sit at.
                        </p>
                    </section>

                    <div className="article_link">
                        <i className="fas fa-link"></i>
                        <a href="https://www.nytimes.com/" className="article_link" target="_blank">https://www.nytimes.com/</a>
                        <span></span>
                    </div>

                    </div>
                    <div className="metricRow">
                    <img src="images\emojis\left.png" className="metric" alt="bias"/>
                    <img  src="images\emojis\joy.png" className="metric" alt="emotion"/>
                    <img  src="images\emojis\sentiment-score-positive.png" className="metric" alt="sentiment"/>
                    </div>

                </article>
                </div>
            </div>
            </li>
            </ul>
    </div>
    </div>
  );
}


export default News_Spectrum;