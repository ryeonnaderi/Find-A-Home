import React from "react";
import "./Dashboard.css";

const Dashboard = props => (
  <div>
      <img src={props.image}/>
      <p name="name" value={props.name}>name: {props.name}</p>
      <p name="address" value={props.address}>address: {props.address}</p>
      <p name="price" value={props.price}>price: {props.price}</p>
      <p name="match" value={props.match}>match count: {props.match}</p>
  </div>
);

export default Dashboard;