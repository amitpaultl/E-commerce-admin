import { RouterProvider } from "react-router";
import Router from "./components/Router/Router";
import './App.css'

function App() {

  return (
    <div >
      <RouterProvider router={Router}>

      </RouterProvider>
    </div>
  );
}

export default App;
