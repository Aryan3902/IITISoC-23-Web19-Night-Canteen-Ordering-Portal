import './App.css';

import MenuPage from './foodItems/Pages/menuPage';
import Background from "./users/components/background"
// import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <>
      <Background />
      <MenuPage />
    </>
  );
}

export default App;
