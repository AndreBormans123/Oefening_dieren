const clearStatus = (status) =>
  (document.getElementById("status").innerHTML = document.getElementById(
    "status"
  ).innerHTML =
    "");

const addStatus = (status) =>
  (document.getElementById("status").innerHTML =
    document.getElementById("status").innerHTML + "<p>" + status + "</p>");

const printAnimals = (animals, status) => {
  if (status) {
    addStatus(status);
  } else {
    clearStatus();
  }
  for (const animal of animals) {
    printAnimals(animal);
  }
  addStatus("-----");
};
