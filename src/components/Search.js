import { useState } from 'react';

const Search = ({setSearchTerm}) => {
  const [search, setSearch] = useState('');
  const handleSearchChange = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSearchChange}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={handleSearchChange}
        />
        <button className="btn btn-outline-success" type="button">Search</button>
      </form>
    </div>
  );
};

export default Search;
