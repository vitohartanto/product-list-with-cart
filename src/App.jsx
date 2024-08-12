import Lists from './components/Lists';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="bg-[#fcf8f5] h-full pt-6 pb-6 lg:pt-12">
      <h1 className="text-[#270f08] text-4xl font-bold ml-6 mb-6 lg:ml-36  ">
        Desserts
      </h1>
      <div className="lg:flex lg:justify-center">
        <Lists />
        <Cart />
      </div>
    </div>
  );
}

export default App;
