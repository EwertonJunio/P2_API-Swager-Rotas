// models/index.js
const connectToDatabase = require('./db'); // Corrigido o caminho

const port = process.env.PORT || 3000;

connectToDatabase().then(() => {
    console.log(`App rodando na porta: ${port}`);
    // app.listen(port, () => {
    //   console.log(`App rodando na porta: ${port}`);
    // });
});