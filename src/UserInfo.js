import React, { Component } from "react";


class UserInfo  extends Component {
constructor(props) {
super(props);


this.state = {
name: "Adia",
profession: "Lead Agent",
luckyNumber: Math.floor(Math.random() * 7) + 2,
};
}


render() {
return (
<div>
<h2>Your Information</h2>
<p>Name: {this.state.name}</p>
<p>Profession: {this.state.profession}</p>
<p>Today the lucky number is: {this.state.luckyNumber}</p>
</div>
);
}
}


export default UserInfo;