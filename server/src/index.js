const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const { error } = require('./app/middlewares/error');
const routes = require('./routes');

dotenv.config({ path: '.env.local' });
const PORT = process.env.PORT || 5000;
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

routes(app);

app.use(error);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
