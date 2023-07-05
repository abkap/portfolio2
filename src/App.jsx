import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";

function App() {
  // return <ProjectsPage />;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="works" element={<ProjectsPage />} />
      <Route
        path="*"
        element={<div className="text-white">No route found</div>}
      />
    </Routes>
  );
}

export default App;
