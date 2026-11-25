import TaskItem from './TaskItem.jsx';

const EMPTY_MESSAGES = {
  all: 'Задач пока нет. Добавьте первую!',
  active: 'Нет активных задач.',
  completed: 'Нет выполненных задач.',
};

function TaskList({ tasks, filter, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="task-list__empty">{EMPTY_MESSAGES[filter]}</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
