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
    "http://165.227.208.228/articles/category/2020%20Presidential%20Election",
    "http://165.227.208.228/articles/category/Abortion",
    "http://165.227.208.228/articles/category/Agriculture",
    "http://165.227.208.228/articles/category/Border%20Security",
    "http://165.227.208.228/articles/category/College%20Tuition",
    "http://165.227.208.228/articles/category/Climate%20Change",
    "http://165.227.208.228/articles/category/Data%20Privacy",
    "http://165.227.208.228/articles/category/Economy",
    "http://165.227.208.228/articles/category/Education",
    "http://165.227.208.228/articles/category/Energy",
    "http://165.227.208.228/articles/category/Gender%20Equality",
    "http://165.227.208.228/articles/category/Government%20Spending",
    "http://165.227.208.228/articles/category/Gun%20Control",
    "http://165.227.208.228/articles/category/Healthcare",
    "http://165.227.208.228/articles/category/Immigration",
    "http://165.227.208.228/articles/category/Impeachment",
    "http://165.227.208.228/articles/category/Income%20Inequality",
    "http://165.227.208.228/articles/category/Infrastructure",
    "http://165.227.208.228/articles/category/LGTBQ+%20Rights",
    "http://165.227.208.228/articles/category/Marijuana",
    "http://165.227.208.228/articles/category/Military",
    "http://165.227.208.228/articles/category/Minimum%20Wage",
    "http://165.227.208.228/articles/category/Opioid%20Crisis",
    "http://165.227.208.228/articles/category/Police%20Brutality",
    "http://165.227.208.228/articles/category/Pollution",
    "http://165.227.208.228/articles/category/Prison%20Reform",
    "http://165.227.208.228/articles/category/Taxes",
    "http://165.227.208.228/articles/category/Terrorism",
    "http://165.227.208.228/articles/category/Trade%20Wars",
    "http://165.227.208.228/articles/category/Universal%20Basic%20Income",
    "http://165.227.208.228/articles/category/Voter%20Rights"
];