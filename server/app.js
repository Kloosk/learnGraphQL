import express from 'express';
import {graphqlHTTP} from 'express-graphql';

import mongoose from 'mongoose';
import schema from './schema/schema.js';


const app = express();

mongoose.connect('', { useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => {
        throw new Error(err)
    })
;

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,() =>{
   console.log("Working on port: 4000");
});