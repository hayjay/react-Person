
import React, { Component } from 'react';

class ErrorBoundary extends Component {

    //adding variables its beta to use the state object so we can access using state. and so on
    state = {
        hasError : false,
        errorMessage : ''
    }

    //add class functions here

    //this function indicates that or will always be called when we get error in our application 
    componentDidCatch = (error, info) => { 
        //update the decalared error status to true using the setState method
        this.setState({
            hasError : true,
            errorMessage : error
        });
    }

    render() { //just like return somthin to view
        if(this.state.hasError){
            // You can render any custom fallback UI like returning a whoops page something went wrong page
            return <h1> {this.state.errorMessage} </h1>
        }else{
            //default case to be executed if there is no error
            return this.props.children;
        }
    }
}

export default ErrorBoundary;