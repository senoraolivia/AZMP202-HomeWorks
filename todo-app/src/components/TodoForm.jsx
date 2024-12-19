import React, { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add your new todo"
        className={styles.input}
      />
      <button type="submit" className={styles.addButton}>
        ADD
      </button>
    </form>
  )
}

export default TodoForm

