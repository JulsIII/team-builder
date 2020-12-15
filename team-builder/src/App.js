import logo from './logo.svg';
import React, {useState} from "react";
import Form from "./components/Form";
import './App.css';
import TeamList from "./components/TeamList";

const defaultValues = {
  username: "",
  email: "",
  role: "",
};

function App() {
  //Values of the form
  const [formValues, setFormValues] = useState(defaultValues);
  //Storing the values from the form
  const [savedFormInfo, setSavedFormInfo] = useState([]);
 //The function to handle the onChange inside of the form
 const change = (evt) => {
  //Turns the evt.target(The place we are interacting with on the form )
  //Into something a bit more usable
  const { name, value } = evt.target;
  //sets the current state of form based off from what is in the form
  setFormValues({ ...formValues, [name]: value });
};
 //Function for submitting the data to state.
 const submit = (evt) => {
  //Prevents the default behavious of submit which is reloading the page
  evt.preventDefault();
  //packaging an easy to use payload to put onto state
  const newData = {
    name: formValues.name.trim(),
    email: formValues.email.trimEnd(),
    role: formValues.role.trimEnd(),
  };
  //adding the data to state
  setSavedFormInfo([...savedFormInfo, newData]);
  setFormValues(defaultValues);
};
   return (
    <div className="App">
      <TeamList tList={savedFormInfo} />
      <Form formValues={formValues} change={change} submit={submit}/>
    </div>
  );
}

export default App;
