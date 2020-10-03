import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/mainComponent/main.component";
import FooterComponent from "./components/footer.component/footer.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SaveComponent from "./components/saveComponent/save.component";

import NavbarComponent from "./components/navbarComponent/navbar.component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ToastContainer />
          <NavbarComponent></NavbarComponent>
          <Switch>
            <Route exact path="/" component={MainComponent} />

            <Route path="/save" component={SaveComponent} />
          </Switch>
          <FooterComponent></FooterComponent>
        </div>
      </Router>
    );
  }
}

export default App;
