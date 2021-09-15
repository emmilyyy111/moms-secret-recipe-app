import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AllRecipes from './components/AllRecipes';

import './App.css';

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
      </Switch>
      


    </div>
    </Router>
  );
}

export default App;
