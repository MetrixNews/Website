import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';

function PrimaryButton(props) {
    return (
        <div>
            <Button variant="primary" size="lg" block>
                {props.description}
            </Button>
        </div>
    )   
}

const primaryButton = {
    description: 'Election Polls'
};