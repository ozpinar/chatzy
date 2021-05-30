import './App.css';
import Login from './assets/Login/Login'
import Register from './assets/Register/Register'
import Logs from './assets/Logs/Logs'
import Message from './components/Message/Message'
import Chat from './assets/Chat/Chat'
import Card from './components/Card/Card'
import GroupCard from './components/GroupCard/GroupCard'
import ChatHeader from './components/ChatHeader/ChatHeader'

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
          <Route path="/test" exact component={GroupCard}/>
          <Route path="/chat" exact component={Chat}/>
          <Route path="/logs" exact component={Logs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
