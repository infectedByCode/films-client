import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import RegisterPage from './components/RegisterPage/RegisterPage';
import FilmList from './components/FilmList/FilmList';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
