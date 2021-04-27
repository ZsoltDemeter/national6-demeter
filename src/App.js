import React, { useState } from "react";
import FormField from "./components/FormField";

function App() {
  return (
    <div className="container">
      <FormField title="FIRST NAME" />
      <FormField title="LAST NAME" />
      <FormField title="EMAIL" />
    </div>
  );
}

export default App;
