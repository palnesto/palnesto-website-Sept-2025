import { Suspense } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { ApplicationFooter } from "./layouts/application-layout";

function App() {
  const appRoutes = useRoutes(routes);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ApplicationFooter>{appRoutes}</ApplicationFooter>
    </Suspense>
  );
}

export default App;
