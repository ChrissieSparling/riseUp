import { useState, useEffect } from 'react'

const Test = () => {
  const [todos, setTodos] = useState([])
  const [singleTodo, setSingleTodo] = useState({})
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todo list')));
  
  }, [])
  console.log(todos)


  const handleInputChange = e => {
    e.preventDefault();
    console.log('you\'re typing', e.target.name, e.target.value)
    setSingleTodo({
      ...singleTodo,
      [e.target.name]: e.target.value
    })
  }

  const saveTodo = e => {
    e.preventDefault();
    // setTodos(localStorage.getItem('todo list'));
    todos.push(singleTodo);
    localStorage.setItem('todo list', JSON.stringify(todos));
    document.querySelector('form').reset();
  }

  return (
    <div>
      <form>
        <input name="body" onChange={handleInputChange} type='text'></input>
        <button onClick={saveTodo}>Save it</button>
      </form>


      {!todos[0] ? <h1 className="nothing-to-show">No Todos to display!</h1>
       : (todos.map(oneTodo=>{
        return(
          <h1 className="nothing-to-show">{oneTodo.body}</h1>
        )
    }))}

    </div>
  )
}

export default Test