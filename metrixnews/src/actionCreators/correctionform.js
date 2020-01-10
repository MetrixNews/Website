// import { startSubmit } from "redux-form";

// function (action, url, props) {
//     return (dispatch) => {
//         dispatch({
//             type: startSubmit,
//             form: correction,
//         })
//         .then(correction => {
//             dispatch(submit(correction))
//             axios.post(`http://134.209.163.4/articles/rate/<article_id>/<rating>`, props)
//             .then(({ data }) => {
//                 return (dispatch) => {
//                     dispatch({
//                         type: setSubmitSucceeded,
//                         payload: data,
//                     });
//                 };
//             }
//         }
//     }
// }
