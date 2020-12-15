import logo from './logo.svg';
import React, {useState} from "react";
import Form from "./components/Form";
import './App.css';
import TeamList from "./components/TeamList";

const defaultValues = {
  ///// TEXT INPUTS /////
  username: "",
  email: "",
  ///// DROPDOWN /////
  role: "",
};

function App() {
  //Values of the form
  const [formValues, setFormValues] = useState(defaultValues);
  //Storing the values from the form
  const [teammates, setTeammates] = useState([]);

   return (
    <div className="App">
      <TeamList />
      <Form />
    </div>
  );
}

export default App;





      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}