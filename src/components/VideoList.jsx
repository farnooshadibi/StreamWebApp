import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class VideoList extends Component{
    
    render(){
        const {customer} = this.props;

        return(
            <div className="col-lg-4 text-center" style={{marginBottom:10}}>
                <div className="card" style={{width: '18rem' , height:"50" }}>
                <img src={customer.image} className="card-img-top" alt={customer.name} style={{width:"100%" , height:'18rem' }}/>
                <div className="card-body">
                    <h5 className="card-title">{customer.name}</h5>
                    {/* <p className="card-text">{customer.name.substr(0 , 100)} ...</p> */}
                    
                    <Link className="btn btn-outline-info" style={{ textAlign:'center' }} to={`video-detail/${customer.id}`}> مشاهده</Link>
                </div>
                </div>
                </div>
        )
    }
}