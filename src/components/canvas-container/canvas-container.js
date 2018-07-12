import React, { Component } from 'react';
import { Stage, Layer, Text, Image } from "react-konva";
import { CanvasImage } from '../canvas-image/canvas-image';
import ImageContainer from '../img-container/img-container';

class CanvasContainer extends Component {
    state={
        image: null
    }

    renderImage = () => {
        const image = new window.Image();
        image.src = this.props.imageUrl;
        image.onload = () => {
            this.setState({
                image: image
            }, ()=> {
                console.log('image loaded');
            });
        };
    }

    componentWillReceiveProps() {
        console.log(
            'recieve props'
        )
        this.renderImage();
    }

    render() {
        if(this.state.image !== null) {
            
            return (
                <Stage>
                    <Layer> 
                        <Image image={this.state.image} />
                        <Text text="Hi" />
                    </Layer>
                </Stage>
            )
        }
        else {
            return <p> Select Image for Editing </p>
        }
    }
}

export default CanvasContainer