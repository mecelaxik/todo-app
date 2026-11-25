const FILTERS = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' },
];

function TaskFilter({ currentFilter, onChange }) {
  return (
    <div className="task-filter">
      {FILTERS.map((item) => (
        <button
          key={item.value}
          type="button"
          className={
            currentFilter === item.value
              ? 'btn btn--filter btn--filter-active'
              : 'btn btn--filter'
          }
          aria-pressed={currentFilter === item.value}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
