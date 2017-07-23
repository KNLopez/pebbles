import React, { Component } from 'react';

class Contact extends Component {
    componentDidMount(){
        document.getElementById('typeform').contentWindow.focus()
    }
    render() {
        return (
            <div className = "contact">
                <iframe id="typeform" src="https://forms.typeform.io/to/edQyyQ8VcP"/>
            </div>
        );
    }
}

export default Contact;