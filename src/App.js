import { Routes, Route } from "react-router-dom";
import Home from './page/Home'
import Profile from './page/Profile'
import Project from './page/Project'
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/project" element={<Project />}/>
    </Routes>
    
  );
}

export default App;
