"use strict";

// Import dependencies

// Import local files

import chan from "./socket"
import "phoenix_html"
var React = require("react")
// import "react-dom"

var App = React.createClass({
  componentDidMount: function() {
    // chan.on("new_msg", payload => {
    //   this.publishMessage(payload);
    // })
  },
  getInitialState: function() {
    return {
      messages: ["Hello"],
      signedIn: false
    };
  },

  publishMessage: function (payload) {
    let messages = this.state.messages;
    messages.push(payload.body)
    this.setState({messages: messages});
  },

  publishNewUser: function (payload) {
    let messages = this.state.messages;
    messages.push(payload.name + " has entered")
    this.setState({messages: messages});
  },

  onKeyPress: function(event) {
    if(event.key === "Enter") {
      let name = this.state.name
      chan.push("new_msg", {body: name + ": " +event.target.value});
    }
  },

  signIn: function(event) {
    if(event.key === "Enter") {
      let name = event.target.value;
      chan.on("new_msg", payload => {
        this.publishMessage(payload);
      })
      this.setState({name: name});
      chan.push("new_user", {name: name});
      chan.on("new_user", payload => {
        this.publishNewUser(payload);
      })
      this.setState({signedIn: true});
    }
  },


  render: function() {
    let messages = this.state.messages;
    return (
      <div className="main">
        {!!this.state.signedIn &&
            <div id="messages">
              {
                messages.map(function(element) {
                  return <div>{element}</div>;
                })
              }
            </div>
        }
        {!!this.state.signedIn &&
          <div>
            <input id="chat-input" onKeyPress={this.onKeyPress}></input>
          </div>
        }

        {!this.state.signedIn &&
          <div id="sign-in">
            Name
            <input onKeyPress={this.signIn}></input>
          </div>
        }
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('messages')
);
