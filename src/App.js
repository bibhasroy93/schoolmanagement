import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavHeader from "./components/NavHeader";
import About from "./pages/About";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ViewDetails from "./pages/ViewDetails";
import ViewStudent from "./pages/ViewStudent";
import EditDetails from "./pages/EditDetails";
import AddStudent from "./pages/AddStudent";
function App() {
  return (
    <Router>
      <div className="App">
        <NavHeader />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/admin" component={AdminPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/viewStudent" component={ViewStudent}></Route>
          <Route exact path="/viewDetails" component={ViewDetails}></Route>
          <Route exact path="/editDetails" component={EditDetails}></Route>
          <Route exact path="/addStudent" component={AddStudent}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
