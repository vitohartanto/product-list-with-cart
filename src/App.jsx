import Lists from './components/Lists';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="bg-[#fcf8f5] h-full pt-6 pb-6">
      <h1 className="text-[#270f08] text-4xl font-bold ml-6 mb-6">Desserts</h1>
      <Lists />
      <Cart />
    </div>
  );
}

export default App;
