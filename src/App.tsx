import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import RegisterPage from './components/RegisterPage/RegisterPage';
import FilmList from './components/FilmList/FilmList';
import Header from './components/Header/Header';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className='container mx-auto py-20 px-10'>
          <Switch>
            <Route exact path='/'>
              <RegisterPage />
            </Route>
            <Route path='/register'>
              <RegisterPage />
            </Route>
            <Route path='/films'>
              <FilmList />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
