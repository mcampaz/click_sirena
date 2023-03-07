const express = require('express');
require('dotenv').config();

const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 8000;
const schema = require('./schema/schema.js');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: process.env.MODE_ENV === 'development'
}));

app.listen(port, console.log(`Sever running on port: ${port}`));

