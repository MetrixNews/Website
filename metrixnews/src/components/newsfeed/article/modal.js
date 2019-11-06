import React from 'react';
// import Card from './article_card'
import Article from './article';
import Metrics from './metrics';
import ArticleSummary from './article_summary';
import ArticleContent from './article_content';
import Modal from 'react-bootstrap/Modal'


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

export default Card;