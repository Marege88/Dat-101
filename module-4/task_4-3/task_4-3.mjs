"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const txtRectWidth = document.getElementById("txtRectWidth");
const txtRectHeight = document.getElementById("txtRectHeight");
const txtTask1Output = document.getElementById("txtTask1Output");
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");

cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
    const width = Number(txtRectWidth.value);
    const height = Number(txtRectHeight.value);

    const area = width * height;
    const circumference = 2 * (width + height);

    txtTask1Output.textContent =
    "circumference = " + circumference + ", Area = " + area;

}
//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const task2Words = [];

const txtTask2Words = document.getElementById("txtTask2Word");
const txtTask2Output = document.getElementById("txtTask2Output");

txtTask2Words.addEventListener("keypress", txtTask2WordKeyPress);
function txtTask2WordKeyPress(event) {
  if (event.key === "Enter") {
    const word = txtTask2Word.value;
    task2Words.push(word);
    txtTask2Output.textContent = "number of words = " + task2Words.length + ": " + task2Words.join(", ");

    txtTask2Word.value = "";
  }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const checkboxes = document.getElementsByName ("chkTask3");

const txtTask3Output = document.getElementById("txtTask3Output");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");

cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

function cmbTask3CheckAnswerClick() {
  let selected = [];
  for(let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected.push(checkboxes[i].value);
    }
  }
  txtTask3Output.textContent = "selected: " + selected.join(", ");
}

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

for (let i = 0; i < CarTypes.length; i++) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "car";
  radio.value = CarTypes[i].value;

  const label = document.createElement("label");
  label.textContent = CarTypes[i].caption;

  radio.addEventListener("change", function() {
    txtTask4Output.textContent = "Du har valgt: " + CarTypes[i].caption;
  });
  divTask4Cars.appendChild(radio);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);
function selectTask5AnimalsChange() {
  const selectedText = selectTask5Animals.options[selectTask5Animals.selectedIndex].text;
  txtTask5Output.textContent = "Du har valgt: " + selectedText;
}

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for (let i = 0; i < GirlsNames.length; i++) {
  const option = document.createElement("option");
  option.value = GirlsNames[i];
  option.textContent = GirlsNames[i];

  selectTask6Girls.appendChild(option);
}

selectTask6Girls.addEventListener("change", selectTask6GirlsChange);
function selectTask6GirlsChange() {
  const selectedName = selectTask6Girls.value;

  txtTask6Output.textContent = "Du har valgt: " + selectedName;
}

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectMovieGenre = document.getElementById("selectMovieGenre");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

const txtMovieTitle = document.getElementById("txtMovieTitle");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");

for (let i = 0; i < MovieGenre.length; i++) {
  const option = document.createElement("option");
  option.value = MovieGenre[i];
  option.textContent = MovieGenre[i];
  selectMovieGenre.appendChild(option);
}
cmbAddMovie.addEventListener("click", cmbAddMovieClick);

function cmbAddMovieClick() {
  const title = txtMovieTitle.value;
  const genre = selectMovieGenre.value;
  const director = txtMovieDirector.value;
  const rate = txtMovieRate.value;

  const row = document.createElement("tr");

  const cellNr = document.createElement("td");
  const cellTitle = document.createElement("td");
  const cellGenre = document.createElement("td");
  const cellDirector = document.createElement("td");
  const cellRate = document.createElement("td");

  cellNr.textContent = tblMovies.rows.length;
  cellTitle.textContent = title;
  cellGenre.textContent = genre;
  cellDirector.textContent = director;
  cellRate.textContent = rate;

  row.appendChild(cellNr);
  row.appendChild(cellTitle);
  row.appendChild(cellGenre);
  row.appendChild(cellDirector);
  row.appendChild(cellRate);

  tblMovies.appendChild(row);
}
