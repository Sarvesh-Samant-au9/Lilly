import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Map from "./Components/Content/Map";
function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Map />
    </div>
  );
}

export default App;
