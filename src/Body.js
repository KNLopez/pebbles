import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomeText from './Hometext';
import AboutText from './AboutText';
import Contact from './Contact';
import HomeImg from './home.jpg';



class Body extends Component {
   
    render() {
        console.log(this.props.rotation)
        return (
            <div className = "main">
                <div className="image">
                    <img className="homeImage" style={{transform: `rotate(${this.props.rotation})`}} src={HomeImg}/>
                </div>
                <div className="content">
                    <Route exact path="/" component={HomeText} />
                    <Route exact path="/about" component={AboutText} />
                    <Route exact path="/contact" component={Contact} />
                </div>
                
                
            </div>
        );
    }
}

export default Body;