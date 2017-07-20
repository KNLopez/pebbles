import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Body from './Body';
import './App.css';
// import Logo from './logo.png';

class App extends Component {
   constructor(props){
        super(props)
        this.state = {
            rotation: '10deg'
        }
          this.changeRotation = this.changeRotation.bind(this);
    }

  changeRotation(degrees){
    this.setState({
      rotation: degrees
    })
  } 

  render() {
    return (
      <div className="App">
          
          <div className="nav">
            {/* <div className="logo"><img src={Logo} /></div>  */}
            <div className="nav-links">
              <NavLink onClick={()=>{this.changeRotation('10deg')}} exact to="/" activeClassName="active"> Home </NavLink>
              <NavLink onClick={()=>{this.changeRotation('5deg')}} to="/about" activeClassName="active"> About </NavLink> 
              <NavLink onClick={()=>{this.changeRotation('0deg')}} to="/watch" activeClassName="active"> Watch Video </NavLink>
              <NavLink onClick={()=>{this.changeRotation('-5deg')}} to="/join" activeClassName="active"> Join Pebbles </NavLink>  
              <NavLink onClick={()=>{this.changeRotation('-10deg')}} to="/contact" activeClassName="active"> Contact </NavLink>  
            </div>
          </div>
        <Body rotation={this.state.rotation}/>
      </div>
    );
  }
}

export default App;
