import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Article />
      <Comment />
    </div>
  );
}

export default App;


//The minimum requirement for a React Component
//is that it must be a function that starts with a 
//capital letter and returns JSX//