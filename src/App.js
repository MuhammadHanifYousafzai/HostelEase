
import './App.css';
import About from './pages/About';
import Form from './pages/Form';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Hostelreg from './pages/Hostelreg';
import Hostelslist from './pages/Hostelslist';


function App() {
  return (
    <>
    <Hostelslist/>
    <About/>
    <Form/>
    <Login/>
    <Signup/>
    <Hostelreg/>
    <div className="App">

    </div>
    </>
      
  );
}

export default App;