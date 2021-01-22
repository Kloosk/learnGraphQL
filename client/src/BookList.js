import React from 'react';
import { gql,useQuery } from '@apollo/client';

const authors = gql`
  query Authors{
    id,
    name,
    age
  }
`;

const BookList = () => {
    const { loading, error, data } = useQuery(authors);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.authors.map(({  id, name, age }) => (
        <div key={id}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )};

export default BookList;