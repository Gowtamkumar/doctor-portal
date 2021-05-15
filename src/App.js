import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Allpatients from './components/Dashboard/Allpatients/Allpatients';
import DashAppointment from './components/Dashboard/DashAppointment/DashAppointment';
import Prescriptions from './components/Dashboard/Prescriptions/Prescriptions';
import Login from './components/Login/Login';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [LoggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[LoggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard/appointment">
            <DashAppointment></DashAppointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allpatients">
            <Allpatients></Allpatients>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/prescriptions">
            <Prescriptions></Prescriptions>
          </PrivateRoute>
          <Route path="/dashboard/adddoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
