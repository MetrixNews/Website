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
    "/articles/category/2020%20Presidential%20Election",
    "/articles/category/Abortion",
    "/articles/category/Agriculture",
    "/articles/category/Border%20Security",
    "/articles/category/College%20Tuition",
    "/articles/category/Climate%20Change",
    "/articles/category/Data%20Privacy",
    "/articles/category/Economy",
    "/articles/category/Education",
    "/articles/category/Energy",
    "/articles/category/Gender%20Equality",
    "/articles/category/Government%20Spending",
    "/articles/category/Gun%20Control",
    "/articles/category/Healthcare",
    "/articles/category/Immigration",
    "/articles/category/Impeachment",
    "/articles/category/Income%20Inequality",
    "/articles/category/Infrastructure",
    "/articles/category/LGTBQ+%20Rights",
    "/articles/category/Marijuana",
    "/articles/category/Military",
    "/articles/category/Minimum%20Wage",
    "/articles/category/Opioid%20Crisis",
    "/articles/category/Police%20Brutality",
    "/articles/category/Pollution",
    "/articles/category/Prison%20Reform",
    "/articles/category/Taxes",
    "/articles/category/Terrorism",
    "/articles/category/Trade%20Wars",
    "/articles/category/Universal%20Basic%20Income",
    "/articles/category/Voter%20Rights"
];