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

//To string funcit
const toString = (myAnimal) => {
  return `Name:  ${myAnimal.naam}, type: ${myAnimal.type}, leeftijd: ${myAnimal.leeftijd}`;
};

//printAllAnimals functie (zo kan je twee keer printen met maar één oproeping van de functie ipv twee keer)
const printAllAnimals = () => {
  addStatus(toString(animal));
  addStatus(toString(animal2));
};

printAllAnimals();

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
  return (resultaat = (animal.leeftijd + animal2.leeftijd) / 2);
};

//Gemiddelde leeftijd berekenen en tonen op site door gebruik te maken van een functie en korter (manier 3)
const shortGetaverage = () => (animal.leeftijd + animal2.leeftijd) / 2;

addStatus(`Gemiddelde leeftijd: ${shortGetaverage()}`);

// Berekent welk dier het oudste is door een if structuur in een functie
const getOldestAnimal = (first, second) => {
  let result;
  if (first.leeftijd > second.leeftijd) {
    result = first;
  } else if (first.leeftijd < second.leeftijd) {
    result = second;
  } else {
    result = null;
  }
  return result;
};

const result = getOldestAnimal(animal, animal2);

// Korte IF structuur
const myNextResult = addStatus(
  `${
    result === null
      ? "Both animals are equally old"
      : `Oldest animal is ${result.naam}`
  }`
);
