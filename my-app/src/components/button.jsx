import { useState } from "react";



function FavoriteColor() {
  const [name, setName] = useState(".........");

  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={() => setName("pragyan")}>pragyan</button>
      <button onClick={() => setName("arav")}>arav</button>
      <button onClick={() => setName("kritishma")}>kritishma</button>
    </div>
  );
}

export default FavoriteColor;