"use strict";

// Import dependencies

//require("../../../deps/phoenix_html/web/static/js/phoenix_html")

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

//import socket from "./socket"
require("./socket")
//import socket from "web/static/js/socket"
//require("../vendor/jquery-1.11.3");

phoenixHtml();

let chatInput = $("#chat-input")
let messagesContainer = $("#messages")

socket.connect()
let chan = socket.channel("rooms:lobby", {})
chan.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })

chatInput.on("keypress", event => {
  if(event.keyCode === 13) {
    console.log("enter pressed")
    chan.push("new_msg", {body: chatInput.val()})
    chatInput.val("")
  }
})

chan.on("new_msg", payload => {
  messagesContainer.append("<br/>" + Date.now  + payload.body)
})


