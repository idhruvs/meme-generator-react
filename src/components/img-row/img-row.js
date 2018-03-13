import React, { Component } from 'react';
import ImageContainer from '../img-container/img-container';
import axios from 'axios';

class ImageRow extends Component {
    constructor() {
        super()
        this.state = {
            images: [],
            selectedImage : ''
        };
    }

    

    openModal = (idx) => {
        console.log(idx);
        this.setState({selectedImage: this.state.images[idx].url});
        
        const ctx= this.refs.canvas.getContext("2d");
        const img = this.refs.canvasimage;
        // console.log(img);
        img.onLoad = () => {
            console.log(img);
            ctx.drawImage(img,0,0);
            ctx.fillText('Blah Blah', 5,100);    
        }
        
    }

   
    componentDidMount() {
    }

    componentWillMount() {
        this.getImages().then(res => {
           let imageArr = res.data.results;
           this.setState({
               images: imageArr
           });
           console.log(this.state.images)
        });
    }

    async getImages() {
        var config ={
            headers: { 'X-Parse-Application-Id' : 'icode-test' }
        };
        let imageList = await axios.get('https://sable-mandolin.glitch.me/parse/classes/images/', config);
        return imageList;
    }

    render() {

        return (
            <div>
                { this.state.images.map((img, i) => 
                    <div key={i} onClick={this.openModal.bind(this, i)}>
                        <ImageContainer  imageSource={img.url} imageName={img.name} key={i} />
                    </div>
                ) }
                    <div><input placeholder="Top Text"/></div>
                    <div><input placeholder="Bottom Text"/></div>
                    <canvas ref="canvas" width={250} height={250} className="canvas"/>
                    <img alt="canvas" ref="canvasimage" src={this.state.selectedImage} className="App-logo hidden " />
            </div>
        );
    }
}

export default ImageRow;