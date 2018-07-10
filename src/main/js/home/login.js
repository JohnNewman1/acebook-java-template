import React from 'react';

const defaultProps = {
  text: ""
};

class Login extends React.Component {
 render() {
   return (
         <div className='login'>
           <div className='login_inner'>
           <button onClick={this.props.closeLogin}>X</button>
             <div className="row">
               <div className="col-xs-8 col-xs-offset-2">
               <form className="form-group">
                 <label>Email:</label>
                 <input className="form-control" type="text" />
                 <br />
                 <label>Password:</label>
                 <input className="form-control" type="password" />
                 <br />
                 <input type="submit" value="submit" />
               </form>
               </div>
             </div>
           </div>
         </div>
   );
 }
}

export default Login;
