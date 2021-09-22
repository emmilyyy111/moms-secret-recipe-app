import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AllRecipes from './components/AllRecipes';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div>
      <a href="/">
     <Header/>
     </a>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/allrecipes" >
        <AllRecipes/>    
        </Route>
        <Route exact path="/signup">
        <Signup />
        </Route>
        <Route exact path="/login">
        <Login/>
        </Route>
      </Switch>
      


    </div>
    </Router>
  );
}

export default App;
