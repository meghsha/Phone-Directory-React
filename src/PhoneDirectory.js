import React, { useState, useEffect, useCallback } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function PhoneDirectory() {
  const [SubscriberList, setSubscriberList] = useState([])


  async function getData(){
    let rawResponse = await fetch("http://localhost:7081/api/contacts/")
    let result = await rawResponse.json()
     setSubscriberList(result);
  }
  useEffect(() => {
    getData();
  }, [])
  
  const deleteSubscriber = useCallback( async (subscriberId) => {
    
      let rawResponse = await fetch("http://localhost:7081/api/contacts/" + subscriberId, {method: "delete"} )
      let data = await rawResponse.json();
       getData();
  }, [SubscriberList]);
  // async function deleteSubscriber(subscriberId) {
  //   // let SUBSCRIBER = SubscriberList;
  //   // let subscriberIndex = 0;
  //   // SUBSCRIBER.forEach(function (subscriber, index) {
  //   //   if (subscriber.id === subscriberId) {
  //   //     subscriberIndex = index;
  //   //   }
  //   // });
  //   // let newSubscribers = SUBSCRIBER;
  //   // const newSubscribers = SubscriberList.filter(subscriber => subscriber.id !== subscriberId);
  //   // // this.setState({ subscribers: newSubscribers });
  //   // setSubscriberList(newSubscribers);

  //     let rawResponse = await fetch("http://localhost:7081/api/contacts/" + subscriberId, {method: "delete"} )
  //     let data = await rawResponse.json();
  //      getData();
  // }

  async function addSubscriber(newSubscriber) {

    let response = await fetch("http://localhost:7081/api/contacts", {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newSubscriber)
    })

    let result = await response.json()
    getData();
    // let SUBSCRIBER = SubscriberList;
    // if (SUBSCRIBER.length > 0) {
    //   newSubscriber.id = SUBSCRIBER[SUBSCRIBER.length - 1].id + 1;
    // } else {
    //   newSubscriber.id = 1;
    // }
    // SUBSCRIBER.push(newSubscriber);
    // // this.setState({ SubscriberList: SUBSCRIBER });
    // setSubscriberList(SUBSCRIBER);
    // // console.log(this.state.SubscriberList);
  }

  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={(props) => (
            <ShowSubscribers
              {...props}
              SubscriberList={SubscriberList}
              deleteSubscriberHandler={(subscriberId) =>
                deleteSubscriber(subscriberId)
              }
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={({ history }, props) => (
            <AddSubscriber
              {...props}
              addSubscriberHandler={(newSubscriber)=>addSubscriber(newSubscriber)}
            />
          )}
        />
      </div>
    </Router>
  );
}

// export default class PhoneDirectory extends Component {

//     constructor() {
//         super();
//         this.state = {
//             SubscriberList: [
//                 {
//                     id: 1,
//                     name: 'Meghan',
//                     phone: 9509234051
//                 },
//                 {
//                     id: 2,
//                     name: 'Mayank',
//                     phone: 9509234052
//                 }
//             ]
//         }
//     }
//     addSubscriber = (newSubscriber) =>{
//         let SUBSCRIBER = this.state.SubscriberList;
//         if(SUBSCRIBER.length > 0){
//             newSubscriber.id = SUBSCRIBER[SUBSCRIBER.length - 1].id + 1;
//         } else {
//             newSubscriber.id = 1;
//         }
//         SUBSCRIBER.push(newSubscriber);
//         this.setState({SubscriberList : SUBSCRIBER});
//         console.log(this.state.SubscriberList)
//     }

//     deleteSubscriber = (subscriberId) =>{
//         let SUBSCRIBER = this.state.SubscriberList;
//         let subscriberIndex = 0;
//         SUBSCRIBER.forEach(function (subscriber, index){
//             if(subscriber.id === subscriberId){
//                 subscriberIndex = index;
//             }
//         }, this)
//         let newSubscribers = SUBSCRIBER;
//         newSubscribers.splice(subscriberIndex, 1);
//         this.setState({subscribers: newSubscribers})
//     }

//   render() {
//     return (
//         <Router>
//             <div>
//                 <Route exact path="/" render={(props) => <ShowSubscribers {...props} SubscriberList ={this.state.SubscriberList} deleteSubscriberHandler = {this.deleteSubscriber}/>}  />
//                 <Route exact path="/add"  render={({history}, props) => <AddSubscriber history={history} {...props}addSubscriberHandler = {this.addSubscriber}/> } />
//             </div>
//         </Router>
//     )
//   }
// }
