import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Example from './newsfeed/spectrum/news_spectrum';
import TopicComponent from './topic';
// import {
//   selectCategory,
//   fetchArticlesIfNeeded,
//   invalidateCategory,
//   categories
// } from '../actions/newsfeed'

// class NewsfeedComponent extends Component {
//   constructor(props) {
//     super(props)
//     this.handleChange = this.handleChange.bind(this)
//     this.handleRefreshClick = this.handleRefreshClick.bind(this)
//   }

//   componentDidMount() {
//     const { dispatch, selectedCategory } = this.props
//     dispatch(fetchArticlesIfNeeded(selectedCategory))
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.selectedCategory !== prevProps.selectedCategory) {
//       const { dispatch, selectedCategory } = this.props
//       dispatch(fetchArticlesIfNeeded(selectedCategory))
//     }
//   }

//   handleChange(nextCategory) {
//     this.props.dispatch(selectCategory(nextCategory))
//     this.props.dispatch(fetchArticlesIfNeeded(nextCategory))
//   }

//   handleRefreshClick(e) {
//     e.preventDefault()

//     const { dispatch, selectedCategory } = this.props
//     dispatch(invalidateCategory(selectedCategory))
//     dispatch(fetchArticlesIfNeeded(selectedCategory))
//   }

//   render() {
//     const { selectedCategory, articles, isFetching, lastUpdated, categories } = this.props
//     return (
//       <div>
//       <div className="newsTopic">
//         <ul>
//           <li>
//             <Link to='/topic'><h2>{categories}</h2></Link> 
//           </li>
//         </ul>
//         <Route exact path='/topic' component={TopicComponent}></Route>
//       </div>
//       <Spectrum />
//       <Spectrum />
//     </div>
//     )
//   }
// }

// NewsfeedComponent.propTypes = {
//   selectedCategory: PropTypes.string.isRequired,
//   articles: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }

// function mapStateToProps(state) {
//   const { selectedCategory, articlesByCategory } = state
//   const { isFetching, lastUpdated, items: articles } = articlesByCategory[
//     selectedCategory
//   ] || {
//     isFetching: true,
//     items: []
//   }

//   return {
//     selectedCategory,
//     articles,
//     isFetching,
//     lastUpdated
//   }
// }

// export default connect(mapStateToProps)(NewsfeedComponent)

function NewsfeedComponent (){
 return (
    <div>
      <div className="newsTopic">
        <ul>
          <li>
            <Link to='/topic'><h2>Cimate Change</h2></Link> 
          </li>
        </ul>
        <Route exact path='/topic' component={TopicComponent}></Route>
      </div>
      <Example />
    </div>
     )
}
export default NewsfeedComponent;