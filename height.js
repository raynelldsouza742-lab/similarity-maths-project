
const burjkhalifa = 828;
const eifelltower = 330;
const silverbackGorilla = 1.65;
const giraffe = 5;
const pyramid = 138.65;
const dog = 0.62;
const mounteverest = 8848.86;
const kunwar = 1.85;

let input;

document.getElementById("mySubmit").onclick = function(){
  input = document.getElementById("height-input").value;
  input = Number(input);
  document.getElementById("myH3").textContent = `Your height is ${input}m`;
  let x = input * 100;
  let y = (input * 39.37) / 12;
  let z = input / 1000;
  let w = input * 1000;
  document.getElementById("cm").textContent = `Your height in centimetres is ${x}cm`;
  document.getElementById("feet").textContent = `Your height in feet is ${y.toFixed(1)} feet`;
  document.getElementById("km").textContent = `Your height in kilometres is ${z}km`;
  document.getElementById("mm").textContent = `Your height in millimetres is ${w}mm`;



  if (mounteverest>input) {
    let a = mounteverest/input;
    document.getElementById("mount-everest").textContent = `Mount Everest 🏔️ is ${a.toFixed(2)} times taller than you! (${mounteverest}m)`;
  } else if (mounteverest<input) {
    let a = input/mounteverest;
    document.getElementById("mount-everest").textContent = `Mount Everest 🏔️ is ${a.toFixed(2)} times smaller than you! (${mounteverest}m)`;
  } else {
    document.getElementById("mount-everest").textContent = `Your height is equal to that of Mount Everest! 🏔️ (${mounteverest}m)` ;
  }

  if (burjkhalifa>input) {
    let b = burjkhalifa/input;
    document.getElementById("burj-khalifa").textContent = `The Burj Khalifa 🇦🇪 is about ${b.toFixed(2)} times taller than you! (${burjkhalifa}m)`;
  } else if (burjkhalifa<input) {
    let b = input/burjkhalifa;
    document.getElementById("burj-khalifa").textContent = `The Burj Khalifa 🇦🇪 is about ${b.toFixed(2)} times smaller than you! (${burjkhalifa}m)`;
  } else {
    document.getElementById("burj-khalifa").textContent = `Your height is equal to that of the Burj Khalifa! 🇦🇪 (${burjkhalifa}m)`;
  }

  if (eifelltower>input) {
    let c = eifelltower/input;
    document.getElementById("eifell-tower").textContent = `The Eifel Tower 🇫🇷
    is about ${c.toFixed(2)} times taller than you! (${eifelltower}m)`;
  } else if (eifelltower<input) {
    let c = input/eifelltower;
    document.getElementById("eifell-tower").textContent = `The Eifel Tower 🇫🇷 is about ${c.toFixed(2)} times smaller than you! (${eifelltower}m)`;
  } else {
    document.getElementById("eifell-tower").textContent = `Your height is equal to that of the Eifel tower! 🇫🇷 (${eifelltower}m)`;
  }

  if (pyramid>input) {
    let d = pyramid/input;
    document.getElementById("giza").textContent = `The Great Pyramid of Giza 🇪🇬 is about ${d.toFixed(2)} times taller than you! (${pyramid}m)`; 
  } else if (pyramid<input) {
    let d = input/pyramid;
    document.getElementById("giza").textContent = `The Great Pyramid of Giza 🇪🇬 is about ${d.toFixed(2)} times smaller than you! (${pyramid}m)`;
  } else {
    document.getElementById("giza").textContent = `Your height is equal to that of the Great Pyramid of Giza! 🇪🇬 (${pyramid}m)`;
  }

  if (giraffe>input) {
    let e = giraffe/input;
    document.getElementById("giraffe").textContent = `A Giraffe 🦒 is about ${e.toFixed(2)} times taller than you! (${giraffe}m)`;
  } else if (giraffe<input) {
    let e = input/giraffe;
    document.getElementById("giraffe").textContent = `A Giraffe 🦒 is about ${e.toFixed(2)} times smaller than you! (${giraffe}m)`;
  } else {
    document.getElementById("giraffe").textContent = `Your height is equal to that of a giraffe! 🦒 (${giraffe}m)`;
  }

  if (silverbackGorilla>input) {
    let f = silverbackGorilla/input;
    document.getElementById("silverback-gorilla").textContent = `A Silverback Gorilla 🦍 is about ${f.toFixed(2)} times taller than you! (${silverbackGorilla}m)`;
  } else if (silverbackGorilla<input) {
    let f = input/silverbackGorilla;
    document.getElementById("silverback-gorilla").textContent = `A Silverback Gorilla 🦍 is about ${f.toFixed(2)} times smaller than you! (${silverbackGorilla}m)`;
  } else {
    document.getElementById("silverback-gorilla").textContent = `Your height is equal to that of a Silverback Gorilla! 🦍 (${silverbackGorilla}m)`;
  }

  if (dog>input) {
    let g = dog/input;
    document.getElementById("german-shepherd").textContent = `A German Shepherd 🐕 is about ${g.toFixed(2)} times taller than you! (${dog}m)`;
  } else if (dog<input) {
    let g = input/dog;
    document.getElementById("german-shepherd").textContent = `A German Shepherd 🐕 is about ${g.toFixed(2)} times smaller than you! (${dog}m)`;
  } else {
    document.getElementById("german-shepherd").textContent = `Your height is equal to that of a German Shepherd! 🐕 (${dog}m)`;
  }

   if (kunwar>input) {
    let h = kunwar/input;
    document.getElementById("Kunwar").textContent = `Kunwar Yoaab Jiwanmall 🥸 is about ${h.toFixed(2)} times taller than you! (${kunwar}m)`;
  } else if (kunwar<input) {
    let h = input/kunwar;
    document.getElementById("Kunwar").textContent = `Kunwar Yoaab Jiwanmall 🥸 is about ${h.toFixed(2)} times smaller than you! (${kunwar}m)`;
  } else {
    document.getElementById("Kunwar").textContent = `Your height is equal to Kunwar Yoaab Jiwanmaal! 🥸 (${kunwar}m)`;
  }
}
