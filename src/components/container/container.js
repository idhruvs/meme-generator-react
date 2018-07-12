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
        console.log(image);
        this.setState({readyForEditing: true, image: image}, ()=> {console.log('completed in container')});
    }

    render() {
        return (
            <div>
                <ImageRow handleImage={this.handleSelectedImage} />
                <CanvasContainer imageUrl={this.state.image} />
            </div>
        );
    }

}

export default Container