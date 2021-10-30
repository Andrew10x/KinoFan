import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Movie from './pages/Movie';
import CinemaHall from './pages/CinemaHall';

import './App.scss';

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Main /> 
        </Route>
        <Route path="/film">
          <Movie /> 
        </Route>
        <Route path="/hall">
          <CinemaHall /> 
        </Route>
      </Switch> 
    </>
  );
}

export default App;
