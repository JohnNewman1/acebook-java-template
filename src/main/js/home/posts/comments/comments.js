import React from 'react';
import Comment from './comment'

class Comments extends React.Component {
	render() {
		var commentDisplay = this.props.comments.map(comment =>
			<Comment key={comment._links.self.href} comment={comment}/>
		 );
		return (
    	<div className="comments">
       	{commentDisplay}
    	</div>
		)
	}
}

Comments.defaultProps = { comments: [] };

export default Comments;
