import createTable from "./mini-library.js";

let columns = ["Name", "Email", "Phone"];
let data = [
  ["Rian", "rian@rianmfir.com", "0889947473724"],
  ["Muhammad", "muhammad@rianmfir.com", "0874764574545"],
  ["Firdaus", "firdaus@rianmfir.com", "0817343728423"],
  ["Rendy", "rendy@rianmfir.com", "0892372738239"],
];

createTable(columns, data);
