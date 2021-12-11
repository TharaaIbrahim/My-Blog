import React, { Component } from "react";

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }
  commentHandler = (event) => {
    this.setState({ comment: event.target.value });
  };
  addCommentHandler = (event) => {
    event.preventDefault();
    this.props.submit(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.addCommentHandler} className="comment_Style">
        <textarea
          className="commentText"
          onChange={this.commentHandler}
          value={this.state.comment}
          placeholder="Add a comment"
          name="comment"
          required
        />
        <button type="submit">Comment</button>
      </form>
    );
  }
}

export default CommentForm;
