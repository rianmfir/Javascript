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

const table = new Table({
  columns: ["Name", "Email", "Phone"],
  data: [
    ["Rian", "rian@rianmfir.com", "0889947473724"],
    ["Muhammad", "muhammad@rianmfir.com", "0874764574545"],
    ["Firdaus", "firdaus@rianmfir.com", "0817343728423"],
  ],
});

const app = document.getElementById("app");
table.render(app);
