// import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Houses from "./pages/Houses";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:room" component={Room} />
        <Route exact path="/houses" component={Houses} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
