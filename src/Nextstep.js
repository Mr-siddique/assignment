import React, { useState } from "react";
import Finalstep from "./Finalstep";
const Nextstep = ({ next,state }) => {
  const [card,isCard]=useState(false);
  const [upi,isUpi]=useState(false);
  const [paypal,isPaypal]=useState(false);
  const handleClick = (e) => {
    next(false);
  };
  const handleCard=(e)=>{
    e.preventDefault();
    isUpi(false);
    isCard(true);
    isPaypal(false);
  }
  const handleUpi=(e)=>{
    e.preventDefault();
    isUpi(true);
    isCard(false);
    isPaypal(false);
  }
  const handlePaypal=(e)=>{
    e.preventDefault();
    isUpi(false);
    isCard(false);
    isPaypal(true);
  }

  return (
    <div className="paymentOptions">
      <i className="fas fa-times" onClick={handleClick}></i>,
      {card||upi||paypal?<Finalstep card={card} upi={upi} paypal={paypal} state={state}/>:[
    <button className="creditCard" onClick={handleCard} key="1">
      <i class="far fa-credit-card"></i>Credit card
    </button>,
    <button className="debitcard" onClick={handleCard} key="2">
      <i class="far fa-credit-card"></i> Debit card
    </button>,
    <button className="upi" onClick={handleUpi} key="3">
      <img alt="logo" src="https://zeevector.com/wp-content/uploads/Upi-Payment-Logo-white.png" />
      UPI
    </button>,
    <button className="paypal" onClick={handlePaypal} key="4">
      <i class="fab fa-paypal"></i> PayPal
    </button>,
      ]}
  </div>)
};
export default Nextstep;
