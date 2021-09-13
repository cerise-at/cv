import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './layout';
import { Home, About, Projects, Contact} from './pages'
import './App.css';

function App(){

    return(
      <>
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/projects"><Projects /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
        <Footer />
      </>
    );
  
  };
  
  export default App;