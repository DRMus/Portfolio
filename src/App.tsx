import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.scss";
import AboutView from "./components/About/AboutView";
import MainPage from "./components/MainPage";
import ProjectsView from "./components/Projects/ProjectsView";
import ContactsView from "./components/Contacts/ContactsView";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "about",
          element: <AboutView />,
        },
        {
          path: "projects",
          element: <ProjectsView />,
        },
        {
          path: "contacts",
          element: <ContactsView />,
        },
      ],
    },
  ],
  
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
