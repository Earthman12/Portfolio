import React, { Component } from 'react';
import Result from './Components/result';
import Keypad from './Components/keypad';

class App extends React.Component{
    constructor() {
        super();
        this.state = {result: ""};
        this.onClick = this.onClick.bind(this);//onClick needs to be binded because it is not called directly from the App object
    }

    //  Takes in the button argument from keypad.js and determines what to call based on what is recieved
    onClick(button) {
        if(button === "="){
            this.calculate()
        }
        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
        else {
            this.setState({
              result: this.state.result + button
            })
        }
    }

    //  If onClick receives "=", the string in this.state.result will attempt to be calculated and will change
    //  the state of "result" to that calculated value. If an error is caught, "error" will be the state of "result"
    calculate() {
        try {
            this.setState({
                result: (eval(this.state.result || "") + "")
            })

        }
        catch(e){
            this.setState({result: "error"})
        }
    }

    //  Sets the state of "result" back to an empty string
    reset() {
        this.setState({result: ""})
    }

    //  Deletes the last character in the "result" string using the .slice() function
    backspace() {
        this.setState({result: this.state.result.slice(0, -1)})
    }

    render() {
        return(
            <div>
                <div className = "calcBody">
                    <Result resultVar = {this.state.result}/>
                    <Keypad onClick = {this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
