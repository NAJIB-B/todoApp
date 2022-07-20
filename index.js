const submitButton = document.getElementById("submit");
const input = document.getElementById("input");
const output = document.getElementById("list");
const clear = document.getElementById("clear");

const addItem = function () {
  const theInput = input.value;
  if (!theInput) return;
  output.insertAdjacentHTML(
    "beforeend",
    `
    <li><p>${theInput}</p><button class= "done">Done</button>
    <button class ='delete'>x</button>
    </li>
    `
  );
  input.value = "";
};
submitButton.addEventListener("click", addItem);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addItem();
});
output.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    e.target.closest("li").remove();
  }
  if (e.target.classList.contains("done")) {
    const style = getComputedStyle(e.target.previousElementSibling);
    if (style.textDecoration === "line-through solid rgb(0, 0, 0)") {
      e.target.previousElementSibling.style.textDecoration = "none";
    } else {
      e.target.previousElementSibling.style.textDecoration = "line-through";
    }
  }
});
clear.addEventListener("click", function (e) {
  e.preventDefault();
  output.innerHTML = "";
});
