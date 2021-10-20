//Higher Order Components
//Tranforms a component or a part of component into another Components
//adding  additional functionalities to existing components

import React from "react";
import { Route } from "react-router-dom";

//layouts
import DefaultLayout from "../layouts/Default.layout";


const DefaultHOC = ({ component: Component , ...rest}) =>{
  //component
  //props -> path exact

  return (
    <>
    <Route
    {...rest}

    component = {(props) => (
      <DefaultLayout>
       <Component {...props} />
      </DefaultLayout>
    )

    }
     />
    </>
  );

};
export default DefaultHOC;
