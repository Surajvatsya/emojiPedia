import React from "react";
import Card from "./Card";
import Header from "./Header";
import emojipedia from "../emojipedia";
function func2(object) {
  return (
    <Card
      key={object.id}
      fig={object.emoji}
      name={object.name}
      mean={object.mean}
    />
  );
}
function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojipedia.map(func2)};</dl>
    </div>
  );
}

export default App;
