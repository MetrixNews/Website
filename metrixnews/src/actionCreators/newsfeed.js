// import 'babel-polyfill'
// import fetch from 'cross-fetch'


// export const categories = [
//   "Women's Rights",
//   "Voter Rights",
//   "Universal Basic Income",
//   "Trade Wars",
//   "Terrorism",
//   "Taxes",
//   "Prison Reform",
//   "Pollution",
//   "Police Brutality",
//   "Opioid Crisis",
//   "Minimum Wage",
//   "Military",
//   "Marijuana",
//   "LGTBQ+ Rights",
//   "Infrastructure",
//   "Income Inequality",
//   "Impeachment",
//   "Immigration",
//   "Healthcare",
//   "Gun Control and Mass Shootings",
//   "Government Spending",
//   "Energy",
//   "Education",
//   "Economy",
//   "Data Privacy",
//   "College Tuition",
//   "Climate Change",
//   "Border Security",
//   "Agriculture",
//   "Abortion",
//   "2020 Presidental Election"
// ];

import {fetchArticlesPending, fetchArticlesSuccess, fetchArticlesError} from '../actions/index';

function fetchArticlesAction() {
    return dispatch => {
        dispatch(fetchArticlesPending());
        fetch('134.209.163.4/articles/category/Climate Change/articles')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchArticlesSuccess(res.articles))
            return res.articles;
        })
        .catch(error => {
            dispatch(fetchArticlesError(error));
        })
    }
}

export default fetchArticlesAction;
