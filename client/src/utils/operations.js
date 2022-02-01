module.exports = {
  createEntry: async ({ entry }) => {
    let body = {entry}
    console.log(body)
    await fetch("http://localhost:3001/operations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      alert('Entries added ')
  },

  getData: (setData) => {
    fetch('http://localhost:3001/operations')
       .then(res => res.json())
       .then((result)=>{
           setData(result)
       })
  },
};
