function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <label className="task-item__label">
        <input
          type="checkbox"
          className="task-item__checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span
          className={
            task.completed
              ? 'task-item__text task-item__text--done'
              : 'task-item__text'
          }
        >
          {task.text}
        </span>
      </label>
      <button
        type="button"
        className="btn btn--delete"
        aria-label={`Удалить задачу: ${task.text}`}
        onClick={() => onDelete(task.id)}
      >
        Удалить
      </button>
    </li>
  );
}

export default TaskItem;
