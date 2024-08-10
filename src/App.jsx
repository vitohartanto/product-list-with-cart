import Lists from './components/Lists';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="bg-[#fcf8f5] h-screen pt-6">
      <h1 className="text-[#270f08] text-4xl font-bold ml-6 mb-4">Desserts</h1>
      <Lists />
      <Cart />
    </div>
  );
}

export default App;
