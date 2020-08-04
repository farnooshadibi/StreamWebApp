import React ,{Component} from 'react'
import axios from 'axios'
import Products from './Products'


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            products : []
        }
    }

    componentDidMount(){
        axios.get('http://roocket.org/api/products')
        .then( response => {
            const { data} = response.data.data;
            this.setState({
                products :data
            })
           
        })
        .catch( (error) => console.log(error))

    }
    render(){
        return(
            <div>
                <div className="jumbotron rtl">
                    <div className="container">
                    <h3 >وب‌سایت </h3>
                    <p>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</p>
                    </div>
                </div>
            <div className="row rtl">
                {this.state.products.map( (product , index) =><Products key={index} product={product} />)}

            </div>
           
            </div>
        )
    }
}