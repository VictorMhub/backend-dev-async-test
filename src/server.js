const app = require('./app');
const PORT = 8080;

app.listen(PORT, () => console.log(`it's alive on http://localhost${PORT}`));