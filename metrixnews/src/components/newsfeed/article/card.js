import React, {Component} from 'react';
import PropTypes from 'prop-types'

import ArticleHead from './article_head';
import ArticlePhoto from './article_photo';
import ArticleTitle from './article_title';
import Metrics from './metrics';
import ArticleSummary from './article_summary';
import ArticleContent from './article_content';
import ArticleLink from './article_link';
import Modal from 'react-bootstrap/Modal'
import '../newsfeed.scss'

export default function Card(props) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

      <>
        <a onClick={handleShow}>
        
            <li className="item">
                <div className="row articlebox">
                  <div className="article">
                      <ArticleHead story={props.story} />
                      <ArticlePhoto story={props.story} />
                      <ArticleTitle story={props.story} />
                      <ArticleSummary story={props.story} />
                      <ArticleLink story={props.story} />
                  </div>
                </div>
                <Metrics />
            </li>
        </a>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className="articlebox" >
              <div className="article">
                <ArticleHead story={props.story}/>
                <ArticlePhoto story={props.story}/>
                <ArticleTitle story={props.story}/>
                <ArticleSummary story={props.story}/>
                <ArticleContent story={props.story}/>
                <ArticleLink story={props.story}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Metrics />
          </Modal.Footer>
        </Modal>
      </> 

    )
  }

Card.propTypes = {
  articles: PropTypes.array
}