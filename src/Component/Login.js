import React, { Component } from 'react';
import {Alert} from 'react-bootstrap'
import {Button}from 'react-bootstrap';
import firebase from 'firebase'
var config = {
   apiKey: "AIzaSyD8C0mtSFmV7T_yJN9D_gattjH6Jy-yyJY",
   authDomain: "hello-49a1e.firebaseapp.com",
   databaseURL: "https://hello-49a1e.firebaseio.com",
   projectId: "hello-49a1e",
   storageBucket: "hello-49a1e.appspot.com",
   messagingSenderId: "470296018488"
 };
 firebase.initializeApp(config);
    export default class Login extends Component {
      google(){
   var provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then(function(result) {

return (
  alert('Welcome user you are login please go back to home page')
)
}).catch(function(error) {
  // Handle Errors here.

  // ...
});
      }


fb(){


  var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_birthday');

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  return (
    alert('Welcome user you are login please go back to home page')
  )
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});


}

      render(){
        return(<div>

          <div className='koko'>

<div><h2 className="ff"><i>Login with us</i></h2></div>
          <div className='space'><Button bsStyle="danger" onClick={this.google.bind(this)}>G+ login with Google</Button></div>

          <div className='space'>  <Button bsStyle="primary"  onClick={this.fb.bind(this)}  >f Login with facebook</Button></div>


          </div>
          </div>
        );
      }
    }
