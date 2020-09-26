import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./components/mainComponent/main.component";
import FooterComponent from "./components/footer.component/footer.component";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

// import NavbarComponent from './components/navbarComponent/navbar.component';

function App() {
  return (
    <div className="App">
          <ToastContainer />

      <MainComponent></MainComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
