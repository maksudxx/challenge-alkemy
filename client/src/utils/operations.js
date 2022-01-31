module.exports = {
  createEntry: async ({ entry }) => {
    let body = {entry}
    await fetch("http://localhost:3001/operations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      alert('Entries added successfully')
  },

  getData: () => {
    //console.log("entro");
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://localhost:3001/operations`, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.response);
      }
    };
  },
};
