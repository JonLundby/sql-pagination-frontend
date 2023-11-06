"use strict";

//Imports
import { getNames } from "./REST.js";
import * as ListRenderer from "./list_renderer.js";
import { NamesRenderer } from "./names_renderer.js";

//Variables
let names = [];

//Eventlistener on loading window
window.addEventListener("load", startApp);

//Initial/start function
async function startApp() {
  console.log("app running!");

  names = await getNames();
  console.log(names);

  const namesList = ListRenderer.construct(names, "#names-table-body", NamesRenderer);
  namesList.render();

  document.querySelector("#sort-name").addEventListener("click", () => namesList.sort("first_name"));
}
