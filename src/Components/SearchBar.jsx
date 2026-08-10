const SearchBar = ({ search, setSearch }) => {
  return (
    <label className="search-field" htmlFor="course-search">
      <span>Search courses</span>
      <input
        id="course-search"
        type="search"
        placeholder="Search by course, instructor, or category"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </label>
  );
};

export default SearchBar;
