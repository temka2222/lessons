const addtodo = document.querySelector(".addtodo");
const todolist = document.querySelector(".todolist");
const input = document.querySelector(".addtodo input");
const add = document.querySelector(".addtodo button");

add.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }
  const container = document.createElement("div");
  const check = document.createElement("input");
  const div = document.createElement("div");
  const btn = document.createElement("button");
  const pic = document.createElement("img");
  pic.setAttribute("src", "download.png");
  pic.setAttribute("width", "30px");
  pic.setAttribute("height", "30px");

  todolist.append(container);
  container.append(check);
  container.append(div);
  div.innerHTML = input.value;

  container.classList.add("container");
  div.classList.add("todotext");

  check.setAttribute("type", "checkbox");

  container.append(btn);
  btn.append(pic);
  btn.classList.add("deletebtn");
  input.value = "";
  container.querySelector(".deletebtn").addEventListener("click", () => {
    container.remove();
  });

  check.addEventListener("change", () => {
    div.classList.add("checkbtn");
  });
});
