// import React, { Fragment, PureComponent } from "react";
// import { Element } from 'react-scroll'

// import NewSpectrum from "../news/NewSpectrum";
// import Data from '../src/components/topics/topic_data';

// const topic = {
//   borderTop: "solid 2px var(--highlight-color)",
//   backgroundColor: "var(--bg-color)",
//   marginBottom: 25,
// }

// class NewTopic extends PureComponent {
//   constructor(props) {
//     super(props);
//   }
    
//   state = {
//     hasNextPage: true,
//     isNextPageLoading: false,
//     items: []
//   };

//   articles = this.props.topic.articles

//   _loadNextPage = (...args) => {
//     console.log("loadNextPage", ...args);
//     this.setState({ isNextPageLoading: true }, () => {
//       setTimeout(() => {
//         this.setState(state => ({
//           hasNextPage: state.items.length < 100,
//           isNextPageLoading: false,
//           items: [...state.items].concat(
//             new Array(10).fill(true).map(() => ({articles: this.props.topic.articles}))
//           )
//         }));
//       }, 2500);
//     });
//   };

//   render() {
//     const { hasNextPage, isNextPageLoading, items } = this.state;

//     return (
//       <Element id={this.props.topic.topic} name={this.props.topic.topic}>
//       <div style={topic}>
//         <div className="half">
//           <h2 className="topic">{this.props.topic.topic}</h2>
//         </div>
//         <Data topic={this.props.topic}/>
//         <NewSpectrum
//           hasNextPage={hasNextPage}
//           isNextPageLoading={isNextPageLoading}
//           items={this.props.topic.articles}
//           loadNextPage={this._loadNextPage}
//         />
//       </div>
//     </Element>
//     );
//   }
// }

// export default NewTopic;
