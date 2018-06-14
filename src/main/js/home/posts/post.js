import React from 'react';
import AddComments from './comments/addComments';
import Comments from './comments/Comments'
const client = require('../../client');

class Post extends React.Component{
    	constructor(props) {
    		super(props);
    		this.state = {comments: [],
    		id: ""};
    		this.createComments = this.createComments.bind(this);
    	}

    	    componentDidMount() {
             this.loadCommentsFromServer(this.getid(this.props.post._links.self.href))

          }

          getid(string) {
            var array = string.split('/');
             return array[array.length-1];


          }

          loadCommentsFromServer(id) {
              client({method: 'GET', path: '/api/posts/' + id + '/comments' }).then(response => {
                   this.setState({comments: response.entity._embedded.comments});

              });
          }

  	createComments(comment) {
  		client({
  			method: 'POST',
  			path: '/api/comments',
  			entity: comment,
  			headers: {'Content-Type': 'application/json'}
  		})
  		.then((res) => {
        			this.loadCommentsFromServer(this.getid(this.props.post._links.self.href))
        		});

  	}

	render() {
		return (

        <tr>
            <td>{this.props.post.content}<br />
           <AddComments createComment={this.createComments} post={this.props.post} />
           <Comments comments={this.state.comments} />
           </td>
            <td>{this.props.post.createdAt}</td>


        </tr>


		)
	}
}

export default Post;
