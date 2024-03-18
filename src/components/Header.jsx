function Header() {
  return (
    <div className="bg-black text-white sm:text-sm md:text-base">
      <header className="bg-black text-white p-4">
        <section className="flex justify-between sm:flex text-sm sm:justify-between md:text-base gap-2">
          <h1 className="font-bold">Rick and Morty</h1>
          {/*<input className="text-black w-13 sm:w-80 h-6 md:w-80 lg:w-80 xl:w-80 2xl:w:80"></input>*/}
          <ul className="flex flex-row gap-5 sm:gap-8 md:gap-8 lg:gap-8">
            <li>
              <a href="/#">Personajes</a>
            </li>

            <li>
              <a href="/#">Ubicacióoes</a>
            </li>
            <li>
              <a href="/#">Episodios</a>
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default Header;
