
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Purchase/Purchase';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoards from './Pages/DashBoards/DashBoards/DashBoards';
import Explore from './Pages/Home/Explore/Explore';
import NotGet from './Pages/Home/NotFound/NotGet';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services/:_id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoards></DashBoards>
            </PrivateRoute>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="*">
              <NotGet></NotGet>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
