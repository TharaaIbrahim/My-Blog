import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandPage.css";

export class LandPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: "",
      role: "",
    };
  }
  adminUser = {
    email: "admin@gmail.com",
    password: "admin",
  };

  userRole = sessionStorage.getItem("userRole");
  userData = JSON.parse(localStorage.getItem("userData"));

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (
      this.state.email === this.adminUser.email &&
      this.state.password === this.adminUser.password
    ) {
      this.setState({ msg: "" });
      this.setState({ role: "admin" });
      sessionStorage.setItem("userRole", "admin");
      sessionStorage.setItem("userName", "admin");
      window.location.href = "blog";
    } else {
      let breakCondition = "false";
      this.userData.forEach((element) => {
        if (this.state.email !== element.email && breakCondition === "false") {
          this.setState({ msg: "You are not registered" });
        } else if (
          this.state.password !== element.password &&
          breakCondition === "false"
        ) {
          this.setState({ msg: "Incorrect Password" });
          breakCondition = "ture";
        }
        if (
          this.state.email === element.email &&
          this.state.password === element.password
        ) {
          breakCondition = "ture";
          this.setState({ msg: "" });
          this.setState({ role: "users" });
          sessionStorage.setItem("userRole", "users");
          sessionStorage.setItem("userName", element.userName);
          window.location.href = "blog";
        }
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="blog_ID">
          <img src="Tharaa.png" alt="Tharaa" />
          <div className="blod_ID_Content">
            <h1>Welcome to Tharaa's Blog</h1>
            <p>
              If you want to see my posts please{" "}
              <button>
                <Link to="register">Register</Link>
              </button>
            </p>
          </div>
        </div>
        <div className={!this.userRole ? "main" : "main_Center"}>
          <div className={!this.userRole ? "aboutMe" : "aboutMe_Center"}>
            <h1>I'm Tharaa Ibrahim</h1>
            <p>
              I created this blog to share with you new news in the coding world
            </p>
            <p>stay tuned...</p>
          </div>
          <div>
            <form
              className={!this.userRole ? "login" : "hide_Login"}
              onSubmit={this.submitHandler}
            >
              <h2>Login</h2>
              <input
                type="email"
                placeholder="Email"
                onChange={this.changeHandler}
                value={this.state.email}
                name="email"
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={this.changeHandler}
                value={this.state.password}
                name="password"
                required
              />
              <p>{this.state.msg}</p>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandPage;
