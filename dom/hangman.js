const target = ["h", "e", "l", "l", "o"];
const word = document.querySelectorAll(".word div");
const char = document.querySelectorAll(".character button");
const remaining = document.querySelector(".remaining");
let check;
let r = 3;
remaining.innerHTML = r;
console.log(remaining.innerHTML);

for (let i = 0; i < char.length; i++) {
  check = 0;
  char[i].addEventListener("click", () => {
    char[i].disabled = true;
    for (j = 0; j < target.length; j++) {
      if (char[i].innerHTML === target[j]) {
        word[j].innerHTML = char[i].innerHTML;
        check = 1;
        if (j == target.length - 1) {
          alert("wow");
          word[j].innerHTML = "";
          r = 3;
          for (let i = 0; i < char.length; i++) {
            char[i].disabled = false;
          }
          for (let j = 0; j < word.length; j++) {
            word[j].innerHTML = "";
          }
        }
      }
    }

    if (check === 0) {
      r--;
      remaining.innerHTML = r;

      if (r === 0) {
        alert("game over");
        for (let i = 0; i < char.length; i++) {
          char[i].disabled = false;
        }

        for (let j = 0; j < word.length; j++) {
          word[j].innerHTML = "";
        }
        r = 3;
        remaining.innerHTML = r;
      }
    } else if (check === 1) {
      check = 0;
    }
  });
}
