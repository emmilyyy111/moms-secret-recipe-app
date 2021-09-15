import Header from './components/Header';
import Home from './components/Home';
import AllRecipes from './components/AllRecipes';

import './App.css';

function App() {
  return (
    <div>

    <a href='/'>
      <Header/>
    </a>

      <Home />

      <a href='/allrecipes'>
        <AllRecipes />
      </a>
      


    </div>
  );
}

export default App;
