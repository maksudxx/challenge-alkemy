const server = require('./src/app.js');
const { conn, Category } = require('./src/db.js');
const {createData} = require('./preloadData')
const {PORT} = process.env

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT || 3001, async () => {
    console.log('listening at port '+PORT); 
    const datos = await createData();
    const categoria = await Category.bulkCreate(datos.category)
    console.log('*****CATEGORIES CREATED')
  });
});
