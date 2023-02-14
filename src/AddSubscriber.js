import React, { Component } from "react";
import Header from './common/Header';
import "./AddSubscriber.css";
import { Link } from "react-router-dom";

export default class AddSubscriber extends Component {
   constructor(){
    super();
    this.state = {
      id: 0,
      name: "",
      phone: ""
    }
   }

   inputChangedHandler = (e) =>{
    let newState = this.state
    newState[e.target.name] =  e.target.value
    this.setState(newState)
    console.log(this.state)
   }

   onFormSubmitted = (e) =>{
    e.preventDefault();
    this.props.addSubscriberHandler(this.state)
    this.setState({id: 0,
      name: "",
      phone: ""})
    this.props.history.push("/");
   }


  render() {

    // const { name, phone } = this.state;
    return (
        
      <div>
        <Header header={"Add Subscriber"} />
        <Link to="/" >
            <button className="btn">Back</button>
        </Link>
        
        <form className="form" onSubmit={this.onFormSubmitted.bind(this)} >
          <div className="inputDiv">
            <label htmlFor="name"> Name: </label>
            <input
              id="name"
              type="text"
              className="labelInput"
              name="name"
              placeholder="Enter your name"
              onChange={this.inputChangedHandler}
            ></input>
            <br />
            <label htmlFor="phone"> Phone:  </label>
            <input
              id="phone"
              type="text"
              className="labelInput"
              name="phone"
              placeholder="Enter your phone"
              onChange={this.inputChangedHandler}
            ></input>
            <br />
          </div>

          <div className="subsInfo">
            <span className="subsHeading">Subscriber Info:</span>
            <br />
            <span className="subsName">Name:  {this.state.name}</span>
            <br />
            <span className="subsPhone">Phone: {this.state.phone}</span>
          </div>
          <button type="submit" className="btn">
            Add+
          </button>
        </form>
      </div>
    );
  }
}
// import React, { Component } from 'react';
// import Header from './Header';
// import './AddSubscriber.css';
// import { Link } from 'react-router-dom';

// class AddSusbscriber extends Component {

    

//     render() {

//         return (
//             <div>
//                 <Header heading="Add Subscriber" />
//                 <div className="component-body-container">
//                     <Link to="/">
//                         <button className="custom-btn">Back</button>
//                     </Link>

//                     <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
//                         <label htmlFor="name" className="label-control">Name: </label><br />
//                         <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler} /><br /><br />
//                         <label htmlFor="phone" className="label-control">Phone: </label><br />
//                         <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler} /><br /><br />

//                         <div className="subscriber-info-container">
//                             <span className="subscriber-to-add-heading">Subscriber to be added: </span><br />
//                             <span className="subscriber-info">Name: {name}</span><br />
//                             <span className="subscriber-info">Phone: {phone}</span><br />
//                         </div>

//                         <button type="submit" className="custom-btn add-btn">Add</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default AddSusbscriber;