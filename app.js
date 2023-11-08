"use strict";

//Imports
import { getNames, getSomeNames } from "./REST.js";
import * as ListRenderer from "./list_renderer.js";
import { NamesRenderer } from "./names_renderer.js";

//Variables
let names = [];
let someNames = [];
let someNamesList;
let showingAll = true;

//Eventlistener on loading window
window.addEventListener("load", startApp);

//Initial/start function
async function startApp() {
  console.log("app running!");

  names = await getNames();
  // console.log(names);

  // someNames = await getSomeNames();
  // console.log(someNames);

  createPaginationButtons();

  const namesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
  namesList.render();

  

  document.querySelector("#sort-name").addEventListener("click", () => showingAll ? namesList.sort("first_name"):someNamesList.sort("first_name"));

  document.querySelector("#pagination button#page-all").addEventListener("click", () => {
    namesList.render()
    showingAll = true;
  });
  // document.querySelector("#pagination button#page1").addEventListener("click", showPage1);
  // document.querySelector("#pagination button#page2").addEventListener("click", showPage2);
  // document.querySelector("#pagination button#page3").addEventListener("click", showPage3);
}

// async function showPageAll() {
//   names = await getNames();
//   const someNamesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
//   someNamesList.render();
// }

// async function showPage1() {
//   names = await getSomeNames(1, 5);
//   const someNamesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
//   someNamesList.render();
// }

// async function showPage2() {
//   names = await getSomeNames(2, 5);
//   const someNamesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
//   someNamesList.render();
// }

// async function showPage3() {
//   names = await getSomeNames(3, 5);
//   const someNamesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
//   someNamesList.render();
// }

//dette kan måske omskrives til en page_renderer.js klasse...?
function createPaginationButtons() {
  const pageSize = 25; //100 names vises pr side
  const totalPages = 1000 / pageSize; // = 10 sider/10 pages knapper

  const container = document.querySelector("#pagination"); // der hvor html btns indsættes

  // p tæller igennem totalPages antal gange (1000 / 100 = 10) og for hver gang indsættes en btn med eventlistener
  for (let p = 0; p < totalPages; p++) {
    const html = `<button id="page${p + 1}" style="margin: 4px">${p * pageSize + 1}-${p * pageSize + 25}</button>`;
    container.insertAdjacentHTML("beforeend", html);

    const button = container.lastElementChild;
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      showingAll = false;

      //sætter names global variabel til someNames og laver en ny instans af listRenderer som kalder...
      //sin egen render funktion der rydder listen og fylder den påny/pony
      console.log(`page: ${p + 1} clicked, showing: ${pageSize}`);
      someNames = await getSomeNames(p + 1, pageSize);
      someNamesList = ListRenderer.construct(someNames, "#names-table-body", NamesRenderer);
      someNamesList.render();
    });
  }
}
