import React from "react";
function ListItem({ title, onDelete }) {
    return (
      <div>
       
        <ul class="list-group todos mx-auto text-light delete">
          <li class="list-group-item d-flex justify-content-between align-items-center">
          {title}<button onClick={onDelete} class="btn btn-light">delete</button>
          </li>
        </ul>
      </div>
    );
  }
export default ListItem