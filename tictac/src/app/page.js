"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [cells, setcells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setplayer] = useState(0);
  const [winner, setwinner] = useState("");
  const [indx, setindx] = useState(0);
  const hojil = "";
  const clickCell = (index) => {
    if (winner) {
      return;
    }

    if (cells[index] !== "") {
      return;
    }

    if (player == 0) {
      const newarr = [...cells];
      newarr[index] = "O";
      setcells(newarr);
      setplayer(1);

      setindx(index);
    }
    if (player == 1) {
      const newarr = [...cells];
      newarr[index] = "X";
      setcells(newarr);
      setplayer(0);
      setindx(index);
    }
  };
  const start = () => {
    const startArr = ["", "", "", "", "", "", "", "", ""];

    setcells(startArr);
    setwinner("");
  };
  useEffect(() => {
    if (
      (cells[0] == cells[1] && cells[1] == cells[2] && cells[2] !== "") ||
      (cells[3] == cells[4] && cells[4] == cells[5] && cells[5] !== "") ||
      (cells[6] == cells[7] && cells[7] == cells[8] && cells[8] !== "") ||
      (cells[0] == cells[3] && cells[3] == cells[6] && cells[6] !== "") ||
      (cells[1] == cells[4] && cells[4] == cells[7] && cells[7] !== "") ||
      (cells[2] == cells[5] && cells[5] == cells[8] && cells[8] !== "") ||
      (cells[2] == cells[4] && cells[4] == cells[6] && cells[6] !== "") ||
      (cells[0] == cells[4] && cells[4] == cells[8] && cells[8] !== "")
    ) {
      setwinner(cells[indx]);
    }
    let NoWinner = cells.filter((element) => {
      return element == "";
    });

    if (NoWinner.length == 0) {
      setwinner("NO WINNER");
    }
  }, [cells]);

  return (
    <div className={styles.game}>
      <div className={styles.container}>
        {cells.map((element, index) => {
          return (
            <div
              className={styles.cell}
              key={index}
              onClick={() => clickCell(index)}
            >
              {element}
            </div>
          );
        })}
      </div>
      <button onClick={() => start()}>start</button>
      <div> WINNER: {winner}</div>
    </div>
  );
}
