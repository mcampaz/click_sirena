import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";

import ProjectDash from "./components/containers/Projects/ProjectDash/ProjectDash";
import ProjectDetails from "./components/containers/Projects/ProjectDetails/ProjectDetails";


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
            <Route path="/" element={<ProjectDash />}></Route>
            <Route path="/project/:id" element={<ProjectDetails />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;