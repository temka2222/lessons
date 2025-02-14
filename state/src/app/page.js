"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { use, useState } from "react";

export default function Home() {
  const [addText, setAddText] = useState("");
  const [toDoArr, setToDoArr] = useState([]);

  const handleInput = (event) => {
    setAddText(event.target.value);
  };
  const add = () => {
    setToDoArr((prev) => [...prev, addText]);
  };

  return (
    <div className={styles.container}>
      <h1>To-Do list</h1>

      <div className={styles.addtodo}>
        <input
          className={styles.inputext}
          value={addText}
          onChange={handleInput}
        />
        <button className={styles.addbutton} onClick={add}>
          Add
        </button>
      </div>
      <div className={styles.buttons}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className={styles.todolist}>
        {toDoArr.map((item, index) => {
          return (
            <div className={styles.list} key={index}>
              <input type="checkbox"></input>
              <p>{item}</p>
              <button>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
