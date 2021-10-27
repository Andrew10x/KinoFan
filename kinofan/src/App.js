import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Movie from './pages/Movie';

import './App.scss';

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/film">
          <Movie/> 
        </Route>
      </Switch> 
    </>
  );
}

export default App;
