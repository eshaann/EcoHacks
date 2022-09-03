import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <form>
        <label for = "username">Username</label>
        <br></br>
        <input type = "text" name = "username"></input>
        <br></br>
        <label for = "password">Password</label>
        <br></br>
        <input type = "password" name = "password"></input>
      </form>
    </div>
  );
}

export default App;
