import './App.css';
function App() {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">PCB Visualizer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">PCBAVisualizer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Summary</a>
        </li>          
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div>

</div>
<nav className="navbar navbar-expand-lg bg-body-tertiary"> 
  <div className="container-fluid">
    <a className="navbar-brand" href="/">PCB Viewer</a>
    <a className="navbar-brand" href="/">PCB Checker</a>
    <a className="navbar-brand" href="/">Panel Editor</a>
    <a className="navbar-brand" href="/">Buildup Editor</a>
    <a className="navbar-brand" href="/">Layer Editor</a>
    <a className="navbar-brand" href="/">Drill Editor</a>
    <a className="navbar-brand" href="/">Outline/Milling Editor</a>
    <a className="navbar-brand" href="/">Paste Editor</a>
    <a className="navbar-brand" href="/">Marking Editor</a>
    <a className="navbar-brand" href="/">Impedance Cacluator</a>
    <a className="navbar-brand" href="/">Pixture Editor</a>
  </div> 
</nav>
</>
  );
} 

export default App;
