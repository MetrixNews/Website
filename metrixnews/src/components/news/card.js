import React, {memo} from 'react';

import ArticleHead from './article_head';
import ArticlePhoto from './article_photo';
import ArticleTitle from './article_title';
import Metrics from './metrics';
import ArticleContent from './article_content';
import ArticleLink from './article_link';

import Modal from 'react-bootstrap/Modal';

import './newsfeed.scss'

export default React.memo(function Card(props) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
         <a onClick={handleShow}>
            <li className="item">
                  <div className="article">
                      <ArticleHead story={props.story} />
                      <ArticlePhoto photo={props.story.url_to_image} />
                      <ArticleTitle title={props.story.Title} />
                      <Metrics story={props.story}/>
                  </div>
            </li>
         </a>
  
       <Modal show={show} onHide={handleClose} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body >
                <ArticleHead story={props.story}/>
                  <ArticlePhoto photo={props.story.url_to_image}/>
                  <ArticleTitle title={props.story.Title}/>
                  <ArticleContent content={props.story.content}/>
                  <ArticleLink link={props.story.url}/>
            <Metrics story={props.story}/>
          </Modal.Body> 
        </Modal>
      </>

    )
  });

// Card.propTypes = {
//   articles: PropTypes.array
// }