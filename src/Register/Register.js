import React, { Component } from "react";
import "./Register.css";
export class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      repeat: "",
      msg: "",
      registration: "",
    };
  }
  dataArr = [];
  userData = JSON.parse(localStorage.getItem("userData"));

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (e) => {
    this.userData.forEach((element) => {
      if (this.state.email === element.email) {
        this.setState({ msg: "This email has an account", registration: "" });
      }
    });
    if (this.state.msg === "This email has an account") {
      if (this.state.repeat === this.state.password) {
        this.setState({ msg: "Match" });
        this.dataArr.push(this.state);
        if (!localStorage.getItem("userData")) {
          localStorage.setItem("userData", JSON.stringify(this.dataArr));
        } else {
          const getData = JSON.parse(localStorage.getItem("userData"));
          getData.push(this.state);
          localStorage.setItem("userData", JSON.stringify(getData));
        }
        this.setState({
          userName: "",
          email: "",
          password: "",
          repeat: "",
          msg: "",
          registration: "success",
        });
      } else {
        this.setState({ msg: "Password doesn`t match", registration: "" });
      }
    }

    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.state.registration === "success"
              ? "registration_State"
              : "registration_Failed"
          }
        >
          <p>Thank you for your registration</p>
        </div>
        <form className="form_style" onSubmit={this.submitHandler}>
          <h2 className="title-register">Register</h2>
          <input
            type="text"
            placeholder="UserName"
            value={this.state.userName}
            name="userName"
            onChange={this.changeHandler}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.changeHandler}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.changeHandler}
            required
          />
          <input
            type="password"
            placeholder="Repeat-Password"
            value={this.state.repeat}
            name="repeat"
            onChange={this.changeHandler}
            required
          />
          <p
            className={
              this.state.msg === "Match" ? "msg_style" : "msg_style_error"
            }
          >
            {this.state.msg}
          </p>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
export default Register;
