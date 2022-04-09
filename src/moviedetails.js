import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

export default function Moviedetails() {
  const { id } = useParams();
  const GET_MOVIES = gql`
  query{
  movie(id:"5ec2caaaa0f98451a25d1429"){
  name
  actor{
    name
    age
  }
}
}

  `;
  const { loading, error, data } = useQuery(GET_MOVIES);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{error.message}</pre>;


    return (
      <div>
      <h2>Movie Details for </h2>
     {data.movie.map((movie) => (
        <ul>
          <li>{movie.name}</li>
        </ul>
      ))}
      </div>
    )
  }
