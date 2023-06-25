import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
function App() {
  const webGiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webGiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webGiViewerRef} />
    </div>
  );
}

export default App;
