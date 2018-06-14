const React = require('react');
const client = require('../client');

import Posts from './posts/posts'
import AddPost  from './posts/addPost'
import Header  from './header'

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {posts: []};
		this.createPost = this.createPost.bind(this);
	}

  componentDidMount() {
     this.loadPostsFromServer();
  }

  loadPostsFromServer() {
      client({method: 'GET', path: '/api/posts'}).then(response => {
           this.setState({posts: response.entity._embedded.posts});
      });
  }

	createPost(post) {
		client({
			method: 'POST',
			path: '/api/posts',
			entity: post,
			headers: {'Content-Type': 'application/json'}
		})
		.then((res) => {
			this.loadPostsFromServer();
		});
	}

    render() {
        return (<div>
                <Header showSignUp={false} />
                <Posts posts={this.state.posts.reverse()}/>
                <AddPost createPost={this.createPost} />
          </div>
        )
    }
}

export default Home;
