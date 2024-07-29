import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Profile />}></Route>
        <Route index path="/education" element={<Education />}></Route>
        <Route index path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
