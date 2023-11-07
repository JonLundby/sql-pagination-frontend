"use strict";

//Imports
import { getNames, getSomeNames } from "./REST.js";
import * as ListRenderer from "./list_renderer.js";
import { NamesRenderer } from "./names_renderer.js";

//Variables
let names = [];
let someNames = [];

//Eventlistener on loading window
window.addEventListener("load", startApp);

//Initial/start function
async function startApp() {
  console.log("app running!");

  names = await getNames();
  console.log(names);

  // someNames = await getSomeNames();
  // console.log(someNames);

  const namesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
  namesList.render();

  document.querySelector("#sort-name").addEventListener("click", () => namesList.sort("first_name"));

  document.querySelector("#pagination button#page-all").addEventListener("click", showPageAll);
  document.querySelector("#pagination button#page1").addEventListener("click", showPage1);
  document.querySelector("#pagination button#page2").addEventListener("click", showPage2);
  document.querySelector("#pagination button#page3").addEventListener("click", showPage3);
}

async function showPageAll() {
  names = await getNames();
  const someNamesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
  someNamesList.render();
}

async function showPage1() {
  names = await getSomeNames(1, 5);
  const someNamesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
  someNamesList.render();
}

async function showPage2() {
  names = await getSomeNames(2, 5);
  const someNamesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
  someNamesList.render();
}

async function showPage3() {
  names = await getSomeNames(3, 5);
  const someNamesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
  someNamesList.render();
}

// function createPaginaitonButtons() {
//   const pageSize = 5;
//   const totalPages = 100 / pageSize;

//   const container = document.querySelector("#pagination");
//   for (let p = 0; p < totalPages; p++) {
//     const html = `<button id="page${p + 1}">${p * pageSize + 1}-${p * pageSize + 5}</button>`;
//     container.insertAdjacentHTML("beforeend", html);

//     const button = container.lastElementChild;
//     button.addEventListener("click", async (event) => {
//       event.preventDefault();
//       const names = await getSomeNames(p + 1, pageSize);
      
//     })
//   }
// }
