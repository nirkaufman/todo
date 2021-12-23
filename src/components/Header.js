function Header({ title, addItem }) {

  const handleAddItem = (event) => {
    if(event.key === 'Enter') {
      addItem({ title: event.target.value, completed: false });
    }
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <input className="new-todo"
             onKeyDown={handleAddItem}
             placeholder="What needs to be done?"
             autoFocus />
    </header>
  )
}

export default Header;
