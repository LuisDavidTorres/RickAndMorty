function Header() {
  return (
    <div className="bg-black text-white">
      <header className="bg-black text-white p-4">
        <section className="flex justify-between">
          <h1 className="font-bold">Rick and Morty</h1>
          <input className="text-black"></input>

          <ul className="flex flex-row gap-8">
            <li><a href="/#">Inicio</a></li>

            <li><a href="/#">About</a></li>

            <li><a href="/#">About</a></li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default Header;
