import Product from './Product/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Product title="iphone" image="/01.jpg" price="1,999"/>
      <Product title="samsung" image="/02.jpg" price="1,499"/>
      <Product title="xiaomi" image="/03.jpg" price="999"/>
    </div>
  );
}

export default App;
