import React, { Component } from 'react';
import TechTonic from './logo-header.png';
import Timer from './Timer';

class HomeText extends Component {
    state = {  }
    render() {
        return (
            <div className="HomeText">
                <h1 className ="title"> Learning is Everywhere! </h1>
                <div className="subHeader">CATCH US AT<img src={TechTonic}/></div>
                <p> SMX Convention Center | The Office Project Booth</p>
                <Timer />
            </div>
        );
    }
}

export default HomeText;