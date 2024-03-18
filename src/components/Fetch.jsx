import { useEffect, useState } from "react";
import Card from "./Card";

function Fetch() {
  const [data, setData] = useState([]);
  const [Search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(Search);
  };

  const sought =
    data.results &&
    data.results.filter((person) =>
      person.name.toLowerCase().includes(Search.toLowerCase())
    );

  console.log(sought);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="flex justify-center my-5">
        <input
          onChange={searcher}
          placeholder=" Search"
          className="w-13 sm:w-80 h-8 md:w-80 lg:w-80 xl:w-80 2xl:w:80 border-2 rounded-lg"
          type="text"
        ></input>
      </div>
      <div className="p-4 md:p-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-1 lg:mx-1 justify-items-center">
        {sought && sought.length > 0 ? (
          sought.map((info) => <Card key={info.id} info={info}></Card>)
        ) : (
          <h6>No se ha encontrado ningun resultado</h6>
        )}
      </div>
    </div>
  );
}

export default Fetch;
