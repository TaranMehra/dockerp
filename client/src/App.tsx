import { useState, useEffect } from "react";
import "./App.css";

type ApiData = {
  name: string;
  instance: number;
};
function App() {
  const [data, SetData] = useState<ApiData>();

  useEffect(() => {
    fetch("http://72.61.240.214:4000/api/user")
      .then((res) => res.json())
      .then((data) => SetData(data))
      .catch((error) => {
        return console.error("Error fetching message ", error);
      });
  });

  return (
    <>
      <h1>Welcome to waheguru frontend</h1>
      <h2 className="read-the-docs">Name : {data?.name}</h2>
      <h2 className="read-the-docs">Instance : {data?.instance}</h2>
    </>
  );
}

export default App;
