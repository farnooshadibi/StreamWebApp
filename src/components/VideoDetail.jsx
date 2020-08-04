import React, {Component} from 'react';
import axios from 'axios';
import {Player} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"


export default class VideoDetail extends Component{

    constructor(props){
        super(props);
        this.state ={
            video :{}
        }
    }

    componentDidMount(){
        const{params} = this.props.match;
        axios.get(`http://192.168.110.52:5000/api/customer/${params.id}`)
        .then(response => {
            console.log("r", response);
            this.setState ({
                video : response.data
            })
        })

        .catch( (error ) => console.log(error))
    }


    render(){
        //console.log(this.props);
        
    const {video} =this.state;
        return(
            <div className="rtl">
            <h2> عنوان  : {video.name}</h2>
            <video
        controls
        height="400"
        width="550"
        src={video.url}
        data-viblast-key="ef2e322c-8725-49c9-b4d5-23c4e374d27f"
        autoplay
        >

        </video>
            <Player 
            playsInLine
            poster="/assets/poster.png"
            src={video.url}
            />
             </div>
            
        )
    }
}