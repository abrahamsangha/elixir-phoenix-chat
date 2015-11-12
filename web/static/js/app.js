"use strict";

// Import dependencies

// Import local files

import chan from "./socket"
import "phoenix_html"
var React = require("react")
// import "react-dom"

var App = React.createClass({
  componentDidMount: function() {
    chan.on("new_msg", payload => {
      this.publishMessage(payload);
    })
  },
  getInitialState: function() {
    return {messages: ["Hello"]};
  },

  publishMessage: function (payload) {
    let messages = this.state.messages;
    messages.push(payload.body)
    this.setState({messages: messages});
  },

  onKeyPress: function(event) {
    if(event.key === "Enter") {
      chan.push("new_msg", {body: event.target.value});
    }
  },

  render: function() {
    let messages = this.state.messages;
    return (
      <div className="jumbotron">
        <div id="messages">
          {
            messages.map(function(element) {
              return <div>{element}</div>;
            })
          }
        </div>
        <input id="chat-input" type="text" onKeyPress={this.onKeyPress}></input>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('messages')
);
