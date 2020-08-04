import React, {Component} from 'react';
import axios from 'axios';
import {Player} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"


export default class VideoDetail extends Component{

    constructor(props){
        super(props);
        this.state ={
            article :{}
        }
    }

    componentDidMount(){
        // const{params} = this.props.match;
        // axios.get(`http://roocket.org/api/products/${params.id}`)
        // .then(response => {
        //     this.setState ({
        //         article : response.data.data
        //     })
        // })

        // .catch( (error ) => console.log(error))
    }


    render(){
        //console.log(this.props);
        
    //const {article} =this.state;
        return(
            <div className="rtl">
            {/* <h2> عنوان محصول : {article.title}</h2> */}
            <Player 
            playsInLine
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
             </div>
            
        )
    }
}