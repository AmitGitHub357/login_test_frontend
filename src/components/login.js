import { React, useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data,setData] = useState({})
  const submitHandler = (e) => {
    const body = {
      email,
      password
    }
    e.preventDefault();
    axios.get('http://localhost:5000/api/user/').then((res) => {
      console.log(res.data)
    })
  };
  
  // console.log(email ,password)
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 ">
          <form>
            <div className="form-group">
              <h2 className="text-center">Login</h2>
              <label >Email address</label>
              <input
                type="email"
                className="form-control mt-3"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label >Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mt-3"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 mr-3"
              onClick={(e) => submitHandler}
            >
              Submit
            </button>
            <lable className="mr-3">Remember Me </lable>
            <input className="ml-3" type="checkbox" />
          </form>
        </div>
        <div className="col-md-6 ">
          <img src="https://www.acv.app/static/media/RemoteTeamAnimate.9bc87be4.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
