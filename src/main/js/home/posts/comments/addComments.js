import React from 'react'

class AddComments extends React.Component {
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
    event.preventDefault();
    var newComment = {};
    newComment['comment'] = this.state.value;
    newComment['post'] = this.props.post._links.self.href;
    this.props.createComment(newComment);
    this.setState({ value: ' ' });
  }

  render() {
    return (
    <div>
      <textarea form="comment-form" type="text" placeholder = "Add New Comment" onChange={this.handleChange} value={this.state.value}></textarea>
      <form id="comment-form" onSubmit={this.handleSubmit} >
        <div className="col-md-4 goback">
           <input type="submit" value="Submit" />
         </div>
       </form>
    </div>
    );
  }
}

AddComments.defaultProps = {};

export default AddComments;
