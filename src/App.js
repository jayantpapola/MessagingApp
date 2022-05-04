import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Components/ChatArea/Home";
import CreateAccount from './Components/CreateAccount';
import Login from "./Components/Login";


function App() {
  return (
    <Router>
      <Routes>
        {/* <div className="App"> */}
        <Route path="/" element={<Home/>}/>
        <Route path="signUp" element={<CreateAccount/>}/>
        <Route path="login" element={<Login/>}/>
        {/* </div> */}
      </Routes>
    </Router>
    
  );
}

export default App;
