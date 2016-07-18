import React from "react";

export default class Friends extends React.Component{
  render(){
    return(
      <li className='friend'>
      	<img
          className="profile-pic"
          src={this.props.pictureUrl} />

      		<h3>{this.props.name}</h3>

      		<div className="location">
            {
              this.props.currentLocation.city
              ?
              <div>Location: {this.props.currentLocation.city}, {this.props.currentLocation.state}, {this.props.currentLocation.country}</div>
              :
              <div></div>
            }

      		</div>

      		<div className="status">
      			Status: {this.props.status} <span className="hashtag">#ihateprovo</span>
      		</div>

      		<div className="num-friends">
      			Friends: {this.props.friendCount}
      		</div>
      </li>
    )
  }
}
