import fetch from 'cross-fetch'
import {fetchArticlesPending, fetchArticlesSuccess, fetchArticlesError, fetchCategoriesPending, fetchCategoriesSuccess, fetchCategoriesError} from '../actions/index';

// .then(res => res.text())
// .then(text => console.log(text)) 
// .then(url => console.log(category)) 

function fetchCategories(category) {
    return new Promise((resolve, reject) => {
            fetch(category)
            .then(response => {
                return response.json();
                // return response.json();
                // return JSON.parse(response);
            })
            .then((category) => {
                // console.log(typeof(category))
                var json = String(category);
                var parsed = JSON.parse(category);
                // console.log(parsed);
                return JSON.parse(category);
            })
            // .then(response => {
            //     var json = response.json();
            //     var json = JSON.parse(JSON.stringify(json));
            //     return json();

            //     // console.log(typeof(json))
            //     // json = String(json);
            //     // var parsed = JSON.parse(json);
            //     // console.log(parsed);
            //     // return JSON.parse(parsed);

            //     // return response.json();
            //     // return JSON.parse(response);
            // })
            .then((category) => {
                resolve(category);
            })    
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
            .then((allCategoryData)=>{
                return(allCategoryData)
            })
            .then(allCategoryData => {
                dispatch(fetchCategoriesSuccess(allCategoryData))
            })    
            .catch(error => {
                dispatch(fetchCategoriesError(error));
            })         
    }
}

const categories = [
    "http://134.209.163.4/articles/category/Women's%20Rights",
    "http://134.209.163.4/articles/category/Voter%20Rights",
    "http://134.209.163.4/articles/category/Universal%20Basic%20Income",
    "http://134.209.163.4/articles/category/Trade%20Wars",
    "http://134.209.163.4/articles/category/Terrorism",
    "http://134.209.163.4/articles/category/Taxes",
    "http://134.209.163.4/articles/category/Prison%20Reform",
    "http://134.209.163.4/articles/category/Pollution",
    "http://134.209.163.4/articles/category/Police%20Brutality",
    "http://134.209.163.4/articles/category/Opioid%20Crisis",
    "http://134.209.163.4/articles/category/Minimum%20Wage",
    "http://134.209.163.4/articles/category/Military",
    "http://134.209.163.4/articles/category/Marijuana",
    "http://134.209.163.4/articles/category/LGTBQ+%20Rights",
    "http://134.209.163.4/articles/category/Infrastructure",
    "http://134.209.163.4/articles/category/Income%20Inequality",
    "http://134.209.163.4/articles/category/Impeachment",
    "http://134.209.163.4/articles/category/Immigration",
    "http://134.209.163.4/articles/category/Gun%20Control%20and%20Mass%20Shootings",
    "http://134.209.163.4/articles/category/Government%20Spending",
    "http://134.209.163.4/articles/category/Energy",
    "http://134.209.163.4/articles/category/Education",
    "http://134.209.163.4/articles/category/Economy",
    "http://134.209.163.4/articles/category/Data%20Privacy",
    "http://134.209.163.4/articles/category/College%20Tuition",
    "http://134.209.163.4/articles/category/Climate%20Change",
    "http://134.209.163.4/articles/category/Border%20Security",
    "http://134.209.163.4/articles/category/Agriculture",
    "http://134.209.163.4/articles/category/Abortion",
    "http://134.209.163.4/articles/category/2020%20Presidental%20Election"
];