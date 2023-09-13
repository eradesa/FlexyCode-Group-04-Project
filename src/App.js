import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Footerbar from "./components/global/Footerbar";
import Sidebar from "./components/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Students from "./pages/students";
import Courses from "./pages/courses";
import Instructors from "./pages/instructors";
import Announcements from "./pages/announcements";
import Users from "./pages/users";
import Permissions from "./pages/permissions";


import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar title={"Dummy Header Bar"} setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/users" element={<Users />} />
              <Route path="/permissions" element={<Permissions />} />             
            </Routes>
            <Footerbar title={"Dummy Footer Bar"} setIsSidebar={setIsSidebar} />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
