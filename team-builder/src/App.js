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
  
  const [formValues, setFormValues] = useState(defaultValues);
  
  const [savedFormInfo, setSavedFormInfo] = useState([]);

  const change = (evt) => {

  const { name, value } = evt.target;

  setFormValues({ ...formValues, [name]: value });
};
 
 const submit = (evt) => {
 
  evt.preventDefault();
  
  const newData = {
    name: formValues.name.trim(),
    email: formValues.email.trimEnd(),
    role: formValues.role.trimEnd(),
  };

  setSavedFormInfo([...savedFormInfo, newData]);
  setFormValues(defaultValues);
  
};

   return (
    <div className="App">
      <Form formValues={formValues} change={change} submit={submit}/>
      <TeamList tList={savedFormInfo} />
    </div>
  );
}

export default App;
