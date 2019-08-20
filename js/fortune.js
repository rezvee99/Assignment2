var fortunes = [
  "Welcome to my web Assignment"
]

var fortune1 = document.getElementById('fortune1');

fortuneGenerator();

var changeAfter = setInterval(fortuneGenerator,10000);


function fortuneGenerator() {
  fortune1.textContent = fortunes[randomGenarator()];
}

function randomGenarator() {
  return Math.floor(Math.random() * fortunes.length);
}
