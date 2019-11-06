import React, {Component}  from 'react';
import PropTypes from 'prop-types';

import Card from '../article/modal';
import './spectrum.scss';

const articles = [
    {id: 107,
        source: "The New York Times",
        author: "Lisa Friedman and Maggie Haberman",
        title: "Rick Perry Is Said to Be Stepping Down as Energy Secretary by Year’s End",
        description: "An aggressive promoter of President Trump’s fossil fuel agenda, Mr. Perry ended his run as one of the longest serving cabinet members in a tumultuous administration.",
        url: "https://www.nytimes.com/2019/10/04/climate/rick-perry-energy-secretary.html",
        url_to_image: "https://static01.nyt.com/images/2019/04/22/science/00cli-PerryHFO/00cli-PerryHFO-facebookJumbo.jpg",
        content: "Mr. Riddlesperger said Mr. Perrys relatively successful run in the Trump administration underscored the value of experience. Hes one of the very few mainstream political appointments that President Trump made, he said, and I think its not surprising that he f… [+2397 chars]",
        sentiment: "pos",
        emotion: "anticipation",
        political_biasness: "center",
        topic: "Climate Change",
        published_at: "2019-10-04T04:13:20Z"},
    {id: 108,
        source: "The New York Times",
        author: "Lisa Friedman and Maggie Haberman",
        title: "Rick Perry Is Said to Be Stepping Down as Energy Secretary by Year’s End",
        description: "An aggressive promoter of President Trump’s fossil fuel agenda, Mr. Perry ended his run as one of the longest serving cabinet members in a tumultuous administration.",
        url: "https://www.nytimes.com/2019/10/04/climate/rick-perry-energy-secretary.html",
        url_to_image: "https://static01.nyt.com/images/2019/04/22/science/00cli-PerryHFO/00cli-PerryHFO-facebookJumbo.jpg",
        content: "Mr. Riddlesperger said Mr. Perrys relatively successful run in the Trump administration underscored the value of experience. Hes one of the very few mainstream political appointments that President Trump made, he said, and I think its not surprising that he f… [+2397 chars]",
        sentiment: "pos",
        emotion: "anticipation",
        political_biasness: "center",
        topic: "Climate Change",
        published_at: "2019-10-04T04:13:20Z"},
    {id: 109,
        source: "The New York Times",
        author: "Lisa Friedman and Maggie Haberman",
        title: "Rick Perry Is Said to Be Stepping Down as Energy Secretary by Year’s End",
        description: "An aggressive promoter of President Trump’s fossil fuel agenda, Mr. Perry ended his run as one of the longest serving cabinet members in a tumultuous administration.",
        url: "https://www.nytimes.com/2019/10/04/climate/rick-perry-energy-secretary.html",
        url_to_image: "https://static01.nyt.com/images/2019/04/22/science/00cli-PerryHFO/00cli-PerryHFO-facebookJumbo.jpg",
        content: "Mr. Riddlesperger said Mr. Perrys relatively successful run in the Trump administration underscored the value of experience. Hes one of the very few mainstream political appointments that President Trump made, he said, and I think its not surprising that he f… [+2397 chars]",
        sentiment: "pos",
        emotion: "anticipation",
        political_biasness: "center",
        topic: "Climate Change",
        published_at: "2019-10-04T04:13:20Z"},        
]

const Article = props => {
    return(
        <div>
            <p>{props.source}</p>
            <p>{props.author}</p>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}

// Article.propTypes = {
//     source: React.PropTypes.string,
//     author: React.PropTypes.string,
//     title: React.PropTypes.string,
//     description: React.PropTypes.string,
//   }

  const Example = props => {
    const articleArray = props.articles.map((article) => {
      return (
        <Article source={article.source} author={article.author} title={article.title} description={article.description} />
      );
    });
    return (
      <div>
        <h2>Example</h2>
        {articleArray}
      </div>
    );
  };

//   Example.propTypes = {
//     articles: React.PropTypes.array
//   }

  export default Example;


// export default class Spectrum extends Component {
//     render () {
//         const { articles, onTopicClick } = this.props

//         return (
//             <div className="app">
//             <div className="full hide-scroll">
//                 <ul className="hs">
//                     <Card {...articles}/>
//                 </ul>
//             </div>
//         </div>
//         )
//     }
// }



// Spectrum.propTypes = {
//     articles: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         source: PropTypes.string.isRequired,
//         author: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//         url_to_imgage: PropTypes.string.isRequired,
//         content: PropTypes.string.isRequired,
//         sentiment: PropTypes.string.isRequired,
//         emotion: PropTypes.string.isRequired,
//         political_biasness: PropTypes.string.isRequired,
//         topic: PropTypes.string.isRequired,
//         published_at: PropTypes.instanceOf(Date).isRequired,
//       }).isRequired
//     ).isRequired,
//     onTopicClick: PropTypes.func.isRequired
//   }
