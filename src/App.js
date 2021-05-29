import './App.css';
import Login from './assets/Login/Login'
import Register from './assets/Register/Register'
import Message from './components/Message/Message'
import Chat from './assets/Chat/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/me" exact component={Message}/>
          <Route path="/chat" exact component={Chat}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
