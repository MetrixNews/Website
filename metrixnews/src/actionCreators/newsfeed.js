import {fetchCategoriesPending, fetchCategoriesSuccess, fetchCategoriesError} from '../actions/index';

// .then(res => res.text())
// .then(text => console.log(text)) 
// .then(url => console.log(category)) 

function fetchCategories(category) {
    return new Promise((resolve, reject) => {
            fetch(category)
            .then(response => {
                return response.json();
            })
            .then((category) => {
                // console.log(typeof(category))
                var json = String(category);
                var parsed = JSON.parse(category);
                // console.log(parsed);
                return JSON.parse(category);
            })
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
    "https://api.metrix.news/articles/category/2020%20Presidential%20Election",
    "https://api.metrix.news/articles/category/Abortion",
    "https://api.metrix.news/articles/category/Agriculture",
    "https://api.metrix.news/articles/category/Border%20Security",
    "https://api.metrix.news/articles/category/College%20Tuition",
    "https://api.metrix.news/articles/category/Climate%20Change",
    "https://api.metrix.news/articles/category/Data%20Privacy",
    "https://api.metrix.news/articles/category/Economy",
    "https://api.metrix.news/articles/category/Education",
    "https://api.metrix.news/articles/category/Election%20Interference",
    "https://api.metrix.news/articles/category/Energy",
    "https://api.metrix.news/articles/category/Gender%20Equality",
    "https://api.metrix.news/articles/category/Government%20Spending",
    "https://api.metrix.news/articles/category/Gun%20Control",
    "https://api.metrix.news/articles/category/Healthcare",
    "https://api.metrix.news/articles/category/Immigration",
    "https://api.metrix.news/articles/category/Income%20Inequality",
    "https://api.metrix.news/articles/category/Infrastructure",
    "https://api.metrix.news/articles/category/LGTBQ+%20Rights",
    "https://api.metrix.news/articles/category/Marijuana",
    "https://api.metrix.news/articles/category/Military",
    "https://api.metrix.news/articles/category/Minimum%20Wage",
    "https://api.metrix.news/articles/category/Opioid%20Crisis",
    "https://api.metrix.news/articles/category/Police%20Brutality",
    "https://api.metrix.news/articles/category/Pollution",
    "https://api.metrix.news/articles/category/Prison%20Reform",
    "https://api.metrix.news/articles/category/Taxes",
    "https://api.metrix.news/articles/category/Terrorism",
    "https://api.metrix.news/articles/category/Trade%20Wars",
    "https://api.metrix.news/articles/category/Universal%20Basic%20Income",
    "https://api.metrix.news/articles/category/Voter%20Rights"
];