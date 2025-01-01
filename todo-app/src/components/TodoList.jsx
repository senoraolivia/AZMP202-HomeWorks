import React, { useState } from 'react'
import styles from './TodoList.module.css'
import { FaEdit } from "react-icons/fa"
import { BsFillTrash3Fill } from "react-icons/bs"
import Modal from 'react-modal'

function TodoList({ todos = [], onToggle, onDelete, onEdit }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)
  const [editText, setEditText] = useState('')

  const openModal = (todo) => {
    setEditingTodo(todo)
    setEditText(todo.text)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setEditingTodo(null)
    setEditText('')
  }

  const handleEdit = () => {
    if (editingTodo && onEdit) {
      onEdit(editingTodo.id, editText)
    }
    closeModal()
  }

  if (!Array.isArray(todos) || todos.length === 0) {
    return <div className={styles.emptyList}>No todos found. Add a new todo to get started!</div>
  }

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
            <button className={styles.editButton} onClick={() => openModal(todo)}>
              <FaEdit />
            </button>
            <button 
              className={styles.deleteButton}
              onClick={() => onDelete(todo.id)}
            >
              <BsFillTrash3Fill />
            </button>
          </div>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Todo"
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
      >
        <h2>Edit Todo</h2>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className={styles.editInput}
        />
        <div className={styles.modalButtons}>
          <button onClick={handleEdit} className={styles.saveButton}>Save</button>
          <button onClick={closeModal} className={styles.cancelButton}>Cancel</button>
        </div>
      </Modal>
    </div>
  )
}

export default TodoList

