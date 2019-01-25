import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import img from './img3.jpg'
import {getitem}from './Action/getitem'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CircularProgress from '@material-ui/core/CircularProgress';
import {bindActionCreators} from 'redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import firebase from 'firebase'
import {connect} from 'react-redux'
import {Carousel} from 'react-bootstrap'
     class App extends Component {

componentDidMount(){
  // Get a reference to the database service

  firebase.database().ref('product').on('value', (snapshot)=> {


const v= Object.values(snapshot.val())
console.log(v)
this.setState({
item:v


})

  })







}
item(){


  if(this.state.item){

    console.log(this.state.item)
    const ss=this.state.item.map((item)=>{

      return(<div ><Card className='cc'>
      <CardContent>
        <Typography variant="h1" color="textSecondary" gutterBottom>
          {item.name}
        </Typography>

        <img alt =""className = "img"src={item.img}/>
        <Typography variant='h3' color="textSecondary">
        <div className= 'price'>₹{item.price}</div>
        </Typography>
        <Typography  variant= "h4"component="p">
        <div className="size">{item.desc}</div>
        </Typography>
      </CardContent>
      <CardActions className='bab' >
    <div > <Link className='h1'  to ='/checkout'> <Button onClick={()=>{this.props.getitem(item)}} className="button"variant="outlined" color="secondary" >
      <h4>BUY this product</h4>
    </Button></Link></div>
      </CardActions>
    </Card>
</div>
  )

    })
return(<div className='div'>{ss}</div>)






  }
else{
  return(<div className='progress'>

       <CircularProgress color="secondary" />
     </div>)

}


}
constructor(props){
  super(props);

  this.state = {
    item:null
  };
}
      render(){

        return(
          <div className="card">

          <Carousel>
            <Carousel.Item>
              <img width={1500} height={500} alt="900x500" src={img}/>
              <Carousel.Caption>
                <h3>WElCome to CHOCOLATE BOUQUET STORE </h3>
                <p>Want to buy CHOCOLATE for love once then send them CHOCOLATE BOUQUET.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1500} height={500} alt="900x500" src={"https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
              <Carousel.Caption>
                <h3> SEND BOUQUET on this 14 Feb to your love once and suprise them </h3>
                <p> Suprise your loving person on this 14 feb and 7 feb ,send them a lovevely Choco BOUQUET at resonable price starting at <b> rs 250</b> only </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1500} height={500} alt="900x500" src={"https://images.pexels.com/photos/1043519/pexels-photo-1043519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
              <Carousel.Caption>
                <h3> SEND BOUQUET on Bithday</h3>
                <p>IT is good idea to send  Choco BOUQUET to your friend on its birthday.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

{this.item()}





</div>

        );
      }
    }
    function mapDispatchToProps(dispatch){

    return bindActionCreators({getitem},dispatch)



   }
   export default connect(null,mapDispatchToProps)(App)
