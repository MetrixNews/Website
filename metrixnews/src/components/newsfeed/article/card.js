import React, {Component} from 'react';
import PropTypes from 'prop-types'

import Article from './article';
import Metrics from './metrics';
import ArticleSummary from './article_summary';
import ArticleContent from './article_content';
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
                    <Article story={props.story}/>  
                </div>
                <Metrics />
            </li>
        </a>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className="articlebox" >
                <Article story={props.story}/>
                <ArticleSummary story={props.story}/>
                <ArticleContent story={props.story}/>
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