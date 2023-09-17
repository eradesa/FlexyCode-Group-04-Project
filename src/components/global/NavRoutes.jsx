//import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Dashboard from  '../../pages/DashboardL.jsx';
import Students from '../../pages/Students.jsx';
import Instructors from '../../pages/Instructors.jsx';
import Courses from '../../pages/Courses.jsx';
import Announcements from '../../pages/Announcements.jsx';
import Users from '../../pages/Users.jsx';
import Permissions from '../../pages/Permissions.jsx';

// eslint-disable-next-line react/prop-types
const NavRoutes = ({isDarkMode}) => {
  return (
    <section>
        <Routes>
          <Route path="/" element={<Dashboard isDarkMode={isDarkMode} />} />
          <Route path="/students" element={<Students isDarkMode={isDarkMode} />} />
          <Route path="/courses" element={<Courses isDarkMode={isDarkMode}/>} />
          <Route path="/instructors" element={<Instructors isDarkMode={isDarkMode} />} />
          <Route path="/announcements" element={<Announcements isDarkMode={isDarkMode} />} />
          <Route path="/users" element={<Users isDarkMode={isDarkMode} />} />
          <Route path="/permissions" element={<Permissions isDarkMode={isDarkMode} />} />
        </Routes>
    </section>
  );
};

export default NavRoutes;