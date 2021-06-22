const sectionCommodity = document.querySelector('.section__commodity');
const fotProducts = document.querySelector('.foto');
const price = document.querySelector('.price');
const buton = document.querySelector('.buton');
const name = document.querySelector('.name');

const el = document.querySelector('.products');

const item = [
  { src: "./img/curso1.jpg", alt: "foto", class_price: 212.41, name: "Książka", id: 1},
  { src: "./img/curso2.jpg", alt: "foto", class_price: 122.09, name: "Kwiaty", id: 2},
  { src: "./img/curso3.jpg", alt: "foto", class_price: 213.87, name: "Gitara", id: 3},
  { src: "./img/curso2.jpg", alt: "foto", class_price: 239.45, name: "Ebook", id: 4},
  { src: "./img/curso3.jpg", alt: "foto", class_price: 165.39, name: "Kaktus", id: 5},
  { src: "./img/curso1.jpg", alt: "foto", class_price: 213.78, name: "Instrument", id: 6},
  { src: "./img/curso3.jpg", alt: "foto", class_price: 237.45, name: "AudioEbook", id:7},
  { src: "./img/curso1.jpg", alt: "foto", class_price: 125.09, name: "Roślinka", id: 8},
  { src: "./img/curso2.jpg", alt: "foto", class_price: 275.08, name: "Mandolina", id: 9},
];

for (let i = 0; i < item.length; i++)
{
  let div = document.createElement('div');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let button = document.createElement('button');
  let h4 = document.createElement('h4');
  
  div.classList.add('section__commodity');
  img.classList.add('foto');
  img.src = item[i].src;
  img.alt = item[i].alt;
  h3.innerText = item[i].class_price;
  button.classList.add('buton');
  button.id = '1';
  button.innerText = 'KUP';
  h4.classList.add('name');
  h4.innerText = `${item[i].name}`;
  
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(button);
  div.appendChild(h4);
  
  el.appendChild(div); 
}// <div class="section__commodity">
  //       <img class="foto" src=${item[i].src} alt="foto">
  //       <h3 class="price">${item[i].class_price}</h3>
  //       <button class="buton" id=${item[i].id}>KUP</button>
  //       <h4 class="name">${item[i].name}</h4>
  // </div>