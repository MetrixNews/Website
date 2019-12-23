// import React from 'react'
// import { Field, reduxForm } from 'redux-form'

// export default class CorrectionForm extends React.Component {
//   // state = {
//   //   name: '',
//   // }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {



// let CorrectionForm = props => {
//   const { handleSubmit } = props
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <label>Disagree with our political bias rating? Let us know what it should be below!</label>
//         <div>
//           <label>
//             <Field name="left" component="input" type="radio" value="left" />{' '}
//             Left
//           </label>
//           <label>
//             <Field name="centerleft" component="input" type="radio" value="centerleft" />{' '}
//             Center-Left
//           </label>
//           <label>
//             <Field name="center" component="input" type="radio" value="center" />{' '}
//             Center
//           </label>
//           <label>
//             <Field name="cetnerright" component="input" type="radio" value="cetnerright" />{' '}
//             Center-Right
//           </label>
//           <label>
//             <Field name="right" component="input" type="radio" value="right" />{' '}
//             Right
//           </label>
//         </div>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// CorrectionForm = reduxForm({
//   // a unique name for the form
//   form: 'correction',
// })(CorrectionForm)