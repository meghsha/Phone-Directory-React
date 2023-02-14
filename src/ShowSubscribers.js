import React, { Component } from "react";
import Header from "./common/Header";
import "./ShowSubscribers.css";
import { Link } from "react-router-dom";

class ShowSubscribers extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     subscribersListToShow: []
  //   }
  // }
  onDeletedClick = (subscriberId) =>{
    this.props.deleteSubscriberHandler(subscriberId);
  }

  render() {

    return (
      <div className="container">
        <Header header={"Phone Directory "} />
        <Link to="/add">
           <button className="btn">Add+</button>
        </Link>
        
        <div className="Tags">
          <span className="spanTags"> Name </span>
          <br />
          <span className="spanTags" id="addPhone"> Phone </span>
        </div>
        {
          this.props.SubscriberList.map(sub => { 
            return <div key={sub.id} className="Tags">
              <span className="spantags">{sub.name}</span>
              <br /><hr/>
              <span className="spantags">{sub.phone}</span><hr/>
              <button className="delete spantags" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
            </div>
          })
        }
      </div>
    );
  }
}
export default ShowSubscribers;