import React from 'react';
import client from'../../client';

class Likes extends React.Component{
  constructor(props) {
    super(props);
    this.state = { likes: 0,
    display: "" }
    this.updateLikes = this.updateLikes.bind(this);
    this.likeDisplay = this.likeDisplay.bind(this);
  }

  async componentDidMount() {
    await this.setState({ likes: this.props.post.likes });
    this.likeDisplay();
  }

  likeDisplay() {
    if (this.state.likes == 0) {
      this.setState({ display: "" })
    } else if(this.state.likes == 1) {
      this.setState({ display: "1 Person likes this" });
    } else {
      this.setState({ display: `${this.state.likes} People like this` });
    }
  }

  updateLikes() {
    client({method: 'GET', path: '/api/posts/' + this.props.id}).then(response => {
      var likeCount = response.entity.likes + 1
      client({
        method: 'PATCH',
        path: response.url,
        entity: { likes: likeCount },
        headers: {'Content-Type': 'application/json'}
      });
      this.setState({likes: likeCount });
      this.likeDisplay();
    });
  }

  render() {
    return (
      <span>
        <button onClick={this.updateLikes}>Like</button> {this.state.display}
      </span>
    )
  }
}

export default Likes;
