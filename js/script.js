let vize = document.getElementById("vize");
let final = document.getElementById("final");
let ortalama = document.getElementById("ortalama");
const btn = document.getElementById("solution");

const ortSolution = (x, y) => {
  return (x * 40) / 100 + (y * 60) / 100;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  x = vize.value;
  y = final.value;

  ortalama.value = ortSolution(x, y);

  if (+ortalama.value > 100) {
    alert("Siktir Lan!");
  }
});
