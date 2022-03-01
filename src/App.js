import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
