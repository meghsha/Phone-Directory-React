import React, { Component } from 'react'
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            SubscriberList: [
                {
                    id: 1,
                    name: 'Meghan',
                    phone: 9509234051
                },
                {
                    id: 2,
                    name: 'Mayank',
                    phone: 9509234052
                }
            ]
        }
    }
    addSubscriber = (newSubscriber) =>{
        let SUBSCRIBER = this.state.SubscriberList;
        if(SUBSCRIBER.length > 0){
            newSubscriber.id = SUBSCRIBER[SUBSCRIBER.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        SUBSCRIBER.push(newSubscriber);
        this.setState({SubscriberList : SUBSCRIBER});
        console.log(this.state.SubscriberList)
    }

    deleteSubscriber = (subscriberId) =>{
        let SUBSCRIBER = this.state.SubscriberList;
        let subscriberIndex = 0;
        SUBSCRIBER.forEach(function (subscriber, index){
            if(subscriber.id === subscriberId){
                subscriberIndex = index;
            }
        }, this)
        let newSubscribers = SUBSCRIBER;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers})
    }

  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" render={(props) => <ShowSubscribers {...props} SubscriberList ={this.state.SubscriberList} deleteSubscriberHandler = {this.deleteSubscriber}/>}  />
                <Route exact path="/add"  render={({history}, props) => <AddSubscriber history={history} {...props}addSubscriberHandler = {this.addSubscriber}/> } />
            </div>
        </Router>
    )
  }
}