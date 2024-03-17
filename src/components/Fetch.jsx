import { useEffect, useState } from "react";
import Card from "./Card";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-4 md:p-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-1 lg:mx-1 justify-items-center">
      {data.results &&
        data.results.map((info) => <Card key={info.id} info={info}></Card>)}
    </div>
  );
}

export default Fetch;
