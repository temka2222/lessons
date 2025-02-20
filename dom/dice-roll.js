const button = document.querySelector("button");
const randomdice = document.querySelector(".randomdice");
const diceroll = document.querySelector(".dice-roll");
const dice = document.querySelector(".dice");
const pic1 = document.querySelector(".dice img");
const resetbtn = document.querySelector(".reset");

let randomnumber = 0;
let i = 1;

button.addEventListener("click", () => {
  randomnumber = Math.floor(Math.random() * 6) + 1;

  const div = document.createElement("div");
  diceroll.append(div);
  div.innerHTML = "Roll " + i.toString() + ":   " + randomnumber.toString();
  i++;
  const pic = document.createElement("img");
  // const pic1 = document.createElement("img");
  pic.setAttribute("src", `${randomnumber}.png`);
  pic.setAttribute("width", "50px");
  pic.setAttribute("height", "50px");

  pic1.setAttribute("src", `${randomnumber}.png`);
  pic1.setAttribute("width", "50px");
  pic1.setAttribute("height", "50px");
  pic1.classList.add("rand");
  dice.append(pic1);
  div.append(pic);
  resetbtn.addEventListener("click", () => {
    div.remove();
    pic1.remove();
  });
});
