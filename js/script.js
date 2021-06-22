const sectionCommodity = document.querySelector('.section__commodity');
const fotProducts = document.querySelector('.foto');
const price = document.querySelector('.price');
const buton = document.querySelector('.buton');
const name = document.querySelector('.name');

const el = document.querySelector('.products');

const item = [
  { src: "./img/curso2.jpg", alt: "foto", },
  { src: "./img/curso2.jpg", alt: "foto", },
  { src: "./img/curso2.jpg", alt: "foto", },
];

for (let i = 0; i < item.length; i++)
{

  el.innerHTML += ` 
  
  <div class="section__commodity">
        <img class="foto" src="./img/curso2.jpg" alt="foto">
        <h3 class="price">510 $</h3>
        <button class="buton" id="1">KUP</button>
        <h4 class="name">Jabłko</h4>
  </div>
  
  `
}