import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container'>
      <div className='sidebar'>
        <Header />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
