const sectionCommodity = document.querySelector('.section__commodity');
const fotProducts = document.querySelector('.foto');
const price = document.querySelector('.price');
const buton = document.querySelector('.buton');
const name = document.querySelector('.name');

const el = document.querySelector('.products');

const item = [
  { src: "./img/curso1.jpg", alt: "foto", class_price: 212.41, value: "gitara", name: "Książka", id: 1},
  { src: "./img/curso2.jpg", alt: "foto", class_price: 122.09, value: "gitara", name: "Kwiaty", id: 2},
  { src: "./img/curso3.jpg", alt: "foto", class_price: 213.87, value: "gitara", name: "Gitara", id: 3},
  { src: "./img/curso2.jpg", alt: "foto", class_price: 239.45, value: "gitara", name: "Ebook", id: 4},
  { src: "./img/curso3.jpg", alt: "foto", class_price: 165.39, value: "gitara", name: "Kaktus", id: 5},
  { src: "./img/curso1.jpg", alt: "foto", class_price: 213.78, value: "gitara", name: "Instrument", id: 6},
  { src: "./img/curso3.jpg", alt: "foto", class_price: 237.45, value: "gitara", name: "Książka", id:7},
  { src: "./img/curso1.jpg", alt: "foto", class_price: 125.09, value: "gitara", name: "Kwiaty", id: 8},
  { src: "./img/curso2.jpg", alt: "foto", class_price: 275.08, value: "gitara", name: "Gitara", id: 9},
];

for (let i = 0; i < item.length; i++)
{

  el.innerHTML += ` 
  
  <div class="section__commodity">
        <img class="foto" src=${item[i].src} alt="foto">
        <h3 class="price">${item[i].class_price}</h3>
        <button class="buton" id=${item[i].id}>KUP</button>
        <h4 class="name">${item[i].name}</h4>
  </div>
  
  `
}