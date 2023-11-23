"use strict";

const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
let counter = document.querySelector("#counter");

let counterValue = 0;

function updateValue() {
  counter.textContent = counterValue;
}

function increase() {
  counterValue++;
  updateValue();
}

function decrease() {
  counterValue--;
  updateValue();
}

function reset() {
  counterValue = 0;
  updateValue();
}

btnIncrease.addEventListener("click", function (e) {
  e.preventDefault();
  increase();
});

btnDecrease.addEventListener("click", function (e) {
  e.preventDefault();
  decrease();
});

btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  reset();
});
