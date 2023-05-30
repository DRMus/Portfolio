import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import AboutView from "./components/About/AboutView";
import MainPage from "./components/MainPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "about",
          element: <AboutView />,
        },
      ],
    },
  ],
  { basename: "/" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
