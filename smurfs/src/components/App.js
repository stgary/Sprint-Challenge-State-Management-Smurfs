import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Form from './Form';
import Smurfs from './Smurfs';
import { SmurfContext, FormContext } from '../contexts';

const initialFormValues = {
  name: '',
  age: '',
  height: ''
}

const initialSmurfs = []

function App() {

  const [smurfs, setSmurfs] = useState(initialSmurfs);
  const [formValues, setFormValues] = useState(initialFormValues);

  const getSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewSmurf = newSmurf => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        getSmurfs()
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

    const onInputChange = evt => {
      const name = evt.target.name
      const value = evt.target.value

      setFormValues({
        ...formValues,
        [name]: value 
      })
  }

  useEffect(() => {
    getSmurfs()
  }, [])

  const onSubmit = evt => {
    evt.preventDefault();
    const newSmurf = {
      name: formValues.name,
      age: formValues.age,
      height: formValues.height,
      id: uuid()
    }
    postNewSmurf(newSmurf)
  }

  return (
    <div className='container'>
      <header>
        <h1>Smurfs Sprint</h1>
      </header>
      <FormContext.Provider value={{ formValues, onInputChange, onSubmit }}>
        <Form />
      </FormContext.Provider>
      <div className='smurf-container'>
        {
          smurfs.map(smurf => {
            return (
              <SmurfContext.Provider value={{ smurf }}>
                <Smurfs key={smurf.id} />
              </SmurfContext.Provider>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
