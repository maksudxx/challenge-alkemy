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
  getCategory: (setCategory) => {
    fetch('http://localhost:3001/category')
       .then(res => res.json())
       .then((result)=>{
           setCategory(result)
       })
  },

  sumBalance: ({data}) => {
    const filterExpenses = data.filter((d) => d.cat_id == 2);
  const totalExpenses = filterExpenses.reduce(
    (sum, d) => parseInt(sum) + parseInt(d.op_amount),
    0
  );

  const filterEntries = data.filter((d) => d.cat_id == 1);
  const totalEntries = filterEntries.reduce(
    (sum, d) => parseInt(sum) + parseInt(d.op_amount),
    0
  );
  return totalEntries - totalExpenses;
  }


};
