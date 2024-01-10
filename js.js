"use strict";

const btn_1 = document.querySelector(".btn-1");
const loading = document.querySelector(".loading");
const card = document.querySelector(".card");
const cardText = document.querySelector(".card-text");
const cardImg = document.querySelector(".card-img-top");

const food = [
  { name: "Пельмеши" },
  { name: "Борщ" },
  { name: "Сладости" },
  { name: "Котлетки с макарошками" },
  { name: "Котлетки с пюрешкой" },
  { name: "Пожуй говна" },
];

let random = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
};

setTimeout(function () {
  let x = random(1, 6);
  loading.style.opacity = 0;
  loading.style.zIndex = -1;
  card.style.opacity = 1;
  card.style.zIndex = 1;
  cardText.textContent = food[x - 1].name;
  cardImg.src = `${x}.jpg`;
}, 2000);
