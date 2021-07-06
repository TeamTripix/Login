import './App.css';
import Login from './Login';
import Welcome from './Welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
