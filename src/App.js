import React from "react";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";
import "./App.css";

function App() {

  return (
    <>
      <h1>Tech News Website</h1>
      <Search />
      <Stories />
      <Pagination />
    </>
  );
}

export default App;
