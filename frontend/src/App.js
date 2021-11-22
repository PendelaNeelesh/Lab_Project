import Nav from "./components/Nav"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from "./components/Home"
import Login from './components/Login'
import About from "./components/About"
import LenderReg from "./components/LenderReg"
import BarrowerReg from "./components/BarrowerReg"
import { UserProvider } from './contextApis/UserdetailsContext'
function App() {
  return (
    <UserProvider>
      <Router >
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path='/about'><About /></Route>
            <Route exact path='/login'><Login /></Route>
            <Route exact path='/lendreg'>< LenderReg /> </Route>
            <Route exact path='/barreg'>< BarrowerReg /> </Route>
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
