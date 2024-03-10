import "./SearchBar.css";

export default function SearchBar() {
  return (
    <>
      <div className="search-container">
        <img className="search-icon" src="./search.png" alt="search icon" />
        <input placeholder="Search..." type="search" aria-label="Search" />
      </div>
    </>
  );
}
