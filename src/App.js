import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Languages from "./components/Languages";

import video from "./img/background-video.mp4";

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video src={video} autoPlay muted loop></video>
      </div>

      <Header />
      <Languages />
      <Routes>
        <Route index path="/" element={<Profile />}></Route>
        <Route index path="/education" element={<Education />}></Route>
        <Route index path="/projects" element={<Projects />}></Route>
        <Route index path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
