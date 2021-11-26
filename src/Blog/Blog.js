import React, { Component } from "react";
import AddPost from "../AddPost/AddPost";
import Post from "../Post/Post";
import "./Blog.css";
export class Blog extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      src: "",
      comment: "",
    };
  }
  post = [
    {
      title: "Fisrt Post",
      content: "Welcome to my blog",
      src: "",
    },
  ];

  userRole = sessionStorage.getItem("userRole");

  addPost = (newTitle, newContent, newImage) => {
    this.post.push({
      title: newTitle,
      content: newContent,
      src: newImage,
    });
    this.setState({
      title: newTitle,
      content: newContent,
      src: newImage,
    });
  };

  addComment = (newComment) => {
    this.comment.push({
      comment: newComment,
    });
    this.setState({
      comment: newComment,
    });
    console.log(this.state.comment);
  };

  postHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        {this.userRole === "admin" ? <AddPost submit={this.addPost} /> : ""}
        {this.post.map((post, id) => (
          <Post
            title={post.title}
            content={post.content}
            src={post.src}
            key={id}
          />
        ))}
      </div>
    );
  }
}

export default Blog;
