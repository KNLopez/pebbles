import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            endDate: Date.parse('2017-07-29T10:00:00'),
            currentDate: new Date(),
            seconds: '',
            time: {
                "d": "--",
                "h": "--",
                "m": "--",
                "s": "--"
            }
        }
    }

    addZero(date){
        let newDate = ('0' + date).slice(-2);
        return newDate;
    }
    secondsToTime(secs){
        let days = Math.floor(secs / (24 * 60 * 60 ));
        
        let divisor_for_hours = secs % (24* 60 * 60);
        let hours = Math.floor(divisor_for_hours / ( 60 * 60));
       

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        days = this.addZero(days);
        hours = this.addZero(hours);
        minutes = this.addZero(minutes);
        seconds = this.addZero(seconds);


        let obj = {
        "d": days,
        "h": hours,
        "m": minutes,
        "s": seconds
        };
        return obj;
    }
    
    componentDidMount() {

        let timeRemaining = Math.abs(this.state.endDate - this.state.currentDate);
        this.setState({
                        seconds: Math.floor(timeRemaining/1000)
                     });
        // let timeRemaining = secondsToTime(date.parse(this.state.endDate));
        this.timerID = setInterval(
            () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
   
    tick() {
        let seconds = this.state.seconds - 1;
        this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds === 0) { 
        clearInterval(this.timer);
        }
    }

    render() {
        return (
          <div className="Timer"> 
              
              <div className="timeContainer">
                  <div className="timeValue">{this.state.time.d}</div>
                  Days 
              </div>
              <div className="timeContainer">
                  <div className="timeValue">{this.state.time.h}</div>
                  Hours 
              </div>
              <div className="timeContainer">
                  <div className="timeValue">{this.state.time.m}</div>
                  Minutes 
              </div>
              <div className="timeContainer">
                  <div className="timeValue">{this.state.time.s}</div>
                  Seconds 
              </div>
          </div>  
        );
    }
}

export default Timer;