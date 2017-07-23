import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomeText from './Hometext';
import AboutText from './AboutText';
import Contact from './Contact';
import HomeImg from './home.jpg';
import logoSchool from './SchoolinaBackpack.png';
import Join from './Join';




class Body extends Component {
   
    render() {
        return (
            <div className = "main">
                <div className="image">
                    <img className="homeImage" style={{transform: `rotate(${this.props.rotation})`}} src={HomeImg}/>
                </div>
                <div className="content">
                    <Route exact path="/" component={HomeText} />
                    <Route  path="/about" component={AboutText} />
                    <Route  path="/contact" component={Contact} />
                    <Route path="/join" component={Join}/>
                </div>
                
                <div className="Powered"><img src={logoSchool} />Powered By <a target="_blank" href="http://www.schoolinabackpack.com">SchoolinaBackpack</a></div>
            </div>
        );
    }
}

export default Body;