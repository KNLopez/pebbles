import React, { Component } from 'react';

class Join extends Component {
    componentDidMount(){
        document.getElementById('typeform').contentWindow.focus()
    }
    
    render() {
        return (
            <div className = "Join">
                 <iframe id="typeform" src="https://forms.typeform.io/to/e9YaqCtYwY"/>
            </div>
        );
    }
}

export default Join;