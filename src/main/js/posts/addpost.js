import React from 'react';

class AddPost extends React.Component {
	render() {

		return (

          <form method="post" action="/">
            <label>
              Post:
              <input type="text" name="post" />
            </label>
            <input type="submit" value="Submit" />
          </form>

		)
	}
}

export default AddPost;