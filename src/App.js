import './App.css';
import React from "react";

class App extends React.Component {

    state = {
        myDate: new Date(),
        alarmTime1: 0,
        alarmTime2: 25,
        alarmTime3: 30,
        alarmTime4: 55,
        RedButtonState: "RedButtonVisible",
        StartButtonState: "StartButtonVisible",
        StartButtonDisabled: false,
        alarmPlayed1: {},
        alarmPlayed2: {},
        alarmPlayed3: {},
        alarmPlayed4: {}
    }

    myAudio = new Audio("Sounds/3 taps.m4a")

    playMySound = () => {
        this.myAudio.play()
    }

    componentDidMount() {
        this.intervalHandle = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalHandle)
    }

    tick = () => {
        this.setState({myDate: new Date()})
        if (this.state.alarmPlayed1 !== this.state.myDate.getHours() &&
            this.state.myDate.getMinutes() === this.state.alarmTime1
        ) {
            this.playMySound()
            this.setState({alarmPlayed1: this.state.myDate.getHours()})
        }
        else if (this.state.alarmPlayed2 !== this.state.myDate.getHours() &&
            this.state.myDate.getMinutes() === this.state.alarmTime2
        ) {
            this.playMySound()
            this.setState({alarmPlayed2: this.state.myDate.getHours()})
        }
        else if (this.state.alarmPlayed3 !== this.state.myDate.getHours() &&
            this.state.myDate.getMinutes() === this.state.alarmTime3
        ) {
            this.playMySound()
            this.setState({alarmPlayed3: this.state.myDate.getHours()})
        }
        else if (this.state.alarmPlayed4 !== this.state.myDate.getHours() &&
            this.state.myDate.getMinutes() === this.state.alarmTime4
        ) {
            this.playMySound()
            this.setState({alarmPlayed4: this.state.myDate.getHours()})
        }
    }

    handleStartingClick = () => {
        this.setState({StartButtonDisabled: {}})
        this.setState({StartButtonState: "StartButtonInvisible"})
    }

    render() {
        return (
            <div className="App">
                <div className={this.state.RedButtonState} onClick={()=>this.setState({RedButtonState: "RedButtonInvisible"})}>
                    <button className={this.state.StartButtonState} disabled={this.state.StartButtonDisabled} onClick={this.handleStartingClick}>click me to start the timer because Chrome hates sound
                    </button>
                </div>
                <div className="AppProper">
                    Alarm will sound at :00, :25, :30 and :55.
                </div>
            </div>
        );
    }
}

export default App;
