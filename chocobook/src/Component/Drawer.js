import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import {Modal,Button} from 'react-bootstrap'
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
    export default class Drawers extends Component {

      render(){
        return(
          <div>
          <Drawer
 anchor="left"
 open={this.props.open}
onClose={()=>{this.props.close(false)}}
>
<List component="nav">
<Link to ='/'className='h1' ><ListItem button onClick={()=>{this.props.close(false)}}>

    <ListItemText ><h3>Home</h3></ListItemText>




        </ListItem></Link>
        <Link to ='/Login'className='h1' >  <ListItem button onClick={()=>{this.props.close(false)}}>


          <ListItemText className='h1'><h3 >Create Account</h3></ListItemText>



                </ListItem></Link>
        <Link to ='/Aboutus'className='h1' >  <ListItem button onClick={()=>{this.props.close(false)}}>


          <ListItemText className='h1'><h3 >AboutUs</h3></ListItemText>



                </ListItem></Link>







</List>




</Drawer>















          </div>
        );
      }
    }
