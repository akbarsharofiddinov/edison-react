import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { EdisonContextProvider } from "./context/EdisonContext";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/error",
      element: <ErrorComponent />,
    },
  ]);

  return (
    <EdisonContextProvider>
      <RouterProvider router={router} />
    </EdisonContextProvider>
  );
}

export default App;
