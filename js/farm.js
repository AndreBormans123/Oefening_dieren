//arrays
let animal = {
  naam: "Donald",
  type: "Duck",
  leeftijd: 5,
};

const animal2 = {
  naam: "Mickey",
  type: "Mouse",
  leeftijd: 5,
};

const animal3 = {
  naam: "Bobby",
  type: "hond",
  leeftijd: 9,
};

const animals = [];

//To string functie
const toString = (myAnimal) => {
  return `Name:  ${myAnimal.naam}, type: ${myAnimal.type}, leeftijd: ${myAnimal.leeftijd}`;
};

const fetchAnimals = async () => {
  const antwoord = await fetch("http://localhost:3000/games");
  const resultaat = await antwoord.json();
  animals.push(...resultaat);
};

const fetchAndRender = async () => {
  await fetchAnimals();
};

fetchAndRender();

const renderAnimals = () => {
  const animalsTable = document.getElementById("animalsTable");
  animals.forEach((animal) => {
    //higher order functie (een funtie die en andere functie als parameter krijgt)
    const tableRow = createTableRow();
    animalsTable.appendChild(tableRow);
  });
};

/* renderAnimals(); */

//printAllAnimals functie (zo kan je twee keer printen met maar één oproeping van de functie ipv twee keer)
const printAllAnimals = (chars) => {
  //Manier 3. ForEach gebruikt hier een andere functie
  animals
    .filter((animal) =>
      chars
        ? animal.naam.toLowerCase().includes(chars.toLowerCase()) // controleren of chars bestaat anders krijg je een foutmelding, heeft chars een waarde?
        : true
    ) // filtered, past nooit de orginele array aan.
    .forEach((animal) => {
      addStatus(toString(animal));
    });

  //Deze manier niet goed, te veel werk
  /*   addStatus(toString(animal));
  addStatus(toString(animal2)); */

  //Manier 1 met een loop, Dit wel een oude methode
  /* for (let i = 0; i < animals.length; i++) addStatus(toString(animals[i])); */

  //Manier 2 met een loop, dit is een modernere methode (Dit is hetzelfde als in python de for loop)
  /*  for (const dier of animals) {
    addStatus(toString(dier));
  } */
};

printAllAnimals(); //hier kan je een argument weer geven bv printAllAnimals("al"); en zo zal het filteren.

//Manier 1
/* addStatus(
  "Naam: " +
    animal.naam +
    " Leeftijd: " +
    animal.leeftijd +
    " Type: " +
    animal.type
);
 */
//Manier 2
/* addStatus(
  `Naam: ${animal2.naam}, Leeftijd: ${animal2.leeftijd}, Type: ${animal2.type}`
); */

//Gemiddelde leeftijd berekenen en tonen op site (manier 1)
const averageAge = (animal.leeftijd + animal2.leeftijd) / 2;
const averageText = `Average age: ${averageAge}`;

//Gemiddelde leeftijd berekenen en tonen op site door gebruik te maken van een functie (manier 2)
const getAverageAge = () => {
  return (resultaat =
    (animal.leeftijd + animal2.leeftijd / animal3.leeftijd) / 3);
};

//Gemiddelde leeftijd berekenen en tonen op site door gebruik te maken van een functie en korter (manier 3)
// als je meerdere data krijgt is deze manier niet meer goed
/* const shortGetaverage = () =>
  (animal.leeftijd + animal2.leeftijd + animal3.leeftijd) / 3;
 */

// dit is wel de juiste manier ookal hebt ge veel data enz
const shortGetaverage = () => {
  let som = 0; // met let werken, want we gaan straks variabele "som" een nieuwe waarde moeten geven, en met const gaat dat niet
  // Deze manier is jusit
  /* for (let i = 0; i < animals.length; i++) {
    som += animals[i].leeftijd;
  } */

  //Dit is de beste en korste manier. 1 lijn, anonieme functie
  animals.forEach((animal) => (som += animal.leeftijd));
  return (som / animals.length).toFixed(2); // Tofixed(2) rond af op twee decimalen na de komma
};

// Deze if structuur zorgt voor dat wanneer er geen dieren zijn dat er niks getoond word ipv een foutboodschap
// Manier 1
if (animals.length > 0) {
  //of (animals.length) --> Is ook juist
  addStatus(`Gemiddelde leeftijd: ${shortGetaverage()}`);
}

//Manier 2
/* addStatus(
  animals.length
    ? `Gemiddelde leeftijd: ${shortGetaverage()}`
    : "Er zijn geen dieren"
); */

// Berekent welk dier het oudste is door een if structuur in een functie
// Deze manier niet goed, als er te veel data is
/* const getOldestAnimal = (first, second) => {
  let result;
  if (first.leeftijd > second.leeftijd) {
    result = first;
  } else if (first.leeftijd < second.leeftijd) {
    result = second;
  } else {
    result = null;
  }
  return result;
}; */

// Deze manier wel goed
const getOldestAnimal = () => {
  let oudste = animals[0]; // je begint altijd met 0
  for (dier of animals) {
    if (dier.leeftijd > oudste.leeftijd) {
      oudste = dier;
    }
  }
  return oudste;
};

/* const result = getOldestAnimal(); */
addStatus(
  `Oldest animal: ${
    animals.length ? getOldestAnimal().naam : "Both animals are equally old"
  }`
);

// Korte IF structuur
/* const myNextResult = addStatus(
  `${
    result === null
      ? "Both animals are equally old"
      : `Oldest animal is ${result.naam}`
  }`
); */

// Sets a footer text using DOM
const setFooterText = (naam) => {
  const footerText = document.getElementById("footer-text");
  footerText.innerHTML = `Front end 2022 - ${naam}`;
};

setFooterText("Andre Bormans");
