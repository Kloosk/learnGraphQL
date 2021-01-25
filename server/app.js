import express from 'express';
import {graphqlHTTP} from 'express-graphql';

import mongoose from 'mongoose';
import schema from './schema/schema.js';
import cors from 'cors';


const app = express();
const uri = "mongodb+srv://lukasz:madzia123@cluster0.llb2a.mongodb.net/graphqllearn?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => {
        throw new Error(err)
    })
;
app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,() =>{
   console.log("Working on port: 4000");
});