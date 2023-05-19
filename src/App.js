import Product from './Product/Product';
import './App.css';

function App() {

  const allProducts = [
    {id: 1, title:"iphone", image:"01.jpg", price:"1,999"},
    {id: 2, title:"samsung", image:"02.jpg", price:"1,499"},
    {id: 3, title:"xiaomi", image:"03.jpg", price:"999"},
  ]

  return (
    <div className="App">
      <Product {...allProducts[0]}/>
      <Product {...allProducts[1]}/>
      <Product {...allProducts[2]}/>
    </div>
  );
}

export default App;
