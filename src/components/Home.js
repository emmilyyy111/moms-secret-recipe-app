import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import recipehomepage from '../assets/recipehomepage.jpeg'

const Home = () => {
const [recipies, setRecipies] = useState('')

    const handleViewClick = () => {
        console.log(recipies)
    }

    return ( 
        <div className="home">
        <img className="image" src={recipehomepage} alt="this is the recipie on the homepage" />
        <div className="home-name">
        <h2>Mom's Recipes</h2>
        <h4 classname="myh4">Created with love by<br/>
        Jeannie Morgenbesser</h4>
        <br/>
        <Link to="/allrecipes"><Button className="button" onClick={handleViewClick}> View Recipes </Button></Link>
        </div>
        </div>
             );
}
 
export default Home;