import React ,{Component} from 'react'
import {Link} from 'react-router-dom'


export default class NoMatch extends Component{
    render(){
        return(
            <div>
                <h2> Not Found ! </h2>
                <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
            </div>
        )
    }
}