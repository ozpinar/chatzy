import './App.css';
import Login from './assets/Login/Login'
import Register from './assets/Register/Register'
import Logs from './assets/Logs/Logs'
import Chat from './assets/Chat/Chat'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedLogs from './components/ProtectedLogs'
import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';

function App() {
  const [user, setUser] = useContext(AuthContext)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={user ? Chat : Login}/>
          <Route path="/register" exact component={Register}/>
          <ProtectedRoute path="/chat" exact component={Chat}/>
          <Route path="/logs" exact component={Logs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
