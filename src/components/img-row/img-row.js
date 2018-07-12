import React, { Component } from 'react';
import ImageContainer from '../img-container/img-container';
import axios from 'axios';
import './img-row.css';

class ImageRow extends Component {
    constructor() {
        super()
        this.canvasContext = null;
        this.state = {
            images: [],
            selectedImage : '',
        };
    }

    selectImageForEdit = (idx) => {
        this.setState({selectedImage: this.state.images[idx].url}, () => {
            console.log('props: ', this.state);
            this.props.handleImage(this.state.selectedImage);
        });
        
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

    handleTopLine = (e)  => {
        
    }

    render() {
        return (
            <div className="container">
                <div className="sidebar">
                { this.state.images.map((img, i) => 
                    <div  key={i} onClick={this.selectImageForEdit.bind(this, i)}>
                        <ImageContainer  imageSource={img.url} imageName={img.name} key={i} />
                    </div>
                ) }
                </div>    
                <div className="edit-section">
                    <div><input onChange={this.handleTopLine} placeholder="Top Text"/></div>
                    <div><input placeholder="Bottom Text"/></div>
                </div>
            </div>
        );
    }
}

export default ImageRow;