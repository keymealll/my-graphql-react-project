import React from "react";
import { useParams } from "react-router-dom";

export default function Moviedetails() {
  const { id } = useParams();
    return (
        <h2>Movie Details for {id}</h2>
    )
  }
