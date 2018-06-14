import React from 'react';

 class Logout extends React.Component {
  render() {
    return (
      <div className='logout'>

        <form action="/logout" method="post">
           <input className="form-control" type="submit" value="Log Out"/>
        </form>

      </div>
    );
  }
}

export default Logout;


