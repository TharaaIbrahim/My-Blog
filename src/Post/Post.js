import React, { Component } from "react";
import CommentForm from "../Comment/CommentForm";
import Comment from "../Comment/Comment";
import "./Post.css";
export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      src: "",
      comment: "",
      commentCounter: 0,
      displayComment: "display",
      like: 0,
    };
  }

  role = sessionStorage.getItem("userRole");
  postInfo = JSON.parse(localStorage.getItem("newPost"));

  comment = [];

  addComment = (newComment) => {
    this.comment.push({
      comment: newComment,
    });
    this.setState({
      comment: newComment,
      commentCounter: this.state.commentCounter + 1,
    });
  };

  displayComment = () => {
    if (this.state.displayComment === "display") {
      this.setState({ displayComment: "hide" });
    } else if (this.state.displayComment === "hide") {
      this.setState({ displayComment: "display" });
    }
  };

  likeHandler = () => {
    this.setState({ like: this.state.like + 1 });
  };

  render() {
    return (
      <div className="post_Comment">
        <div className="post_Style">
          <div className="admin_Info">
            <img src="Tharaa.png" alt="tharaa" />
            <h4>Tharaa Ibrahim</h4>
          </div>

          <h2>{this.props.title}</h2>

          <p>{this.props.content}</p>
          {this.props.src === "" ? "" : <img src={this.props.src} alt="blog" />}
          <div className="buttons">
            <p className="comment_Btn" onClick={this.displayComment}>
              {this.state.commentCounter} Comments
            </p>
            <p>{this.state.like} Likes</p>
            <i className="fas fa-thumbs-up" onClick={this.likeHandler}></i>
          </div>
        </div>
        <div className="comment_Show">
          {this.comment.map((comment, id) => (
            <Comment
              displayComment={this.state.displayComment}
              newComment={comment.comment}
              key={id}
            />
          ))}
          <CommentForm submit={this.addComment} />
        </div>
      </div>
    );
  }
}

export default Post;
