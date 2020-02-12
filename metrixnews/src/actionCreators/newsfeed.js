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
    "https://165.227.208.228/articles/category/2020%20Presidential%20Election",
    "https://165.227.208.228/articles/category/Abortion",
    "https://165.227.208.228/articles/category/Agriculture",
    "https://165.227.208.228/articles/category/Border%20Security",
    "https://165.227.208.228/articles/category/College%20Tuition",
    "https://165.227.208.228/articles/category/Climate%20Change",
    "https://165.227.208.228/articles/category/Data%20Privacy",
    "https://165.227.208.228/articles/category/Economy",
    "https://165.227.208.228/articles/category/Education",
    "https://165.227.208.228/articles/category/Energy",
    "https://165.227.208.228/articles/category/Gender%20Equality",
    "https://165.227.208.228/articles/category/Government%20Spending",
    "https://165.227.208.228/articles/category/Gun%20Control",
    "https://165.227.208.228/articles/category/Healthcare",
    "https://165.227.208.228/articles/category/Immigration",
    "https://165.227.208.228/articles/category/Impeachment",
    "https://165.227.208.228/articles/category/Income%20Inequality",
    "https://165.227.208.228/articles/category/Infrastructure",
    "https://165.227.208.228/articles/category/LGTBQ+%20Rights",
    "https://165.227.208.228/articles/category/Marijuana",
    "https://165.227.208.228/articles/category/Military",
    "https://165.227.208.228/articles/category/Minimum%20Wage",
    "https://165.227.208.228/articles/category/Opioid%20Crisis",
    "https://165.227.208.228/articles/category/Police%20Brutality",
    "https://165.227.208.228/articles/category/Pollution",
    "https://165.227.208.228/articles/category/Prison%20Reform",
    "https://165.227.208.228/articles/category/Taxes",
    "https://165.227.208.228/articles/category/Terrorism",
    "https://165.227.208.228/articles/category/Trade%20Wars",
    "https://165.227.208.228/articles/category/Universal%20Basic%20Income",
    "https://165.227.208.228/articles/category/Voter%20Rights"
];