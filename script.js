function* createIdGenerator() {
  let counter = 1;
  while (true) yield counter++;
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


const increase = document.getElementById("Increase");
const reduce = document.getElementById("Reduce");

function* newFontGenerator(font) {
  let changes = yield;
  while (true) {
    changes === "increase" ? font += 2 : font -= 2

    changes = yield font;
  }
}
const fontGenerator = newFontGenerator(16);
fontGenerator.next();
increase.addEventListener("click", () => {
  document.body.style.fontSize = `${fontGenerator.next("increase").value}px`;
});

reduce.addEventListener("click", () => {
  document.body.style.fontSize = `${fontGenerator.next("reduce").value}px`;
});