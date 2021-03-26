import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import RegisterPage from './components/RegisterPage/RegisterPage';
import FilmList from './components/FilmList/FilmList';

function App() {
  return (
    <div className='container mx-auto py-20 px-10'>
      <Router>
        <Switch>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/films'>
            <FilmList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
