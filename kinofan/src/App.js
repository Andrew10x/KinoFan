import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Movie from './pages/Movie';
import CinemaHall from './pages/CinemaHall';
import Form from './pages/Form';

import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/film/:filmName">
          <Movie />
        </Route>
        <Route path="/hall/:filmName/:session" exact>
          <CinemaHall />
        </Route>
        <Route path="/hall/:filmName/:session/form">
          <Form />
        </Route>
      </Switch>
    </>
  );
};

export default App;
