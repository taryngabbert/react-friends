import React from "react";

import FriendsList from "./FriendsList"

export default class App extends React.Component{
  constructor( props ){
    super(props);

  }
  render(){
    return(
      <div>
        <h1>The <strong>Facebook</strong> Friend Machine</h1>
        <div
          className="friends">
        </div>
        <FriendsList/>
      </div>
    )
  }
}
