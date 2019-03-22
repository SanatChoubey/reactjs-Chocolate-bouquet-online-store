 import React, { Component } from 'react';
import {connect} from 'react-redux'
import firebase from 'firebase'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf';
class Check extends Component {
componentDidMount(){

if(this.props.check){

 this.props.check.map((item)=>{
return(this.setState({tittle:item.name,price:item.price}))


})



}



}



    pro(){
console.log(this.state)
if(this.state.price&&this.state.name&&this.state.mobile){
  let options = {
    "key": "rzp_live_vp8oqw4T6ev5O8",
    "key_id": "rzp_live_vp8oqw4T6ev5O8",
      "key_secret": 'WwUlsZvmYyllDG5nefOV7ZEn',
    "amount":( (this.state.price)+50)*100, // 2000 paise = INR 20, amount in paisa
    "name": this.state.tittle,
    "description": "",
    "image": "",
    "handler":
    (response)=>{
alert( "hey your order has been placed ")
    this.setState({raz:response.razorpay_payment_id})

    const uid= Math.floor((Math.random)*10+5)

    const d = new Date();
    const day = d.getDate().toString()
    const month =((d.getMonth())+1).toString();
    const year = d.getFullYear().toString()
    const date=day+month+year;
    firebase.database().ref('order/' +date+'/'+uid+this.state.raz).set({


     name:this.state.name,

     mobileno:this.state.mobile,
     address:this.state.address,



     billingname:this.state.tittle,





    });





    const totas=(((this.state.price)+50)).toString()
    var doc = new jsPDF()
    doc.line(0, 50, 300, 50) // horizontal line

    doc.text('Tax Invoice', 100, 40,)
    doc.line(0,70,300,70)
    doc.line(100,50,100,500)
    doc.text('product', 30,60)
    doc.text(this.state.tittle,30,80)

    doc.line(150,50,150,500)
    doc.text('Quantity',110,60)
    doc.text('Price',180,60)
    doc.text("1",110,80)
    doc.text(totas,180,80)
    doc.line(0,280,300,280)


    doc.text('total',80,290)
    doc.text(totas,180,290)

    doc.text("name:"+this.state.name,10,20)
    doc.text('billing address:',10,25)
    doc.text('paymentid'+this.state.raz,140,20)
    doc.text('date:'+date,160,25)
    doc.text(this.state.address,10,30)
    doc.save('invoicechocolate.pdf')

   },
    "prefill": {
      "name": "",
      "email": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "orange"
    }
  };


var rzp  =new window.Razorpay(options); rzp.open();
}
else{
  alert('please fill address, phone no and name to proceed')
}

    }
  constructor(props){
    super(props);

    this.state = {

name:null,
mobile:null,
note:null,
address:null,
tittle:null,
price:null,
raz:null,
    };
  }
  check(){
if(this.props.check){

const sv =this.props.check.map((item)=>{


return(<div className='div'><Card className='cc'>
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

</Card>
<div   >

<Card className='ccs'>
<CardContent>
<Typography variant="h3" color="textSecondary" gutterBottom>
  Buyer name:
</Typography>
<div>
  <input className="inputs" onChange={(e)=>{this.setState({name:e.target.value })}}type='text'/>
  </div>

<Typography variant="h3" color="textSecondary" gutterBottom>
  Mobile Number:
</Typography>
<div><input className="inputs" onChange={(e)=>{this.setState({mobile:e.target.value})}}type='tel'/></div>
<Typography variant="h3" color="textSecondary" gutterBottom>
  write a note for any customization.
</Typography>
<div><textarea className="inputs" onChange={(e)=>{this.setState({note:e.target.value})}} /></div>
<Typography variant="h3" color="textSecondary" gutterBottom>
Full Address
</Typography>
<div><textarea className="inputs" onChange={(e)=>{this.setState({address:e.target.value})}}/></div>



<h4> delivery charges  50 rs extra / </h4>
<h4> Note: product will be delivered within 7 days </h4>

</CardContent>
  <CardActions className='bab' >
<Button  className="buttonss" onClick={this.pro.bind(this)}variant="contained" color="secondary" >
  <h4>  Proceed to Pay  ₹{( (this.state.price)+50)} </h4>
    </Button>
      </CardActions>
</Card>


</div>
</div>)



})


return (<div className="div">

{sv}


</div>
)

}else{
  return(<div className='progress'>

       <CircularProgress color="secondary" />
     </div>)

  }
}
      render(){
if(this.state.raz){
  return<div className= 'card'> Thank you for shopping with us You can contact us for order on mobile no - 9770003301,9993900116</div>
}

        return(
          <div className="card">
            {this.check()}
          </div>
        );
      }
    }

    function mapStateToProps(state) {
      console.log(state)
      return ({check:state.item})
    }
  export default connect(mapStateToProps)(Check)
