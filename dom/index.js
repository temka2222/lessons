// const Buttons = document.querySelectorAll(".buttons button");
// const valueText = document.querySelector("#value");
// let value = 0;
// Buttons[0].addEventListener("click", () => {
//   value--;
//   valueText.innerHTML = value;
// });
// Buttons[1].addEventListener("click", () => {
//   value++;
//   valueText.innerHTML = value;
// });
// Buttons[2].addEventListener("click", () => {
//   value = 0;
//   valueText.innerHTML = value;
// });

// const buttons = document.querySelectorAll(".buttons button");
// const valueText = document.querySelectorAll("#value");
// let value1 = 0;
// let value2 = 0;
// let value3 = 0;
// let id = 0;

// const startbutton = () => {
//   if (value1 == 0 && value2 == 0 && value3 == 0) {
//     const id1 = setInterval(() => {
//       value1++;
//       valueText[2].innerHTML = value1;
//       if (value1 == 60) {
//         value1 = 0;
//         value2++;
//         valueText[1].innerHTML = value2;
//       }
//       if (value2 == 60) {
//         value2 = 0;
//         value3++;
//         valueText[0].innerHTML = value3;
//       }
//     }, 1000);
//     id = id1;
//   }
// };
// const stopbutton = () => {
//   clearInterval(id);
// };

// buttons[0].addEventListener("click", startbutton);

// buttons[1].addEventListener("click", stopbutton);
// buttons[2].addEventListener("click", () => {
//   value1 = 0;
//   value2 = 0;
//   value3 = 0;
//   valueText[0].innerHTML = value1;
//   valueText[1].innerHTML = value2;
//   valueText[2].innerHTML = value3;
//   stopbutton();
// });
//bagsh
// const textElement = document.querySelector("#value");
// const startButton = document.querySelector("#start");
// const resetButton = document.querySelector("#reset");
// const stopButton = document.querySelector("#stop");
// let value = 0;
// let intervalId = 0;

// const formatTime = (startTime) => {
//   const hours = Math.floor(startTime / 3600)
//     .toString()
//     .padStart(2, "0");
//   const minutes = Math.floor((startTime % 3600) / 60)
//     .toString()
//     .padStart(2, "0");
//   const seconds = (startTime % 60).toString().padStart(2, "0");

//   return `${hours}:${minutes}:${seconds}`;
// };

// startButton.addEventListener("click", () => {
//   if (intervalId === 0) {
//     intervalId = setInterval(() => {
//       value += 1;
//       textElement.innerHTML = formatTime(value);
//     }, 1000);
//   }
// });

// stopButton.addEventListener("click", () => {
//   clearInterval(intervalId);
//   intervalId = 0;
// });

// resetButton.addEventListener("click", () => {
//   clearInterval(intervalId);
//   intervalId = 0;
//   value = 0;
//   textElement.innerHTML = value.toLocaleString();
// });
// const input = document.querySelector(".input");
// const tip = document.querySelectorAll(".tip div");
// const total = document.querySelector(".total");
// const reset = document.querySelector(".reset");

// let clickbutton = 0;
// const tipvalues = [5, 10, 15, 25, 35, 50, 65, 80];
// for (const i in tip) {
//   tip[i].innerHTML = tipvalues[i];
// }
// console.log(tip);

// for (const i in Array.from(tip)) {
//   console.log(tip[i]);
//   tip[i].addEventListener("click", () => {
//     if (clickbutton === 0) {
//       total.innerHTML = (input.value * tipvalues[i]) / 100;
//       clickbutton = 1;
//     }
//   });
// }

// reset.addEventListener("click", () => {
//   clickbutton = 0;
//   input.value = 0;
//   total.innerHTML = input.value;
// });
let winnerarr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const cell = document.querySelectorAll(".tictac div ");
const win = document.querySelector(".winner");
let clickcells = 0;
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    const firstCell = cell[winningCombos[i][0]].innerHTML;
    const secondCell = cell[winningCombos[i][1]].innerHTML;
    const thirdCell = cell[winningCombos[i][2]].innerHTML;

    if (
      firstCell === secondCell &&
      secondCell === thirdCell &&
      secondCell !== ""
    ) {
      win.innerHTML = firstCell;
    }
  }

  return null;
};

for (let i = 0; i < 9; i++) {
  cell[i].addEventListener("click", () => {
    if (winnerarr[i] === 0) {
      if (clickcells == 0) {
        cell[i].innerHTML = "x";
        clickcells = 1;
        winnerarr[i] = 1;
      } else {
        cell[i].innerHTML = "o";
        clickcells = 0;
        winnerarr[i] = 2;
      }
      checkWinner();
    }
  });
}
