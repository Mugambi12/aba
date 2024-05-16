import React, { useState, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Preloader from "./Components/Preloader/Preloader";

// Lazy load components
const LazyApiDocs = React.lazy(() => import("./pages/apiDocs"));
const LazyHomePage = React.lazy(() => import("./pages/Home"));
const LazyAuthPage = React.lazy(() => import("./pages/Auth"));
const LazyOurStory = React.lazy(() => import("./pages/OurStory"));
const LazyThematicAreas = React.lazy(() => import("./pages/ThematicAreas"));
const LazyNewsRoomPage = React.lazy(() => import("./pages/NewsRoom"));
const LazyContactPage = React.lazy(() => import("./pages/Contact"));
const LazyAllData = React.lazy(() => import("./pages/AllData/AllData"));

const App = () => {
  const [isRoutesLoaded, setIsRoutesLoaded] = useState(false);

  useEffect(() => {
    setIsRoutesLoaded(true);
  }, []);

  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        {isRoutesLoaded && (
          <Routes>
            <Route path="/" element={<LazyHomePage />} />
            <Route path="/auth" element={<LazyAuthPage />} />
            <Route path="/our-story" element={<LazyOurStory />} />
            <Route path="/thematic-areas" element={<LazyThematicAreas />} />
            <Route path="/newsroom" element={<LazyNewsRoomPage />} />
            <Route path="/contact-us" element={<LazyContactPage />} />

            <Route path="/all-data" element={<LazyAllData />} />

            <Route path="/docs/api" element={<LazyApiDocs />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Suspense>
    </Router>
  );
};

export default App;
