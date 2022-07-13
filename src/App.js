import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="header">Login</h1>
      <div className="centerbox">
          
            <label>Username </label>
            <input type="text" name="uname" required />
          
            <label>Password </label>
            <input type="password" name="pass" required />
          
            <button className="button-link">Forgot password?</button>
          
            <button type="button">Login</button><br></br>
          
            <text>Not a member?</text>
            <a href="#"> SignUp</a>
          
      </div>
    </div>
  );
}

export default App;
