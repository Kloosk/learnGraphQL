import mongoose from 'mongoose'
const {Schema} = mongoose;

const authorSchema = new Schema({
    name: String,
    age: Number
});

const Author = mongoose.model("Author",authorSchema);
export default Author;