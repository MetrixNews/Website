import React from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';

import left from '../../../assets/icons/metrics/left.png';
import center_left from '../../../assets/icons/metrics/center_left.png';
import center from '../../../assets/icons/metrics/center.png';
import center_right from '../../../assets/icons/metrics/center_right.png';
import right from '../../../assets/icons/metrics/right.png';

let CorrectionForm = props => {
    const { handleSubmit } = props

    const form ={
        width: "100%",
        margin: "0 auto",
        textAlign: "center",
    }
    const field = {
        marginLeft: 10,
    }
    const metric = {
        width: "20px",
        height: "20px",
        margin: "0px 5px",
    }
    const button = {
        backgroundColor: "#ffffff",
        border: "solid var(--metrix-color)",
        width: "25%",
        color: "var(--metrix-color)",
        fontSize: "10pt",
        cursor: "pointer",
      }

    return (
    <form onSubmit={handleSubmit} style={form}>
        <div >
            <label>Disagree with our political bias rating? Correct it below:</label>
            <div>
                <label>
                    <Field name="left" component="input" type="radio" value="left" style={field}/>
                    <img src={left} style={metric} alt="left"></img> Left
                </label>
                <label>
                    <Field name="centerleft" component="input" type="radio" value="centerleft" style={field}/>{' '}
                    <img src={center_left} style={metric} alt="left"></img>
                    Center-Left
                </label>
                <label>
                    <Field name="center" component="input" type="radio" value="center" style={field}/>{' '}
                    <img src={center} style={metric} alt="left"></img>
                    Center
                </label>
                <label>
                    <Field name="cetnerright" component="input" type="radio" value="cetnerright" style={field}/>{' '}
                    <img src={center_right} style={metric} alt="left"></img>
                    Center-Right
                </label>
                <label>
                    <Field name="right" component="input" type="radio" value="right" style={field}/>{' '}
                    <img src={right} style={metric} alt="left"></img>
                    Right
                </label>
            </div>
        </div>
        <button type="submit" style={button}>Submit</button>
    </form>
    )
  }

  CorrectionForm = reduxForm({
    // a unique name for the form
    form: 'correction'
  })(CorrectionForm)
  
  export default CorrectionForm