
import momssignuppage from '../assets/momssignuppage.jpeg'

const Signup = () => {
    return ( 
        <div className="forms-container">
            <h2 className="signuph2">Signup</h2>
            <div className="signupformcontainer">
            <img className="signup-image" src={momssignuppage} alt="this is a photo with a picnic easthetic with old fashioned homemade desserts " />
            <form className="signupform">
                <label className="signupform-email">Email</label>
                &nbsp;
                &nbsp;
                &nbsp;
                <input className="signup-input" type="email" required />
                <br/>
                <label className="signupform-username">Username</label>
                &nbsp;
                &nbsp;
                &nbsp;
                <input className="signup-input" type="text" required />
                <br/>
                <label  className="signupform-password">Password</label>
                &nbsp;
                &nbsp;
                &nbsp;
                <input className="signup-input" type="password" required />
                <br/>
                <button className="signup-button"> Signup </button>
            </form>
            </div>
        </div>
     );
}
 
export default Signup;