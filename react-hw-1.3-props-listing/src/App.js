import './App.css';
import Listing from './components/Listing';
import data from './etsy.json'

function App() {
  return (
    <Listing items={data} />
  );
}

export default App;
