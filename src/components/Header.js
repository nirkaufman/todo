import { useRef } from "react";

function Header({ title, addItem }) {
  const inputRef = useRef(null);
  
  const handleAddItem = (event) => {
    if(event.key === 'Enter') {
      addItem({ title: event.target.value, completed: false });
    }
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <input className="new-todo"
             ref={inputRef}
             onKeyDown={handleAddItem}
             placeholder="What needs to be done?"
             autoFocus />
    </header>
  )
}

export default Header;
