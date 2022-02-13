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
        alarmPlayed4: {},
        selectedSound: "quack",
        activity: "",
        image: "",
        alt: ""
    }

    images = ["work.png","play.png"]
    alts = ["lwj looking at you reproachfully, \"wrk!\" floating next to his head",
        "nhs laughing and tugging his hair, next to him the word \"play\" and a <3"]

    playMySound = () => {
        let myAudio = new Audio("Sounds/" + this.state.selectedSound + ".m4a")
        myAudio.play()
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
        } else if (this.state.alarmPlayed2 !== this.state.myDate.getHours() &&
            this.state.myDate.getMinutes() === this.state.alarmTime2
        ) {
            this.playMySound()
            this.setState({alarmPlayed2: this.state.myDate.getHours()})
        } else if (this.state.alarmPlayed3 !== this.state.myDate.getHours() &&
            this.state.myDate.getMinutes() === this.state.alarmTime3
        ) {
            this.playMySound()
            this.setState({alarmPlayed3: this.state.myDate.getHours()})
        } else if (this.state.alarmPlayed4 !== this.state.myDate.getHours() &&
            this.state.myDate.getMinutes() === this.state.alarmTime4
        ) {
            this.playMySound()
            this.setState({alarmPlayed4: this.state.myDate.getHours()})
        }

        if ((this.state.activity !== "work") &&
            ((this.state.myDate.getMinutes() >= 0 && this.state.myDate.getMinutes() < 25) ||
                (this.state.myDate.getMinutes() >= 30 && this.state.myDate.getMinutes() < 55))) {
            this.setState({image: this.images[0]})
            this.setState({alt: this.alts[0]})
            this.setState({activity: "work"})
        } else if (((this.state.activity === "work") || (this.state.activity === "")) &&
            ((this.state.myDate.getMinutes() >= 25 && this.state.myDate.getMinutes() < 30) ||
                (this.state.myDate.getMinutes() >= 55))) {
            this.setState({image: this.images[1]})
            this.setState({alt: this.alts[1]})
            this.setState({activity: "play"})
        }

        document.title = this.tillNextAlarm()
    }

    handleStartingClick = () => {
        this.setState({StartButtonDisabled: {}})
        this.setState({StartButtonState: "StartButtonInvisible"})
    }

    tillNextAlarm = () => {
        let minTillNextAlarm
        let secTillNextAlarm

        if (this.state.activity==="work") {
            if (this.state.myDate.getMinutes() < 25) {
                minTillNextAlarm = 24 - this.state.myDate.getMinutes()
                secTillNextAlarm = 60 - this.state.myDate.getSeconds()
            } else if (this.state.myDate.getMinutes() < 55) {
                minTillNextAlarm = 54 - this.state.myDate.getMinutes()
                secTillNextAlarm = 60 - this.state.myDate.getSeconds()
            }
        } else {
            if (this.state.myDate.getMinutes() < 30) {
                minTillNextAlarm = 29 - this.state.myDate.getMinutes()
                secTillNextAlarm = 60 - this.state.myDate.getSeconds()
            } else if (this.state.myDate.getMinutes() < 60) {
                minTillNextAlarm = 59 - this.state.myDate.getMinutes()
                secTillNextAlarm = 60 - this.state.myDate.getSeconds()
            }
        }

        if (secTillNextAlarm===60) {
            minTillNextAlarm++
            secTillNextAlarm=0
        }

        if (minTillNextAlarm < 10) {
            minTillNextAlarm = "0" + minTillNextAlarm
        }

        if (secTillNextAlarm < 10) {
            secTillNextAlarm = "0" + secTillNextAlarm
        }

        return (minTillNextAlarm + ":" + secTillNextAlarm)
    }

    onChange = (e) => {
        this.setState({selectedSound: e.target.value})
    }

    render() {
        return (
            <div className="App">
                <div className={this.state.RedButtonState}
                     onClick={() => this.setState({RedButtonState: "RedButtonInvisible"})}>
                    <button className={this.state.StartButtonState} disabled={this.state.StartButtonDisabled}
                            onClick={this.handleStartingClick}>click here to start the timer because Chrome hates sound
                    </button>
                </div>
                <div className="AppProper">
                    <div className="Side"/>
                    <div className="Middle">
                    <div className="Text">Alarm will sound at h:00, h:25, h:30 and h:55.</div>
                    <div className="Text">Time till next alarm: <span className="TillNext">{this.tillNextAlarm()}</span></div>
                    <img src={"Pictures/" + this.state.image}
                         alt={this.state.alt}/>
                    </div>
                    <div className="Side">
                        <div>
                        <div>Choose the alarm sound:</div>
                            <select onChange={this.onChange}>
                                <option value="quack">quack</option>
                                <option value="3 taps">3 taps</option>
                            </select>
                        <button onClick={this.playMySound}>Play the sound</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
