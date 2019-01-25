import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawers from './Drawer'
    export default class AppBars extends Component {
      tog(value){
        this.setState({tap:value})
      }
            constructor(props){
              super(props);

              this.state = {
                tap:false
              };
            }
      render(){
        return(
          <div>
          <AppBar color= 'secondary'>
                    <Toolbar>
                             <IconButton  color="inherit" aria-label="Menu"
          onClick={()=>{

            this.setState({tap:true}
            )}}

                             >
                               <MenuIcon



                               />
                             </IconButton>
                             <Typography variant="h4" color="inherit" >
                          Chocolate Bouquet
                             </Typography>

                           </Toolbar>
                           </AppBar>


                           <Drawers
                        open={this.state.tap}
                        close={(value)=>{this.tog(value)}}/>

          </div>
        );
      }
    }
