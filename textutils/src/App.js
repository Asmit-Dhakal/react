import './App.css';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar1 title="Home"/>
<Navbar2/> 
<TextForm heading="Enter the Heading"/>
</>
  );
} 

export default App;
