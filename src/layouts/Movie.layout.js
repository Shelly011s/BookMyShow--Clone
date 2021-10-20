import React from "react";

//components
import MovieNavbar from "../components/Navbar/navbar.component";

const MovieLayout = (props) => {
  return (
    <>
    <MovieNavbar />
    {props.children}
    </>
  );
};

export default MovieLayout;
