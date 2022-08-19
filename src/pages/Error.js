import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";

const Error = () => {
  return (
    <Card>
      <h1>404 Error! Page Not Found</h1>
      <Link to="/">
        <p style={{ marginLeft: "52vw", color: "red" }}>
          return back to safety!!
        </p>
      </Link>
    </Card>
  );
};

export default Error;
