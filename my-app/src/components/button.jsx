import { useState } from "react";
import User from "./user";
import Weather from "../pages/weather";
import "bootstrap/dist/css/bootstrap.min.css";


function FavoriteColor() {
  const [name, setName] = useState(".........");

  return (
    <div className="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
      <User/>
      <Weather />
      <h1>My name is {name}</h1>
      <button className="btn btn-outline-info" class="btn btn-primary me-2" onClick={() => setName("pragyan")}>pragyan</button>
      <button className="btn btn-outline-info" class="btn btn-primary me-2" onClick={() => setName("arav")}>arav</button>
      <button className="btn btn-outline-info" class="btn btn-primary me-2" onClick={() => setName("kritishma")}>kritishma</button>
    </div>
  );
}

export default FavoriteColor;