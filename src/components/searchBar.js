import React from "react";
function SearchBar() {
    return (
      <form class="search">
      <div>
        <input type="text" placeholder="search" class="form-control m-auto" name="search"></input>
        <button class="btn btn-light"> search</button>
      </div>
      </form>
    );
}
export default SearchBar