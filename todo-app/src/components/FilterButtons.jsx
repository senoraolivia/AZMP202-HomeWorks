import React from 'react'
import styles from './FilterButtons.module.css'

function FilterButtons({ onFilterChange, currentFilter, onClearAll }) {
  return (
    <div className={styles.filterButtons}>
      <button
        className={`${styles.filterButton} ${styles.all} ${currentFilter === 'all' ? styles.active : ''}`}
        onClick={() => onFilterChange('all')}
      >
        All Todos
      </button>
      <button
        className={`${styles.filterButton} ${styles.completed} ${currentFilter === 'completed' ? styles.active : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        All Completed Todos
      </button>
      <button
        className={`${styles.filterButton} ${styles.pending} ${currentFilter === 'pending' ? styles.active : ''}`}
        onClick={() => onFilterChange('pending')}
      >
        All Pending Todos
      </button>
      <button
        className={`${styles.filterButton} ${styles.clear}`}
        onClick={onClearAll}
      >
        Clear All
      </button>
    </div>
  )
}

export default FilterButtons

