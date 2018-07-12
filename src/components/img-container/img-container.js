import React, { Component } from 'react';
import './img-container.css';

class ImageContainer extends Component {
    render() {
        return (
            <img className="App-logo" alt="Major-missing" src={this.props.imageSource}/ >
        );
    }
}

export default ImageContainer;