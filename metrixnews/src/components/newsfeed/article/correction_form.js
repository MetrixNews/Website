import React, { Component }  from 'react';
import Form from 'react-bootstrap/Form';
import {left} from '../../../assets/icons/metrics/left.png';
import {centerleft} from '../../../assets/icons/metrics/center_left.png';
import {center} from '../../../assets/icons/metrics/center.png';
import {centerright} from '../../../assets/icons/metrics/center_right.png';
import {right} from '../../../assets/icons/metrics/right.png';

export default class CorrectionForm extends Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
        // <Form style={{width: '100%', display: 'inline-block', textAlign: 'center'}}>
        //     <span>Disagree with the poltiical bias rating? Correct it below to improve Metrix!</span>
        //     {['checkbox'].map(type => (
        //         <div key={`inline-${type}`} className="mb-3">
        //         <Form.Check inline label='Left' type={type} id={`inline-${type}-1`} />
        //         <Form.Check inline label='Center-Left' type={type} id={`inline-${type}-1`} />
        //         <Form.Check inline label='Center' type={type} id={`inline-${type}-1`} />
        //         <Form.Check inline label='Center-Right' type={type} id={`inline-${type}-1`} />
        //         <Form.Check inline label='Right' type={type} id={`inline-${type}-1`} />
        //         </div>
        //     ))}
        // </Form>

        <form style={{width: '100%', display: 'inline-block', textAlign: 'center'}}>
            <span>Disagree with the poltiical bias rating? Correct it below to improve Metrix!</span><br/>
            <input type="radio" name="gender" value="male" /> Left
            <input type="radio" name="gender" value="female"/> Left-Center
            <input type="radio" name="gender" value="other"/> Center
            <input type="radio" name="gender" value="other"/> Center-Right
            <input type="radio" name="gender" value="other"/> Right
            <br/>
            <input type="submit" value="Submit"/>
        </form>
      );
    }
  }