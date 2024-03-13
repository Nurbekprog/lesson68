import styles from "./header.module.css";
import { useState } from "react";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <div className={styles.navbarHeader}>
        <h1>Todos </h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Service</li>
        </ul>
      </div>
      <header className={styles.header}>
        <form onSubmit={handleSubmit} className={styles.newTaskForm}>
          <input
            required
            placeholder="Add Todo"
            type="text"
            onChange={onChangeTitle}
            value={title}
          />
          <button>Add</button>
        </form>
      </header>
    </div>
  );
}
