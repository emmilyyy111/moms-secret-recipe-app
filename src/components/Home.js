import { Button } from 'react-bootstrap';
import recipehomepage from '../assets/recipehomepage.jpeg'

const Home = () => {
    return ( 
        <div className="home">
        <img className="image" src={recipehomepage} alt="this is the recipie on the homepage" />
        <div className="home-name">
        <h2>Mom's Recipes</h2>
        <h4 classname="myh4">Created with love by<br/>
        Jeannie Morgenbesser</h4>
        <br/>
        <Button className="button"> View Recipes </Button>
        </div>
        </div>
             );
}
 
export default Home;