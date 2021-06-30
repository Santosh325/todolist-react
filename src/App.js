import React, {useState, useEffect} from 'react';
import { Button , FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './Todo.js';
import { db } from './firebase';
import firebase from 'firebase';
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('👾 ','hello');
     db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
       setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
     })
  }, [input])
  
  // event handler
  const addTodos = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');
  }
  
  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
     
      <FormControl>
       <InputLabel > write todo here!</InputLabel>
       <Input type="text" value={input} onChange={ event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodos} variant="contained" color="primary">
  Add Todos
</Button>
      </form>

      <ul>
        {
         todos.map(todo => (
           <Todo todo={todo}/>
         ))
        }
     
      </ul>
    </div>
  );
}

export default App;
