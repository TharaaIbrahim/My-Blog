import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/">
          <label className="Logo">Blog.</label>
        </Link>
        <p> &copy;Copy rigth 2021 | Tharaa's Blog </p>
      </footer>
    );
  }
}

export default Footer;
