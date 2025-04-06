require('rootpath')(); // this must be first if you're using rootpath
const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('_middleware/error-handler'); // Make sure this path works

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// 👇 This must point to the router, and only if user.controller exports router
app.use('/users', require('./users/user.controller'));

// Error handler
app.use(errorHandler);

// Start the server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
