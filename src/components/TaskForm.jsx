import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = text.trim();

    if (trimmed === '') {
      setError('Введите текст задачи');
      return;
    }

    onAdd(trimmed);
    setText('');
    setError('');
  };

  const handleChange = (event) => {
    setText(event.target.value);
    if (error) setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="task-form__row">
        <input
          type="text"
          className="task-form__input"
          placeholder="Новая задача..."
          aria-label="Текст новой задачи"
          value={text}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn--primary">
          Добавить
        </button>
      </div>
      {error && <p className="task-form__error">{error}</p>}
    </form>
  );
}

export default TaskForm;
