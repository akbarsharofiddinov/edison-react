import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { EdisonContextProvider } from "./context/EdisonContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  console.log("App");

  return (
    <EdisonContextProvider>
      <RouterProvider router={router} />
    </EdisonContextProvider>
  );
}

export default App;
