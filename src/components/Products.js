import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Products extends Component{
    
    render(){
        const {product} = this.props;

        return(
            <div className="col-lg-4" style={{marginBottom:20}}>
                <div className="card" style={{width: '18rem' , height:"50" }}>

                {/* <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg> */}
                <img src={product.image} className="card-img-top" alt={product.title} style={{width:"100%" , height:'18rem' }}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.body.substr(0 , 100)} ...</p>
                    <Link className="btn btn-primary" to={`product/${product.id}`}>توضیحات بیشتر</Link>
                </div>
                </div>
                </div>
        )
    }
}