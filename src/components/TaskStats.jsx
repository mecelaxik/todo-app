function TaskStats({ total, active }) {
  return (
    <div className="task-stats">
      <span>Всего задач: {total}</span>
      <span>Осталось выполнить: {active}</span>
    </div>
  );
}

export default TaskStats;
