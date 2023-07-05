import { Route, Routes } from "react-router";
import HomePage from "./home";
import ProjectsPage from "./projects";

function App() {
  // return <ProjectsPage />;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="works" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
