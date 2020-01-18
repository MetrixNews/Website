import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';

import ArticleHead from './article_head';
import ArticlePhoto from './article_photo';
import ArticleTitle from './article_title';
import Metrics from './metrics';
import ArticleSummary from './article_summary';
import ArticleContent from './article_content';
import ArticleLink from './article_link';
import CorrectionForm from './correction_form';
import Modal from 'react-bootstrap/Modal';

import '../newsfeed.scss'

export default function Card(props) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { handleSubmit } = props

    return (
      <>
        <a onClick={handleShow}>
            <li className="item">
                  <div className="article">
                      <ArticleHead story={props.story} />
                      <ArticlePhoto story={props.story} />
                      <ArticleTitle story={props.story} />
                      {/* <ArticleSummary story={props.story}/> */}
                      <Metrics story={props.story}/>
                  </div>
            </li>
        </a>
  
        <Modal show={show} onHide={handleClose} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body >
                <ArticleHead story={props.story}/>
                  <ArticlePhoto story={props.story}/>
                  <ArticleTitle story={props.story}/>
                  {/* <ArticleSummary story={props.story}/> */}
                  <ArticleContent story={props.story}/>
                  <ArticleLink story={props.story}/>
            <Metrics story={props.story}/>
          </Modal.Body> 
          <Modal.Footer>
            <CorrectionForm onSubmit={props.handleSubmit} />
          </Modal.Footer>
        </Modal>
      </> 

    )
  }

Card.propTypes = {
  articles: PropTypes.array
}