import momsapplogin from '../assets/momsapplogin.jpeg'

const Login = () => {
    return ( 
        <div className="forms-container">
        <h2 className="loginh2">Login</h2>
        <div className="loginformcontainer">
        <img className="login-image" src={momsapplogin} alt="this is a photo with a picnic easthetic with old fashioned homemade desserts " />
        <form className="loginform">
            <label className="loginform-username">Username</label>
            &nbsp;
            &nbsp;
            &nbsp;
            <input className="login-input" type="text" required />
            <br/>
            <label  className="loginform-password">Password</label>
            &nbsp;
            &nbsp;
            &nbsp;
            <input className="login-input" type="password" required />
            <br/>
            <button className="login-button"> Login </button>
        </form>
        </div>
    </div>
     );
}
 
export default Login;