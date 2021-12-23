import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  console.log('App executed');
  
  const [items, setItems] = useState([]);
  const [counter, setCount] = useState(1);
  const title = 'TodoApp';

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(items => setItems(items))
  }, [])


  const add = (item) => {
    setItems([...items, item]);
    setCount(counter + 1);
  }

  const remove = (item) => {
    setItems(items.filter(currentItem => currentItem !== item));
  }

  return (
    <section className="todoapp">
      <Header title={title} addItem={add}/>
      <List items={items} removeItem={remove} addItem={add}/>
      <Footer/>
    </section>
  )
}

export default App;
