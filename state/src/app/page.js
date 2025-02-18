"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { use, useState } from "react";
const n = 0;
export default function Home() {
  const [addText, setAddText] = useState("");
  const [toDoArr, setToDoArr] = useState([]);
  const [buttons, setbuttons] = useState("all");
  const handleInput = (event) => {
    setAddText(event.target.value);
  };
  const add = () => {
    if (addText !== "") {
      setToDoArr((prev) => [...prev, { task: addText, Completed: false }]);
      setAddText("");
    }
  };
  const deletebtn = (index) => {
    const newTodoArr = toDoArr.filter((element, i) => {
      return i !== index;
    });

    setToDoArr(newTodoArr);
  };
  const checkboxchange = (index) => {
    const updateTodo = [...toDoArr];
    updateTodo[index].Completed = !updateTodo[index].Completed;
    setToDoArr(updateTodo);
  };

  const filteredArr = toDoArr.filter((element) => {
    if (buttons == "all") {
      return true;
    }
    if (buttons == "active") {
      return element.Completed == false;
    }

    if (buttons == "completed") {
      return element.Completed == true;
    }
  });
  const completedArr = toDoArr.filter((item, index) => {
    return item.Completed == true;
  });
  const Taskmsg = () => {
    if (toDoArr.length == 0) {
      return <p style={{ color: "#6b7280" }}>No tasks yet. Add one above!</p>;
    }

    return (
      <div className={styles.taskmsg}>
        <p>{`${completedArr.length} of ${toDoArr.length} tasks completed`}</p>
        <button
          onClick={() => {
            const clearcompleted = toDoArr.filter((element, index) => {
              return element.Completed !== true;
            });
            setToDoArr(clearcompleted);
          }}
        >
          Clear completed
        </button>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <h1>To-Do list</h1>

      <div className={styles.addtask}>
        <input
          className={styles.inputtask}
          value={addText}
          placeholder={"Add a new task..."}
          onChange={handleInput}
        />
        <button className={styles.addbutton} onClick={add}>
          Add
        </button>
      </div>
      <div className={styles.buttons}>
        <button
          style={{ backgroundColor: buttons == "all" ? "#3C82F6" : "" }}
          onClick={() => setbuttons("all")}
        >
          All
        </button>
        <button
          style={{ backgroundColor: buttons == "active" ? "#3C82F6" : "" }}
          onClick={() => setbuttons("active")}
        >
          Active
        </button>
        <button
          style={{ backgroundColor: buttons == "completed" ? "#3C82F6" : "" }}
          onClick={() => {
            setbuttons("completed");
          }}
        >
          Completed
        </button>
      </div>
      <div className={styles.todolist}>
        {filteredArr.map((item, index) => {
          return (
            <div className={styles.list} key={index}>
              <input
                type="checkbox"
                checked={item.Completed}
                onChange={() => checkboxchange(index)}
              ></input>
              <div className={styles.listbtn}>
                <p className={item.Completed == true ? styles.checked : ""}>
                  {item.task}
                </p>
                <button
                  className={styles.button}
                  style={{ display: item.Completed == true ? "block" : "" }}
                  onClick={() => {
                    deletebtn(index);
                    ``;
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>{Taskmsg()}</div>
      <div className={styles.footer}>
        <p>Powered by</p>
        <p>Pinecone academy</p>
      </div>
    </div>
  );
}
