/* let teller = 1;

let animals = [
  { naam: "Donald", type: "Duck", leeftijd: 5 },
  { naam: "Mickey", type: "Mouse", leeftijd: 5 },
  { naam: "Bobby", type: "hond", leeftijd: 7 },
];

const familyDuck = [
  { naam: "Quackmore Duck", type: "duck", leeftijd: 75 },
  { naam: "Hortense McDuck", type: "duck", leeftijd: 74 },
  { naam: "Donald Duck", type: "duck", leeftijd: 42 },
  { naam: "Thelma Duck", type: "duck", leeftijd: 41 },
  { naam: "Huey Duck", type: "duck", leeftijd: 11 },
  { naam: "Dewey Duck", type: "duck", leeftijd: 9 },
  { naam: "Louie Duck", type: "duck", leeftijd: 7 },
];

printAnimals(animals);

const adoptAnimal = () => {
  console.log("dier adopteren ...");
  const nieuwDier = {
    naam: `Bob-${teller}`,
    type: `Vogel-${teller}`,
    leeftijd: teller,
  };
  teller++; // doet teller + 1; dit is ook juist teller = teller + 1
  animals.push(nieuwDier); // voeg array achteraan toe
  // animal.push(nieuwDier) --> kan ook, maar de array wordt vanvoor geplaatst ipv achteraan
  // .unshift() neemt vanvoor een element weg --> geen parameter nodig
  // .pop() neemt van achter een element weg
  printAnimals(animals);
};

const adoptFamily = () => {
  console.log("familie adopteren ..");
  animal = [...animals, ...familyDuck];
  printAnimals(animal);
};

//Array destructuring
const downsizeFarm = () => {
  console.log("boerderij downsizen");
  const [overblijven1, overblijven2, ...rest] = animals;
  animals = [overblijven1, overblijven2];
  printAnimals(animals, "Deze dieren blijven over");
  printAnimals(rest, "Deze dieren verlieten de boerderij");
};

// events zijn voor later
document
  .querySelector("main > button:first-of-type")
  .addEventListener("click", adoptAnimal);
document
  .querySelector("main > button:nth-of-type(2)")
  .addEventListener("click", adoptFamily);
document
  .querySelector("main > button:last-of-type")
  .addEventListener("click", downsizeFarm);
 */

const adoptAnimal = async () => {
  const response = await fetch("http://localhost:3000/games", {
    method: "POST",
  });
  const dier = await response.json();
  addStatus(`Bedankt om ${dier.name} te adopteren`);
};

const addAnimal = () => {
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const age = parseInt(document.getAnimations("age").value);

  if (!name || type || age) {
    addStatusError("No empty values allowed for name, type and age");
    return;
  }

  clearStatus();
  const dier = { name, type, age };

  const antwoord = fetch("http://localhost:3000/games", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application.json",
    },
    body: JSON.stringify(dier),
  });

  addStatus(
    `Dit dier werd toegevoegd: ${dier.name}, en dat is een ${dier.type}`
  );
};

document
  .querySelector("#add-animal-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    addAnimal();
  });
