import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import CreditCardInput from "react-credit-card-input";
const style = {
  "fontSize": "15px",
  "backgroundColor": "rgb(115, 156, 245)",
  "width": "100%",
  "height": "2.2rem",
  "marginTop": "1rem",
};
const styleObj = {
  upiContainer: {
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "flexDirection": "column",
    "padding": "1rem",
  },
  p: {
    "fontSize": "10px",
    "color": "red",
    "width": "100%",
  },
  label: {
    "fontWeight": "bold",
    "fontSize": "15px",
  },
  input: {
    "border": "1px solid grey",
    "height": "2.5rem",
    "padding": ".5rem",
    "borderRadius": "5px",
    "color": "black",
    "outline": "none",
    "fontFamily": "inherit",
    "fontSize": "15px",
  },
};
const Card = ({state}) => {
  const history =useHistory();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    CVC: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    state((prevState)=>({...prevState,paymentCredential:cardDetails}))
    history.push('/success')
  };
  return [
    <CreditCardInput
      cardNumberInputProps={{
        name: "cardNumber",
        value: cardDetails.cardNumber,
        onChange: handleChange,
      }}
      cardExpiryInputProps={{
        name: "expiry",
        value: cardDetails.expiry,
        onChange: handleChange,
      }}
      cardCVCInputProps={{
        name: "CVC",
        value: cardDetails.CVC,
        onChange: handleChange,
      }}
      fieldClassName="input"
    />,
    <button style={style} onClick={handleSubmit}>
      Submit
    </button>,
  ];
};
const Upi = ({state}) => {
  const history =useHistory();
  const [upi, setUpi] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setUpi(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^\w.+@\w+$/;
    if (upi && !regex.test(upi)) {
      console.log(upi.length);
      setError("Invalid UPI ID!");
    } else {
      state((prevState)=>({...prevState,paymentCredential:upi}));
      setError("");
      history.push("/success");
    }
  };
  return (
    <div style={styleObj.upiContainer} key="0">
      <label style={styleObj.label}>UPI</label>
      <input
        style={styleObj.input}
        type="text"
        value={upi}
        onChange={handleChange}
        placeholder="Enter Valid UPI ID"
        name="upi"
      />
      <p style={styleObj.p}>{error}</p>
      {
        <button style={style} onClick={handleSubmit}>
          Submit
        </button>
      }
    </div>
  );
};
const Paypal = ({state}) => {
  const history = useHistory();
    const [paypal, setPaypal] = useState("");
    const [error, setError] = useState("");
    const handleChange = (e) => {
      setPaypal(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (paypal.length>30 || paypal.length<3 || paypal[0]!=='@') {
        setError("Invalid Paypal ID!");
      } else {
        state((prevState)=>({...prevState,paymentCredential:paypal}))
        setError("");
        history.push('/success');
      }
    };
    return (
      <div style={styleObj.upiContainer}>
        <label style={styleObj.label}>Paypal Id</label>
        <input
          style={styleObj.input}
          type="text"
          value={paypal}
          onChange={handleChange}
          placeholder="Enter Valid Paypal ID"
          name="paypal"
        />
        <p style={styleObj.p}>{error}</p>
        {
          <button style={style} onClick={handleSubmit}>
            Submit
          </button>
        }
      </div>
    );
};
const Finalstep = ({ card, paypal, upi, state }) => {
  if (card) return <Card state={state}/>;
  else if (upi) return <Upi state={state}/>;
  else return <Paypal state={state}/>;
};
export default Finalstep;
