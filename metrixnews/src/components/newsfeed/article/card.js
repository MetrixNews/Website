import React, {Component} from 'react';
import PropTypes from 'prop-types'

import Article from './article';
import Metrics from './metrics';
import ArticleSummary from './article_summary';
import ArticleContent from './article_content';
import Modal from 'react-bootstrap/Modal'
import './article.scss'

export default class Card extends Component {
  render() {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

      <>
        <a onClick={handleShow}>
        
            <li className="item">
                <div className="row articlebox">
                    <Article />  
                </div>
                    <Metrics />
            </li>
        </a>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className="row articlebox">
                <Article />
                <ArticleSummary />
                <ArticleContent />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Metrics />
          </Modal.Footer>
        </Modal>
      </>

    )
  }
}

Card.propTypes = {
  articles: PropTypes.array
}