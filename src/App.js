import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import LandPage from "./LandPage/LandPage";
import Nav from "./Nav/Nav";
import Register from "./Register/Register";

class App extends Component {
  constructor() {
    super();
    this.state = {
      logout: "",
    };
  }
  userRole = sessionStorage.getItem("userRole");
  logoutHandler = () => {
    if (this.userRole) {
      this.setState({ logout: "Logout" });
    } else {
      this.setState({ logout: "" });
    }
  };
  render() {
    return (
      <Router>
        <Nav logout={this.logoutHandler} logoutState={this.state.logout} />
        <Routes>
          <Route
            path="/"
            element={<LandPage logoutState={this.logoutHandler} />}
          />
          <Route path="blog" element={<Blog />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer path="footer" element={<Footer />} />
      </Router>
    );
  }
}

export default App;
