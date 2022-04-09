import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";


export default function Movies() {
const GET_MOVIES = gql`
query{
  movies {
    id
    name
  }
}
`;
const { loading, error, data } = useQuery(GET_MOVIES);

if (loading) return <p>Loading...</p>;
if (error) return <pre>{error.message}</pre>;



  return (
    <div>
    <h1>Movie List</h1>
      <ul>
        {data.movies.map((movies) => (
          <ul>
            <li><Link to="/moviedetails/5ec2caaaa0f98451a25d1429">{movies.name}</Link></li>
          </ul>
        ))}
      </ul>
    </div>
  )
}
