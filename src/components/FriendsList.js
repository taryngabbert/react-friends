import React from "react";

import Friend from "./Friend"
import friends from "../../friends"

export default class FriendsList extends React.Component{
  constructor(prop){
    super(prop);
    this.state = {
      searchText: ""
      , orderBy: "name"
      , order: "ascending"
      , searchBy: ""
    };
  }
  handleChange(field,event) {
    this.setState({[field]: event.target.value});
  }
  render(){
    const friendsList = friends
    .filter(friend =>  friend.name.toLowerCase().indexOf(
      this.state.searchText.toLowerCase() ) !== -1 )
    .sort((a,b)=> a[this.state.orderBy]> b[this.state.orderBy])
    .map (friend => (
      <Friend
        currentLocation= {friend.current_location || {}}
        friendCount= {friend.friend_count}
        key= {friend.$$hashKey}
        name ={friend.name}
        pictureUrl={friend.pic_square}
        status={friend.status? friend.status.message : "" }
        />
    ))
    const displayFriends =this.state.order === "ascending" ? friendsList : friendsList.slice().reverse;
    return(
      <div>
      	<form className="form-inline searchForm" role="form">
      		<div className="form-group">

      			<input
              className="form-control"
              placeholder="Search For Friends"
              value={this.state.searchText}
              onChange={this.handleChange.bind(this, "searchText")} />

                  <select
                    className="input-medium"
                    value={this.state.orderBy}
                    onChange={this.handleChange.bind(this, "orderBy")}>
                      <option>Name</option>
                      <option>#Friends</option>
                  </select>

                  <select
                    className="input-medium"
                    value={this.state.order}
                    onChange={this.handleChange.bind(this, "order")}>
                      <option>Descending</option>
                      <option>Ascending</option>
                  </select>

      		</div>
      	</form>

      	<ul>
          { friendsList }
      	</ul>
      </div>
    )
  }
}
