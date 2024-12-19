import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import FilterButtons from './components/FilterButtons'
import styles from './App.module.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        timestamp: new Date().toLocaleString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        })
      }
      setTodos([...todos, newTodo])
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearAll = () => {
    setTodos([])
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed
    if (filter === 'pending') return !todo.completed
    return true
  })

  const pendingCount = todos.filter(todo => !todo.completed).length

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <FilterButtons 
        onFilterChange={setFilter} 
        currentFilter={filter}
        onClearAll={clearAll}
      />
      <TodoList 
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <div className={styles.status}>
        You have <span className={styles.count}>{pendingCount}</span> pending todos
      </div>
    </div>
  )
}

export default App

