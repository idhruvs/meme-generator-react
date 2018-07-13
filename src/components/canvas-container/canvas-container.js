import React, { Component } from 'react';
import { Stage, Layer, Text, Image } from "react-konva";

class CanvasContainer extends Component {
    constructor() {
        super();
        this.state={
            image: new window.Image()
        }
        this.canvasWidth = 400;
        this.canvasHeight= 400;
    }
    
    render() {
        if(this.props.readyForEditing){
            // *Info: This block gets executed when an image is selected.
            this.state.image.src = this.props.imageUrl;
            this.state.image.onload = () => {
                // calling set state here will do nothing
                // because properties of Konva.Image are not changed
                // so we need to update layer manually
                this.imageNode.getLayer().batchDraw();
            };
            
            return (
                <Stage  width={this.canvasWidth} height={this.canvasHeight}>
                    <Layer> 
                        <Image 
                            image = {this.state.image} 
                            ref={node => {
                                this.imageNode = node;
                            }} 
                            width={250}
                            height={250}
                        />
                        <Text text="Hi" />
                    </Layer>
                </Stage>
            )
        }
        else {
            return (
                <p> No image selected </p>
            )
        }
        
    }
}


export default CanvasContainer