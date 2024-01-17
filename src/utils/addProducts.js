import notebook from "../../db.json";
import itemT from "../templates/item.hbs";
import addHtml from "./addHtml";

const content = itemT(notebook.notebook);
const productsContainerLink = document.querySelector(".productsContainer");

console.log(notebook);
console.log(content);

addHtml(content, productsContainerLink);
