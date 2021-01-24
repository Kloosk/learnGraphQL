import React,{useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {LOAD_BOOKS} from "./graphql/Queries";

const BookList = () => {
    const { loading, error, data } = useQuery(LOAD_BOOKS);

    useEffect(() => {
        console.log(data);
    },[data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.authors.map(({  id, name, age }) => (
        <div key={id}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    ))};

export default BookList;