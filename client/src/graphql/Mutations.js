import {gql} from '@apollo/client'

export const CREATE_AUTHOR_MUTATION = gql`
    mutation addAuthor($name: String! $age: Int!){
        addAuthor(
            name: $name
            age: $age
        ){
            id
        }
    }
`;