import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: "",
    };
  }
  userRole = sessionStorage.getItem("userRole");

  cleanStorage = () => {
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("userName");
    window.location.href = "/";
  };

  render() {
    return (
      <nav className="navBar">
        <Link to="/">
          <label className="Logo">Blog.</label>
        </Link>
        <ul className="nav_list">
          <li>
            <Link to="/">Home</Link>
          </li>
          {this.userRole ? (
            <li>
              <Link to="blog">Blog</Link>
            </li>
          ) : (
            ""
          )}
          {!this.userRole ? (
            <li>
              <Link to="register">Register</Link>
            </li>
          ) : (
            ""
          )}
          {/* <li>
            <Link to="register">Register</Link>
          </li> */}
          {this.userRole ? <li onClick={this.cleanStorage}>Logout</li> : ""}
        </ul>
      </nav>
    );
  }
}

export default Nav;
