import React, { Component } from 'react';
import TechTonic from './logo-header.png';
import Timer from './Timer';
import Join from './Join';

class HomeText extends Component {
    constructor(props){
        super(props);
        this.state = {
            joinVisible : false
        }

        this.hideMOdal = this.hideMOdal.bind(this);
    }

    hideMOdal(){
        this.setState({
            joinVisible: !this.state.joinVisible
        })
    }

    render() {
        return (
            <div className="HomeText">
                <h1 className ="title"> Learning is Everywhere! </h1>
                {/* <div className="subHeader">CATCH US AT<img src={TechTonic}/></div>
                <p> SMX Convention Center | The Office Project Booth</p> */}
                <button onClick={this.hideMOdal} className="joinUs animate bounceIn"> Join us </button>
                {
                    this.state.joinVisible? 
                    <div className="backdrop" onClick={this.hideMOdal} >
                        <Join /> 
                    </div>: ''
                }
                
            </div>
        );
    }
}

export default HomeText;