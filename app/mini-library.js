class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let openHead = "<thead><tr>";
    let closeHead = "</tr></thead>";
    data.forEach((d) => {
      openHead += `<th>${d}</th>`;
    });
    return openHead + closeHead;
  }

  createBody(data) {
    let openBody = "<tbody>";
    let closeBody = "</tbody>";

    data.forEach((d) => {
      openBody += "<tr>";
      for (let i = 0; i < d.length; i++) {
        openBody += `<td>${d[i]}</td>`;
      }
      openBody += "<tr>";
    });

    return openBody + closeBody;
  }

  render(element) {
    let table = "<table class='table table-dark table-striped'>" + this.createHeader(this.init.columns) + this.createBody(this.init.data) + "</table>";
    element.innerHTML = table;
  }
}

const createTable = (columns, data) => {
  const table = new Table({
    columns: columns,
    data: data,
  });
  const app = document.getElementById("app");
  table.render(app);
};

export default createTable;
