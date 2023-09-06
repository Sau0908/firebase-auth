import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is a home page</h1>
      <br />
      <br />
      <Link to="/signup">Signup</Link>
      <br />
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
