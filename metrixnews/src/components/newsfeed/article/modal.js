import React from 'react';
// import Card from './article_card'
import Article from './article';
import Metrics from './metrics';
import ArticleSummary from './article_summary';
import ArticleContent from './article_content';
import Modal from 'react-bootstrap/Modal'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

import './article.scss'


function Card() {
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
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  





// function Modal() {
//     return (
//         <div>
//             <Card />
//             <div id="openModal" className="modalDialog">
//                 <div>
//                     <a href="#close" title="Close" className="close">X</a>
//                     <article>
//                         <div className="row articlebox">
//                             <Article />
//                             <ArticleSummary />
//                             <ArticleContent />
//                         </div>
//                         <Metrics />
//                     </article>
//                 </div> 
//              </div> 
//         </div>
//     )   
// }

export default ArticleModal;