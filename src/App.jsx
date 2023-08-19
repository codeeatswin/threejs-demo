import Nav from "./components/Nav";
import Jumbotron from "./components/jumbotron";
import SoundSections from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebGiViewer";
function App() {

  return (
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <SoundSections/>
      <DisplaySection/>
      <WebgiViewer/>
    </div>
  );
}

export default App;
