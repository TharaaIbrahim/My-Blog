import React, { Component } from "react";
import "./AddPost.css";

export class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      src: "",
    };
  }
  postHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.submit(this.state.title, this.state.content, this.state.src);
    this.setState({ title: "", content: "", src: "" });
  };

  render() {
    return (
      <div>
        <form className="post_Form" onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.postHandler}
            name="title"
            placeholder="Title"
            required
          />
          <textarea
            rows="4"
            cols="50"
            value={this.state.content}
            onChange={this.postHandler}
            placeholder="Content"
            name="content"
          />
          <input
            type="src"
            value={this.state.src}
            onChange={this.postHandler}
            name="src"
            placeholder="Add an URL of image"
          />
          <button type="submit">Add Post</button>
        </form>
      </div>
    );
  }
}

export default AddPost;
