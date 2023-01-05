// Voor het hoofdstuk DOM
/* const clearStatus = (status) =>
  (document.getElementById("status").innerHTML = document.getElementById(
    "status"
  ).innerHTML =
    "");

const addStatus = (status) =>
  (document.getElementById("status").innerHTML =
    document.getElementById("status").innerHTML + "<p>" + status + "</p>"); */

/* const printAnimal = (animal) => {
  addStatus(
    `Name: ${animal.naam}; Type: ${animal.type}; Age: ${animal.leeftijd}`
  );
};

// als er een twee argument is "status", dan print hij het ook
const printAnimals = (animals, status) => {
  if (status) {
    addStatus(status);
  } else {
    clearStatus();
  }
  for (const animal of animals) {
    printAnimal(animal);
  }
  addStatus("-----");
};
*/

// Na het hoofdstuk DOM
const clearStatus = (status) =>
  (document.getElementById("status").innerHTML = document.getElementById(
    "status"
  ).innerHTML =
    "");

const addStatus = (status) =>
  (document.getElementById("status").innerHTML =
    document.getElementById("status").innerHTML + "<p>" + status + "</p>");

const addStatic = (stats) =>
  (document.getElementById("stats").innerHTML = document.getElementById(
    "stats"
  ).innerHTML =
    "");

const clearTableRows = ({ tablebody }) =>
  (document.getElemerntById(tablebody).innerHTML = "");

const createTableRow = () => {
  return document.getElementById("tr");
};
