import React from "react";
function SearchBar({searchTerm, setSearchTerm}) {
    return (
      <form class="search">
      <div>
        <input type="text" 
        placeholder="search" 
        class="form-control m-auto" 
        name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
        <button class="btn btn-light"> search</button>
      </div>
      </form>
    );
}
export default SearchBar