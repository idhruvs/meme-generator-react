import React, { Component } from 'react';
import ImageRow from '../img-row/img-row';
import CanvasContainer from '../canvas-container/canvas-container';

class Container extends Component {

    constructor() {
        super();
        this.state = {
            image: '',
            readyForEditing: false
        };
    }

    handleSelectedImage = (image) => {
        console.log(this.state);
        this.setState({readyForEditing: true, image: image}, ()=> {console.log('completed in container', this.state)});
    }

    render() {
        const divStyle  = {
            display: 'flex'
        };
        return (
            <div style={divStyle}>
                <ImageRow handleImage={this.handleSelectedImage} />
                <CanvasContainer readyForEditing={this.state.readyForEditing} imageUrl={this.state.image} />
            </div>
        );
    }
}

export default Container