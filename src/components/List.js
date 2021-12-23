import React from 'react';

function List({ items, removeItem, addItem }) {
  return (
    <section className="main">
      <input className="toggle-all"
             type="checkbox" />
      <ul className="todo-list">
        <li>
          <div className="view">
            <input className="toggle"
                   type="checkbox" />
            <label>item title</label>
            <button className="destroy" onClick={removeItem} />
          </div>
          <input className="edit" />
        </li>
      </ul>
    </section>
  )
}

export default List;
