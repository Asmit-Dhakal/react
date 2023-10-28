import logo from './logo.svg';
import './App.css';
let name='Ak47';

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Deserunt temporibus suscipit voluptatum saepe fuga!
          Repellat veritatis similique voluptate asperiores
           iste quasi sit hic molestias, aperiam accusamus 
           odit ipsam porro architecto mollitia placeat
            temporibus minima odio!
      </p>
    </div>
    </>
 
  );
} 

export default App;
