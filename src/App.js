import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const title = 'TodoApp';
  let items = [];

  const add = (item) => {
    items.push(item);
    console.log('add item');
  }

  const remove = (item) => {
    items = items.filter( currentItem => currentItem !== item );
    console.log('remove item');
  }

  return (
    <section className="todoapp">
      <Header title={title} />
      <List items={items} removeItem={remove} addItem={add} />
      <Footer />
    </section>
  )
}

export default App;
