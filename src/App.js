import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";

function App() {
  console.log('App executed');
  const [items, setItems] = useState([]);
  const counter = useRef(0);

  const title = 'TodoApp';

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(items => setItems(items))
  }, [])
  useEffect(() => {
    // console.log('items array changed!', items)
    console.log(counter);
  }, [items]);

  const add = (item) => {
    if(counter.current > 5) {
      alert('you reached the limit')
    } else {
      setItems([...items, item]);
      counter.current += 1;
    }
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
