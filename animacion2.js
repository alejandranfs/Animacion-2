let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  calamardo:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c45e59c-2a89-461a-9db8-e7d6d56b462b/dcrx7dp-8d949057-8463-46da-8aaf-b27a7c5d0b46.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNmM0NWU1OWMtMmE4OS00NjFhLTlkYjgtZTdkNmQ1NmI0NjJiXC9kY3J4N2RwLThkOTQ5MDU3LTg0NjMtNDZkYS04YWFmLWIyN2E3YzVkMGI0Ni5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9HHEux8Y1PeM_BVp8OvU4P2pj7s-AzVNkprvnSwqQC0",
  patricio:
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png",
    bobesponja:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77a638c2-9d34-4f8d-9aef-edb8d196b304/d6f9o5c-4fbb1e0d-05a5-480d-83c3-b343d2c615b1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzdhNjM4YzItOWQzNC00ZjhkLTlhZWYtZWRiOGQxOTZiMzA0XC9kNmY5bzVjLTRmYmIxZTBkLTA1YTUtNDgwZC04M2MzLWIzNDNkMmM2MTViMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vRMjRaKk-Acha5ptnjHLgrf-IzUxMVhIEyh4-BZRFG0"
};
let x = 50;
let y = 300;
// let dX = 5;
// let dY = -2;
let vX = 5;
let v0Y = -40;
let aY = 2;
let t = 0;
let x2 = 10;
let dX2 = 5;
let y2 = 200;
let dy2 = 5;

function draw(images) {
  t += 1;
  x = 0 + vX * t;
  y = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  x2 = x2 + dX2;
  y2 = y2 - dy2;
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(images.patricio, x, y, 90, 90);
  ctx.drawImage(images.bobesponja, 160, 150, 100, 100);
  ctx.drawImage(images.calamardo, x2, y2, 220, 180);
  

}
// La variable images contiene las imagenes cargadas
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);
  //   ctx.drawImage(images.soccerBall, 200, 20, 30, 30);
  //   ctx.drawImage(images.yoda, 200, 0, 200, 400);
}
// la funcion run se ejecuta cuando las imagenes acaban de cargar.
loadImages(sources, run);

