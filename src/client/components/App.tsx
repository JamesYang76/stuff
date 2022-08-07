import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Articles from "./Articles";
import ArticleDetails from "./ArticleDetails";

const App: React.FC = () => {
  return (
    <>
      <h1>Stuff exercise</h1>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </>
  );
}

export default App;
