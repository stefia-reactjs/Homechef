import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import RecipePage from "./assets/components/RecipePage.jsx";
import RecipeDetail from "./assets/components/RecipeDetail.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<RecipePage />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
