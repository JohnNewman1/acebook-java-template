import React from 'react'

class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var newPost = {};
    newPost['content'] = this.state.value
    this.props.createPost(newPost)
    event.preventDefault();
    this.setState({ value: ' ' });
  }

  render() {
    return (
            <div>
              <textarea form="comment-form" type="text" placeholder = "What do you want to say?..." onChange={this.handleChange} value={this.state.value}></textarea>
              <form id="post-form" onSubmit={this.handleSubmit} >
                <div className="col-md-4 goback">
                   <input type="submit" value="Submit" />
                 </div>
               </form>
            </div>
            );
          }
}

AddPost.defaultProps = {};

export default AddPost;
