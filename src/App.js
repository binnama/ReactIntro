import './App.css';
import ProductItem from './components/ProductItem';

const poductList = [
  { id: 1, title: "Blaser R93"},
  { id: 2, title: "Blaser F5"},
  { id: 3, title: "Blaser R8 Proffesional Succsess"}
]

function App() {
  return (
    <div className="App">
      <h1>A cool headline</h1>
      <h2>Some fancy text</h2>
      {poductList.map((product) => (
        <ProductItem key={product.id} title={product.title}/>
      ))}
    </div>
  );
}

export default App;
