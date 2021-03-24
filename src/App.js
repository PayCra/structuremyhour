import './App.css';
import React from "react";
import Alarm from "./Components/Alarm";
import PlaySound from "./Components/PlaySound";

//Here's the error to work on:
//Uncaught (in promise) DOMException: play() failed because the user
//didn't interact with the document first.
//https://goo.gl/xX8pDD
//Read AND deal with it by forcing the user to interact first, for example by unmuting the alarms.

class App extends React.Component {

    state = {
        myDate: new Date(),
        alarmTime1: 0,
        alarmTime2: 25,
        alarmTime3: 30,
        alarmTime4: 55
    }

    myAudio = new Audio("Sounds/tap.m4a");

    componentDidMount() {
        this.intervalHandle = setInterval(
            () => this.tick(),1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandle)
    }

    lastHourPlayed;

    tick = () => {

        this.setState({myDate: new Date()})
        if (this.lastHourPlayed !== this.state.myDate.getHours() &&
            (
            this.state.myDate.getMinutes()===this.state.alarmTime1 ||
            this.state.myDate.getMinutes()===this.state.alarmTime2 ||
            this.state.myDate.getMinutes()===this.state.alarmTime3 ||
            this.state.myDate.getMinutes()===this.state.alarmTime4
            )
            ) {
            this.myAudio.play()
            this.lastHourPlayed = this.state.myDate.getHours()
        }
    }

    displayMinute = (inputMinute) => {
        if (inputMinute <=9) {
            return (
                ":0" + inputMinute
            )
        } else {
            return (
                ":" + inputMinute
            )
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Alarm minute={this.displayMinute(this.state.alarmTime1)}/>
                    <Alarm minute={this.displayMinute(this.state.alarmTime2)}/>
                    <Alarm minute={this.displayMinute(this.state.alarmTime3)}/>
                    <Alarm minute={this.displayMinute(this.state.alarmTime4)}/>
                    <PlaySound/>
                </div>
            </div>
        );
    }
}

export default App;
