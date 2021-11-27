import React, { Component } from "react";
import "./Comment.css";
export class Comment extends Component {
  constructor(props) {
    super(props);
  }
  userName = sessionStorage.getItem("userName");
  render() {
    return (
      <div
        className={
          this.props.displayComment === "display" ? "newComment" : "hideComment"
        }
      >
        <p>{this.userName}:</p> {this.props.newComment}
      </div>
    );
  }
}

export default Comment;
