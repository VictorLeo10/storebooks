import React from "react";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Header from "./Components/Header/Header";

function App() {
  console.log(window);
  return (
    <div>
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
