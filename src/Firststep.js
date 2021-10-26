import React, {useState } from "react";
import Nextstep from "./Nextstep";
import "./firststep.css";
import './nextstep.css';
const Firststep = () => {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    paymentCredential: "",
  });
  const [error, setError] = useState({});
  const [next, setNext] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(state));
    setNext(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const validate = ({ userName, email, password }) => {
    const error = {};
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
      if (!userName) error.userName = "Username is required";
      if (!email) error.email = "Email is required";
      if (!password) error.password = "Password is required";
      else{
      if (!regex.test(email)) error.email = "Enter a valid email";
      if (userName.length < 5)
        error.userName = "Username atleast contain 5 letters";
      if (password.length < 5)
        error.password = "Password atleast contain 5 letters";
      }
    
    return error;
  };

  return (
    <div className="container">
      {Object.keys(error).length === 0 && next?
        (<Nextstep next={setNext} state={setState}/>)
        :(<form onSubmit={handleSubmit} method="post">
        <div className="ui divider"></div>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            value={state.userName}
            onChange={handleChange}
          />
          <p>{error.userName}</p>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={state.email}
            onChange={handleChange}
          />
          <p>{error.email}</p>
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={state.password}
            onChange={handleChange}
          />
          <p>{error.password}</p>
          <button className="next">Next</button>
        </div>
      </form>
        )
         }
    </div>
  );
};
export default Firststep;
