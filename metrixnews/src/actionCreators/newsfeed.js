import fetch from 'cross-fetch'
import {fetchArticlesPending, fetchArticlesSuccess, fetchArticlesError, fetchCategoriesPending, fetchCategoriesSuccess, fetchCategoriesError} from '../actions/index';

const categories = [
    "http://134.209.163.4/articles/category/Women's Rights",
    "http://134.209.163.4/articles/category/Voter Rights",
    "http://134.209.163.4/articles/category/Universal Basic Income",
    "http://134.209.163.4/articles/category/Trade Wars",
    "http://134.209.163.4/articles/category/Terrorism",
    "http://134.209.163.4/articles/category/Taxes",
    "http://134.209.163.4/articles/category/Prison Reform",
    "http://134.209.163.4/articles/category/Pollution",
    "http://134.209.163.4/articles/category/Police Brutality",
    "http://134.209.163.4/articles/category/Opioid Crisis",
    "http://134.209.163.4/articles/category/Minimum Wage",
    "http://134.209.163.4/articles/category/Military",
    "http://134.209.163.4/articles/category/Marijuana",
    "http://134.209.163.4/articles/category/LGTBQ+ Rights",
    "http://134.209.163.4/articles/category/Infrastructure",
    "http://134.209.163.4/articles/category/Income Inequality",
    "http://134.209.163.4/articles/category/Impeachment",
    "http://134.209.163.4/articles/category/Immigration",
    "http://134.209.163.4/articles/category/Gun Control and Mass Shootings",
    "http://134.209.163.4/articles/category/Government Spending",
    "http://134.209.163.4/articles/category/Energy",
    "http://134.209.163.4/articles/category/Education",
    "http://134.209.163.4/articles/category/Economy",
    "http://134.209.163.4/articles/category/Data Privacy",
    "http://134.209.163.4/articles/category/College Tuition",
    "http://134.209.163.4/articles/category/Climate Change",
    "http://134.209.163.4/articles/category/Border Security",
    "http://134.209.163.4/articles/category/Agriculture",
    "http://134.209.163.4/articles/category/Abortion",
    "http://134.209.163.4/articles/category/2020 Presidental Election"
];


// .then(res => res.text())
// .then(text => console.log(text)) 

function fetchCategories(category) {
    return new Promise((resolve, reject) => {
        return dispatch => {
            // dispatch(fetchArticlesPending());
            fetch({category})
            .then(response => {
                return response.json();
            })
            // .then(articles => {
            //     dispatch(fetchArticlesSuccess(articles));
            // })
            .then((articles) => {
                resolve(articles);
            })
            // .catch(error => {
            //     dispatch(fetchArticlesError(error));
            // })
        }        
    })
}

export default function loadCategories(){
    let categoryRequest=[]
    return dispatch => {
        dispatch(fetchCategoriesPending());
        return categories.map((category) => {
                categoryRequest.push(fetchCategories(category))
            }),
    Promise.all(categoryRequest)
        .then((categories)=>{
            return(categories)
        .then(categories => {
            dispatch(fetchCategoriesSuccess(categories))
        }) 
    })   
    .catch(error => {
        dispatch(fetchCategoriesError(error));
    })         
}
}

// function render(CategoriesCorpus){}