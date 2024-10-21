import { Loader } from "/src/components/Loader";

import React from "react";
import { useRoutes } from "react-router-dom";

const Home = React.lazy(() => import("/src/pages/Home"));
const Contact = React.lazy(() => import("/src/pages/Contact"));
const Projects = React.lazy(() => import("/src/pages/Projects"));

const Routes = () => {
  const routes = [
    {
      index: true,
      element: (
        <React.Suspense fallback={<Loader />}>
          <Home />
        </React.Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Contact />
        </React.Suspense>
      ),
    },
    {
      path: "/projects",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Projects />
        </React.Suspense>
      ),
    },
  ];

  return useRoutes(routes);
};

export default Routes;
