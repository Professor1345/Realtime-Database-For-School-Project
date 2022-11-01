import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Main from './pages/Main';
import TanksPage from './pages/TanksPage';
import TankOverview from './pages/TankOverview';
import AddTank from './pages/AddTank';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/main" component={Main} />
          {/* <Route path="/tanks" component={TanksPage} /> */}
          {/* <Route path="/tankview" component={TankOverview} />
          <Route path="/addTank" component={AddTank} /> */}
          {/* <Route path="/tank/:id" component={TankOverview} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
