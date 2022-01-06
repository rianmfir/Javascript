import createTable from "./mini-library.js";

const url = "https://jsonplaceholder.typicode.com/users";

let headerTable = ["ID", "Name", "Username", "Email", "Address", "Company"];
let dataUsers = [];

// Callback asynchronous
function createDataTable(url, getData) {
  let xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status === 200) {
      getData(JSON.parse(xhr.responseText));
      console.log("Success " + xhr.status);
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("error " + xhr.status);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const getData = (data) => {
  data.forEach((user) => {
    dataUsers.push([user.id, user.name, user.username, user.email, user.address.street + ", " + user.address.suite + ", " + user.address.city, user.company.name]);
  });
  createTable(headerTable, dataUsers);
};

createDataTable(url, getData);
