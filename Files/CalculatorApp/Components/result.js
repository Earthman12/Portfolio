import React, {Component} from 'react';

export class result extends React.Component{
    render(){
        //  resultVar is meant to be a string that stores what buttons are pressed/what is to be calculated
        let {resultVar} = this.props;

        return (
            <div className = "result">
                <p>{resultVar}</p>
            </div>
        );
    }

}

export default result;
