import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import img from './img3.jpg'
import {getitem}from './Action/getitem'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
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
const low = v.sort((a,b)=>{
  return(
    a.price-b.price
  )
}) 
console.log(v)
this.setState({
item:low


})

})







}
item(){


  if(this.state.item){

    console.log(this.state.item)
    const ss=this.state.item.map((item)=>{

      return(
      <div >
        <Card className='cc'>
      <CardContent>
        <Typography variant="display2" color="textSecondary" gutterBottom>
          {item.name}
        </Typography>

        <img alt =""className = "img"src={item.img}/>
        <Typography variant='h3' color="textSecondary">
        <div className= 'price'>₹{item.price}</div>
        </Typography>
        <Typography variant="headline" color="textSecondary" gutterBottom>
        {item.desc}
        </Typography>
      </CardContent>
      <CardActions className='bab' >
      <div> 
      <Link className='h1'  to ='/checkout'> <Button onClick={()=>{this.props.getitem(item)}} className="button"variant="outlined" color="secondary" >
      <h4>BUY this product</h4>
      </Button>
      </Link>
      </div>
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
              <img width={1500} height={500} alt="900x500" src={"https://firebasestorage.googleapis.com/v0/b/hello-49a1e.appspot.com/o/photo%2Fbouquet.jpg?alt=media&token=c4afc937-17ee-4006-97f8-4fc405b86397"}/>
              <Carousel.Caption>
                <h3>WElCOME TO THE CHOCOLATE BOUQUET STORE </h3>
                <p>chocolate bouquets for loved ones.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1500} height={500} alt="900x500" src={"https://firebasestorage.googleapis.com/v0/b/hello-49a1e.appspot.com/o/photo%2Fdairy.jpg?alt=media&token=848f401d-2847-42e9-984d-f5bebc22f08a"}/>
              <Carousel.Caption>
                <h3> SEND BOUQUET on this 14 Feb to your love ones and suprise them </h3>
                <p> Suprise your love on this 14 feb and 7 feb ,send them a lovevely Choco BOUQUET at resonable price starting at <b> rs 250</b> only </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1500} height={500} alt="900x500" src={"https://firebasestorage.googleapis.com/v0/b/hello-49a1e.appspot.com/o/photo%2Fferro_2.jpg?alt=media&token=e38230c2-b49a-45a1-996f-42160ccf655f"} />
              <Carousel.Caption>
                <h3> SEND BOUQUET on Bithdays</h3>
                <p>gift the package of love to your family and friends on their birthdays</p>
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
