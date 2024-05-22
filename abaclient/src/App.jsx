import React, { useState, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Preloader from "./Components/Preloader/Preloader";

// Lazy load components
const LazyAuthPage = React.lazy(() => import("./pages/Auth/Auth.jsx"));
const LazyHomePage = React.lazy(() => import("./pages/Home"));
const LazyOurStory = React.lazy(() => import("./pages/OurStory/OurStory.jsx"));
const LazyOurCompaign = React.lazy(() =>
  import("./pages/WhereWeWork/WhereWeWork.jsx")
);
const LazyThematicAreas = React.lazy(() =>
  import("./pages/ThematicAreas/ThematicAreas.jsx")
);
const LazyHowWeWork = React.lazy(() =>
  import("./pages/HowWeWork/HowWeWork.jsx")
);
const LazyNewsRoom = React.lazy(() =>
  import("./pages/NewsPublications/NewsRoom.jsx")
);
const LazyNewsPost = React.lazy(() =>
  import("./pages/NewsPublications/NewsPost.jsx")
);
const LazyPublications = React.lazy(() =>
  import("./pages/NewsPublications/Publications.jsx")
);
const LazyContact = React.lazy(() => import("./pages/Contact/Contact.jsx"));
const LazyAllData = React.lazy(() => import("./pages/AllData/AllData"));
const LazyApiDocs = React.lazy(() => import("./pages/Docs/ApiDocs.jsx"));

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
            <Route path="/where-we-work" element={<LazyOurCompaign />} />
            <Route path="/thematic-areas" element={<LazyThematicAreas />} />
            <Route path="/how-we-work" element={<LazyHowWeWork />} />
            <Route path="/newsroom" element={<LazyNewsRoom />} />
            <Route path="/news-post" element={<LazyNewsPost />} />
            <Route path="/publications" element={<LazyPublications />} />
            <Route path="/contact-us" element={<LazyContact />} />

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
