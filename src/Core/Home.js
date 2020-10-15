import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const name = useSelector((state) => state.name);
  const text = name ? (
    <h1>{name} is currently logged in</h1>
  ) : (
    <h1>Nobody is logged in</h1>
  );
  return <div>{text}</div>;
};

// async function bootstrapAppData() {
//   function getToken() {
//     return window.localStorage.getItem(token)
//   }

//   const token = await getToken()

//   return token
// }}

export default Home;
