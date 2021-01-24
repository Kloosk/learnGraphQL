import React from 'react';
import {CREATE_AUTHOR_MUTATION} from "./graphql/Mutations";
import {useMutation} from "@apollo/client";


const AddAuthor = () => {
    const [createAuthor,{error}] = useMutation(CREATE_AUTHOR_MUTATION);

    const handleSubmit = () => {
        createAuthor({
            variables: {
                name: "Łukasz",
                age: 21
            }
        });
        if(error){
            console.log(error);
        }
    };


    return (
        <div>
            <button onClick={handleSubmit}></button>
        </div>
    );
};

export default AddAuthor;