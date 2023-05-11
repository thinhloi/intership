import './App.scss'
import './input.scss'
// import './components/TodoApp'
import { StyledInputText, Todo } from './components/Input'
import { StyledButton as Button } from './components/Buttons'
import { useState } from 'react';
import { Tabs } from './components/Tabs';
import { MdDeleteOutline } from "react-icons/md";
import { v4 } from 'uuid';

function App() {
  const storageTodo = JSON.parse(localStorage.getItem('todos'))

  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState(storageTodo || [])


  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  }

  const handleSubmit = () => {
    //Add textInput vào todos
    setTodos(prev => {
      const newTodo = [...prev, { id: v4(), name: textInput, isChecked: false }]
      localStorage.setItem('todos', JSON.stringify(newTodo))
      return newTodo
    })
    setTextInput('');

  }

  const handleChangeTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isChecked = !newTodo[index].isChecked;

    newTodo.sort((a, b) => (a.isChecked > b.isChecked ? 1 : -1));
    storageTodo[index] = {
      id: storageTodo[index].id,
      name: storageTodo[index].name,
      isChecked: !storageTodo[index].isChecked,
    };
    localStorage.setItem('todos', JSON.stringify(storageTodo));
    setTodos(newTodo);
  }

  const handleRemoveTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(newTodo));
    setTodos(newTodo);
  }

  const oldTodo = [...todos];
  const filtered = oldTodo.filter((obj) => !obj.isChecked)

  const found = oldTodo.find((obj) => obj.isChecked)

  const handleDeleteTodo = () => {
      const newTodo =[...filtered];
      localStorage.setItem('todos', JSON.stringify(newTodo))
      setTodos(newTodo)
  }
  return (
    <div className='container'>
      <h1 style={{ paddingBottom: '60px' }}>#todo</h1>
      <Tabs>
        <div label='All'>
          <div className='tab-content-header'>
            <StyledInputText
              value={textInput}
              type="text"
              placeholder='add details'
              onChange={onTextInputChange}
            />
            <Button
              text='Add'
              className='btn-primary btn-lg'
              onClick={handleSubmit}
            />
          </div>
          <div className='tab-content-body'>
            {Object.keys(todos).map((key, index) => (
              <Todo
                key={todos[key].id}
                id={todos[key].id}
                label={todos[key].name}
                checked={todos[key].isChecked}
                onChange={() => handleChangeTodo(index)}
                onClick={() => handleRemoveTodo(index)}
              />
            ))}
          </div>
        </div>
        <div label='Active'>
          <div className='tab-content-header'>
            <StyledInputText
              value={textInput}
              type='text'
              placeholder='add todo'
              onChange={onTextInputChange}
            />
            <Button
              text='Add'
              className='btn-primary btn-lg'
              onClick={handleSubmit}
            />
          </div>
          <div className='tab-content-body'>
            {Object.keys(todos).map((key, index) => {
              if (!todos[key].isChecked)
                {return (
                  <Todo
                    key={todos[key].id}
                    id={todos[key].id}
                    label={todos[key].name}
                    checked={todos[key].isChecked}
                    onChange={() => handleChangeTodo(index)}
                    onClick={() => handleRemoveTodo(index)}
                  />
                )} return null
            }
            )}
          </div>
        </div>
        <div label='Completed'>
          {found ? (
          <>
          <div className='tab-content-body'>
            {Object.keys(todos).map((key, index) => {
              if (todos[key].isChecked){
                return (
                  <Todo
                    showDeleteIcon ={true}
                    key={todos[key].id}
                    id={todos[key].id}
                    label={todos[key].name}
                    checked={todos[key].isChecked}
                    onChange={() => handleChangeTodo(index)}
                    onClick={() => handleRemoveTodo(index)}
                  />
                )} return null
            })}
          </div>
          <div className='tab-content-footer'>
            <Button
              className='btn-sm btn-danger'
              icon={<MdDeleteOutline />}
              text='Delete All'
              onClick={() => handleDeleteTodo()}
            />
          </div>
          </> ): (
              <>
              Nothing completed yet!!!
              </>
          )}
        </div>
      </Tabs>
    </div>
  )
}

export default App;
