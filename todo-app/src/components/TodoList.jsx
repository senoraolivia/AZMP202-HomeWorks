import React from 'react'
import styles from './TodoList.module.css'

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className={styles.todoList}>
      {todos.map(todo => (
        <div key={todo.id} className={styles.todoItem}>
          <div className={styles.todoContent}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className={styles.checkbox}
            />
            <span className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}>
              {todo.text}
            </span>
            <span className={`${styles.timestamp} ${todo.completed ? styles.completed : ''}`}>
              {todo.timestamp}
            </span>
          </div>
          <div className={styles.actions}>
            <button className={styles.editButton}>
              <i className="fas fa-edit"></i>
            </button>
            <button 
              className={styles.deleteButton}
              onClick={() => onDelete(todo.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList

